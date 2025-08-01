import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "../../lib/axios";
import { useActorDetails } from "../useActorDetails";

vi.mock("../../lib/axios");

describe("useActorDetails", () => {
  const mockAxios = axios as jest.Mocked<typeof axios>;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("loads actor and movies correctly", async () => {
    const fakeActor = {
      name: "Fake Actor",
      biography: "Test biography",
      birthday: "1980-01-01",
    };
    const fakeMovies = Array(10)
      .fill(null)
      .map((_, i) => ({
        id: i,
        title: `Movie ${i}`,
        poster_path: `/poster${i}.jpg`,
      }));

    mockAxios.get.mockImplementation((url) => {
      if (url.includes("/movie_credits")) {
        return Promise.resolve({ data: { cast: fakeMovies } });
      }
      if (url.includes("/person/")) {
        return Promise.resolve({ data: fakeActor });
      }
      return Promise.reject(new Error("Unknown URL"));
    });

    const { result } = renderHook(() => useActorDetails("123"));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.actor).toEqual(fakeActor);
    expect(result.current.movies.length).toBe(8);
    expect(result.current.movies[0].title).toBe("Movie 0");
  });

  it("does not fetch if no id", () => {
    const { result } = renderHook(() => useActorDetails(undefined));

    expect(result.current.loading).toBe(true);
    expect(result.current.actor).toBeNull();
    expect(result.current.movies).toEqual([]);
  });
});
