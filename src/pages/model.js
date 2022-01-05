import { randomNumberPick } from "../helpers";
import * as service from "./service";
export default {
  state: {
    StudTeach: [],
    loading: false,
  },
  reducers: {
    onRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },
    onError(state, data) {
      return {
        ...state,
        errMsg: data.message,
        loading: false,
      };
    },
    onLoginPage(state, data) {
      return {
        ...state,
        loading: false,
      };
    },
    onAddData(state, data) {
      return {
        ...state,
        loading: false,
      };
    },
    onGetStudTeachList(state, data) {
      return {
        ...state,
        StudTeach: data,
        loading: false,
      };
    },
    onDeleteData(state, data) {
      return {
        ...state,
        loading: false,
      };
    },
  },
  effects: {
    async loginPage(payload) {
      this.onRequest();
      try {
        let res = await service.loginPage(payload);
        this.onLoginPage(res);
        return res;
      } catch (e) {
        this.onError(e);
      }
    },
    async addData(payload) {
      this.onRequest();
      try {
        payload.key = randomNumberPick();
        let res = await service.addData(payload);
        this.onAddData(res);
        return res;
      } catch (e) {
        this.onError(e);
      }
    },
    async getStudTeachList() {
      this.onRequest();
      try {
        let res = await service.getStudTeachList();
        this.onGetStudTeachList(res);
        return res;
      } catch (e) {
        this.onError(e);
      }
    },
    async deleteData(payload) {
      this.onRequest();
      try {
        let res = await service.deleteData(payload);
        this.onDeleteData(res);
        return res;
      } catch (e) {
        this.onError(e);
      }
    },
  },
};
