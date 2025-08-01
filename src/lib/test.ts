import axios from "./axios";

axios
  .get("/movie/popular")
  .then((res) => console.log("popular movies:", res.data.results))
  .catch((err) => console.error("Error:", err));
