import React, { FC, Suspense } from "react";
import { Provider } from "react-redux";
import { store, history } from "./utils/store";
import Routes from "./router";
import  ErrorBoundary from "./components/ErrorBoundary";

export const App: FC = () => {
  return (
    <Suspense fallback={() => <div>Loading...</div>}>
      <ErrorBoundary>
        <Provider store={store}>
          <Routes history={history} />
        </Provider>
      </ErrorBoundary>
    </Suspense>
  );
};

export default App;
