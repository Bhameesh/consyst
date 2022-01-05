import { init } from "@rematch/core";
import immerPlugin from "@rematch/immer";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import * as models from "./models";

const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);

const store = init<any>({
  models,
  redux: {
    middlewares: [routeMiddleware],
    devtoolOptions: {},
    rootReducers: {
      RESET_APP: () => undefined,
    },
  },
  plugins: [immerPlugin()],
});

export { store, history };
