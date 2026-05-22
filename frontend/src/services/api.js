import axios from "axios";

const API = axios.create({
  baseURL: "http://taskflow-app-production-25f7.up.railway.app/api",
});

export default API;