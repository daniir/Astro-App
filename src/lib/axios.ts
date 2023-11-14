import axios from "axios";

export const spacexAPI = axios.create({
  baseURL: "https://api.spacexdata.com",
});
