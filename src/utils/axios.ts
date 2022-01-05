import axios from "axios";

axios.defaults.withCredentials = true;

export let apiInstance: any;

export function api() {
  if (!apiInstance) {
    apiInstance = axios.create({
      baseURL: "URL",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      withCredentials: true,
    });
  }

  return apiInstance;
}

export const catchHandler = async (e: any) => {
  if (e.message === "Network Error") {
    return;
  }
  const res = e?.response?.data || {
    message: e.message || "Please try again later.",
  };
  throw res;
};
