import axios from "axios";
import config from "./config";
let apiInstance;
export function api() {
  apiInstance = axios.create({
    baseURL: config.url.trim(),
    header: {
      "Content-Type": "application/json",
    },
  });
  return apiInstance;
}
let res;

export function catchHandler(e) {
  res =
    e.response && e.response.data
      ? e.response.data
      : { message: "Network failed! Please try again." };
  throw res;
}
