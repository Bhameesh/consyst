import React, { Suspense } from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import SessionProvider from "./components/SessionProvider";
import asyncComponent from "./helpers/async-func";
import { getJsonCookies } from "./helpers/utility";

const PublicRoute = ({
  component: Component,
  layoutSettings = {},
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout settings={layoutSettings}>
        <Component {...props} settings={layoutSettings} />
      </Layout>
    )}
  />
);

const RestrictedRoute = ({
  component: Component,
  layoutSettings = {},
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      getJsonCookies() ? (
        <Layout settings={layoutSettings} {...props}>
          <Component {...props} settings={layoutSettings} />
        </Layout>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const UnRestrictedRoute = ({
  component: Component,
  layoutSettings = {},
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !getJsonCookies() ? (
        <Layout settings={layoutSettings} {...props}>
          <Component {...props} settings={layoutSettings} />
        </Layout>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const AppRouter = (props) => {
  const { history } = props;
  return (
    <Suspense fallback={() => <div>Loading...</div>}>
      <Router history={history}>
        <Switch>
          <SessionProvider>
            <PublicRoute
              exact
              path={"/"}
              layoutSettings={{
                topbar: true,
                footer: true,
              }}
              component={asyncComponent(() => import("./pages/home"))}
            />
            <PublicRoute
              exact
              path={"/content"}
              layoutSettings={{
                topbar: true,
                footer: true,
              }}
              component={asyncComponent(() => import("./pages/content"))}
            />
          </SessionProvider>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
