import { useEffect } from "react";

const SessionProvider = ({ children }) => {
  const init = async () => {
    //Do the sessions checkings here
  };

  useEffect(() => {
    init();
  }, []);

  //render children based on the session results
  return children;
};

export default SessionProvider;
