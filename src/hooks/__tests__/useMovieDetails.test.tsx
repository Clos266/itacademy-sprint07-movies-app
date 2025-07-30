import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "../../lib/axios";
import { useMovieDetails } from "../useMovieDetails";

vi.mock("../../lib/axios");

describe("useMovieDetails", () => {
  const mockAxios = axios as jest.Mocked<typeof axios>;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debe cargar detalles de película, directores y escritores", async () => {
    const fakeMovie = { id: 1, title: "Fake Movie" };
    const fakeCrew = [
      { job: "Director", name: "Director Uno" },
      { job: "Writer", name: "Writer Uno" },
      { job: "Screenplay", name: "Writer Dos" },
      { job: "Producer", name: "Producer Uno" },
    ];

    mockAxios.get.mockImplementation((url) => {
      if (url.includes("/credits")) {
        return Promise.resolve({ data: { crew: fakeCrew } });
      }
      if (url.includes("/movie/")) {
        return Promise.resolve({ data: fakeMovie });
      }
      return Promise.reject(new Error("URL desconocida"));
    });

    const { result } = renderHook(() => useMovieDetails("123"));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.movie).toEqual(fakeMovie);
    expect(result.current.directors).toEqual(["Director Uno"]);
    expect(result.current.writers).toEqual(["Writer Uno", "Writer Dos"]);
  });

  it("no hace fetch si no hay id", () => {
    const { result } = renderHook(() => useMovieDetails(undefined));

    expect(result.current.loading).toBe(true);
    expect(result.current.movie).toBeNull();
    expect(result.current.directors).toEqual([]);
    expect(result.current.writers).toEqual([]);
  });
});
