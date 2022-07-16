import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Celebrity from "./components/celebrity/Celebrities";
import CreateCelebrity from "./components/celebrity/AddCelebrity";
import Dashboard from "./components/dashboard";
import { isLoggedIn } from "./utils/helper";

// Login page
import LoginPage from "./components/auth/login";
export const getRoutes = () => {
  const routes = [
    {
      path: "/",
      children: [
        {
          path: "login",
          element: isLoggedIn() ? <Navigate to="/" /> : <LoginPage />,
        },

        {
          path: "/",
          element: isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />,
        },
        {
          path: "/celebrities",
          element: <Celebrity />,
        },
        {
          path: "/celebrity/create",
          element: <CreateCelebrity />,
        },
      ],
    },
  ];

  return routes;
};
