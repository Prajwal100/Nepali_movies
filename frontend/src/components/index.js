import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CelebrityPage from "./Pages/Celebrity/CelebrityList";
import Home from "../components/Pages/home/index";
import CelebrityDetail from "./Pages/Celebrity/celebrityDetails";
import MovieDetail from "./Pages/Movies/movieDetails";

import LoginPage from "./Pages/auth/Login";
import RegisterPage from "./Pages/auth/Register";
import MovieList from "./Pages/Movies/MovieList";
import Dashboard from "./Pages/account/Dashboard";

const routes = () => {
  return (
    <Routes>
      {/* Frontend Routes here */}

      <Route exact path="/login" element={<LoginPage />}></Route>
      <Route exact path="/register" element={<RegisterPage />}></Route>

      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/celebrities" element={<CelebrityPage />}></Route>
      <Route exact path="/celebrity/:id" element={<CelebrityDetail />}></Route>

      <Route exact path="/movies" element={<MovieList />}></Route>
      <Route exact path="/movie/:id" element={<MovieDetail />}></Route>

      <Route exact path="/account" element={<Dashboard />} />
    </Routes>
  );
};

export default routes;
