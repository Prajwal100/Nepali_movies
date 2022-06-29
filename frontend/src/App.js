import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Layout/Header/Header";
import { Routes, Route } from "react-router-dom";
import CelebrityPage from "./pages/CelebrityPage/CelebrityList";
import Home from "./pages/Home/Home";
import CelebrityDetail from "./pages/CelebrityPage/celebrityDetails";
import MovieDetail from "./components/Movies/movieDetails";

import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";

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
      <Toaster position="bottom-right" reverseOrder={false} />

      <Header />
      <Routes>
        {/* AUTH ROUTES STARTS */}
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>

        {/* AUTH ROUTES ENDS */}

        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/celebrities" element={<CelebrityPage />}></Route>
        <Route
          exact
          path="/celebrity/:id"
          element={<CelebrityDetail />}
        ></Route>

        <Route exact path="/movie/:id" element={<MovieDetail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
