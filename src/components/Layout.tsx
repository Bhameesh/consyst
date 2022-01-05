import React from "react";
import Topbar from "./Topbar";

const Layout = ({ children, settings}) => {
  return (
    <React.Fragment>
      {settings.topbar ? <Topbar /> : null}
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
