import axios from "axios";

const api = axios.create({
  baseURL: "https://vitrine-core.herokuapp.com",
});

export default api;
