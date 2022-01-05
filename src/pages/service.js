import { setUserData, getSTList, setSTData } from "../helpers/utility";

export function loginPage(payload) {
  let data;
  data = payload;
  return setUserData(data);
}
export function addData(payload) {
  const savedData = getSTList();
  let data;
  if (savedData && savedData.length > 0) data = [...savedData, payload];
  else data = [payload];
  return setSTData(data);
}

export function deleteData(payload) {
  const savedData = getStudTeachList();
  let data;
  if (savedData && savedData.length > 0) {
    let objIndex = savedData.findIndex((x) => x.key === payload.key);
    savedData.splice(objIndex, 1);
    data = [...savedData];
  }
  return setSTData(data);
}

export function getStudTeachList() {
  return getSTList();
}
