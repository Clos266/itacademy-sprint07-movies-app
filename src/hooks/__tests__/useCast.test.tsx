/// <reference types="vitest" />

import { renderHook, waitFor } from "@testing-library/react";
import { useCast } from "../useCast";
import { vi } from "vitest";

vi.mock("../../services/movies", () => {
  return {
    getMovieCredits: vi.fn(),
  };
});

import { getMovieCredits } from "../../services/movies";

describe("useCast", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should load cast correctly", async () => {
    const fakeCast = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      name: `Actor ${i}`,
    }));

    (getMovieCredits as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      cast: fakeCast,
    });

    const { result } = renderHook(() => useCast("123"));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.cast).toHaveLength(9);
    expect(result.current.cast[0].name).toBe("Actor 0");
    expect(getMovieCredits).toHaveBeenCalledWith("123");
  });

  test("should not fetch if no id is provided", () => {
    renderHook(() => useCast(undefined));

    expect(getMovieCredits).not.toHaveBeenCalled();
  });
});
