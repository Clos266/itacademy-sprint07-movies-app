/// <reference types="vitest" />

import { renderHook, waitFor } from "@testing-library/react";
import { useCast } from "../useCast";
import { vi } from "vitest";

vi.mock("../../services/movies", async () => {
  // mockea solo lo necesario
  return {
    getMovieCredits: vi.fn(), // función vacía que luego puedes controlar
  };
});

import { getMovieCredits } from "../../services/movies";

describe("useCast", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // 👈 limpia entre tests
  });

  test("debe cargar el cast correctamente", async () => {
    // 👉 preparamos la respuesta falsa

    const fakeCast = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      name: `Actor ${i}`,
    }));
    (getMovieCredits as ReturnType<typeof vi.fn>).mockResolvedValue({
      cast: fakeCast,
    });

    const { result } = renderHook(() => useCast("123"));

    // 👉 esperamos a que loading sea false

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // ✅ verificamos que haya solo 9 actores

    expect(result.current.cast).toHaveLength(9);
    expect(result.current.cast[0].name).toBe("Actor 0");
    expect(getMovieCredits).toHaveBeenCalledWith("123");
  });

  test("no hace fetch si no hay id", () => {
    renderHook(() => useCast(undefined));

    expect(getMovieCredits).not.toHaveBeenCalled();
  });
});
