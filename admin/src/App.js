import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Toast from "./components/LoadingError/Toast";
import { useRoutes, useLocation } from "react-router-dom";
import { getRoutes } from "./routes";
import store from "./store";
import { getUserProfile } from "./actions/userActions";
function App() {
  // useEffect(() => {
  //   store.dispatch(getUserProfile());
  // }, []);
  const location = useLocation();
  const pathname = location.pathname;
  const routing = useRoutes(getRoutes(pathname));
  return (
    <>
      <Toast />
      {routing}
    </>
  );
}

export default App;
