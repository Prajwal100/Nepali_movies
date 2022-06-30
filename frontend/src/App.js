import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Layout/Header/Header";
import Routes from "./components/index";
import { loadUser } from "./actions/userActions";
import store from "./store";

import { Toaster } from "react-hot-toast";

//Loader spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from "./components/Layout/Footer/Footer";
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div className="section">
      {/* <Toaster position="bottom-right" reverseOrder={false} /> */}

      <Routes />
    </div>
  );
}

export default App;
