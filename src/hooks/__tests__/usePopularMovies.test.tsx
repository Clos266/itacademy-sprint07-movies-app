import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { usePopularMovies } from "../usePopularMovies";
import * as moviesService from "../../services/movies";

describe("usePopularMovies", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("debe cargar películas populares correctamente", async () => {
    const fakeData = {
      movies: [
        { id: 1, title: "Movie 1" },
        { id: 2, title: "Movie 2" },
      ],
      totalPages: 10,
      currentPage: 1,
    };

    vi.spyOn(moviesService, "getPopularMovies").mockResolvedValue(fakeData);

    const { result } = renderHook(() => usePopularMovies());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.movies).toEqual(fakeData.movies);
    expect(result.current.error).toBeNull();
    expect(result.current.totalPages).toBe(10);
  });

  it("debe manejar error al cargar películas", async () => {
    const fakeError = new Error("Fallo en fetch");

    vi.spyOn(moviesService, "getPopularMovies").mockRejectedValue(fakeError);

    const { result } = renderHook(() => usePopularMovies());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.movies).toEqual([]);
    expect(result.current.error).toEqual(fakeError);
  });
});
