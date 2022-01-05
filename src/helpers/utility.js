import { reactLocalStorage } from "reactjs-localstorage";

export function setUserData(data) {
  return reactLocalStorage.setObject("user_data", data);
}

export function getUserList() {
  return reactLocalStorage.getObject("user_data");
}
export function setSTData(data) {
  return reactLocalStorage.setObject("studteach_data", data);
}

export function getSTList() {
  return reactLocalStorage.getObject("studteach_data");
}

export function getJsonCookies() {
  let token = getUserList();
  console.log(`token`, token);
  if (token.user_name === "admin" && token.password === "admin") return true;
}
