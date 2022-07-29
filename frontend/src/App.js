import React, { useEffect, useState } from "react";
import Routes from "./components/index";
import { loadUser } from "./actions/userActions";
import store from "./store";

import { Toaster } from "react-hot-toast";

//Loader spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div className="section">
      <Toaster position="bottom-right" reverseOrder={false} />

      <Routes />
    </div>
  );
}

export default App;
