import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para incluir el token de TMDB en cada request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = import.meta.env.VITE_TMDB_API_KEY;
    if (token) {
      config.params = {
        ...config.params,
        api_key: token,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
