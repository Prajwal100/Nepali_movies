import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CelebrityPage from "./Frontend/Celebrity/CelebrityList";
import Home from "../components/Frontend/home/index";
import CelebrityDetail from "./Frontend/Celebrity/celebrityDetails";
import MovieDetail from "./Frontend/Movies/movieDetails";

import LoginPage from "./Frontend/auth/Login";
import RegisterPage from "./Frontend/auth/Register";

const routes = () => {
  return (
    <Routes>
      {/* Frontend Routes here */}

      <Route exact path="/login" element={<LoginPage />}></Route>
      <Route exact path="/register" element={<RegisterPage />}></Route>

      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/celebrities" element={<CelebrityPage />}></Route>
      <Route exact path="/celebrity/:id" element={<CelebrityDetail />}></Route>

      <Route exact path="/movie/:id" element={<MovieDetail />}></Route>
    </Routes>
  );
};

export default routes;
