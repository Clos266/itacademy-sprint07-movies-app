import axios from "./axios";

axios
  .get("/movie/popular")
  .then((res) => console.log("Películas populares:", res.data.results))
  .catch((err) => console.error("Error:", err));
