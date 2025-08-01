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

  it("should load movie details, directors, and writers", async () => {
    const fakeMovie = { id: 1, title: "Fake Movie" };
    const fakeCrew = [
      { job: "Director", name: "Director One" },
      { job: "Writer", name: "Writer One" },
      { job: "Screenplay", name: "Writer Two" },
      { job: "Producer", name: "Producer One" },
    ];

    mockAxios.get.mockImplementation((url) => {
      if (url.includes("/credits")) {
        return Promise.resolve({ data: { crew: fakeCrew } });
      }
      if (url.includes("/movie/")) {
        return Promise.resolve({ data: fakeMovie });
      }
      return Promise.reject(new Error("Unknown URL"));
    });

    const { result } = renderHook(() => useMovieDetails("123"));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.movie).toEqual(fakeMovie);
    expect(result.current.directors).toEqual(["Director One"]);
    expect(result.current.writers).toEqual(["Writer One", "Writer Two"]);
  });

  it("should not fetch if no id is provided", () => {
    const { result } = renderHook(() => useMovieDetails(undefined));

    expect(result.current.loading).toBe(true);
    expect(result.current.movie).toBeNull();
    expect(result.current.directors).toEqual([]);
    expect(result.current.writers).toEqual([]);
  });
});
