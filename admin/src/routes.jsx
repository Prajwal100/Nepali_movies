import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Celebrity from "./components/celebrity/Celebrities";
import CreateCelebrity from "./components/celebrity/AddCelebrity";
import EditCelebrity from "./components/celebrity/EditCelebrity";
import Dashboard from "./components/dashboard";
import { isLoggedIn } from "./utils/helper";
import ProfilePage from "./components/profile/Profile"
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
          path: "/admin/celebrities",
          element: <Celebrity />,
        },
        {
          path: "/admin/celebrity/create",
          element: <CreateCelebrity />,
        },
        {
          path: "/admin/celebrity/edit/:id",
          element: <EditCelebrity />,
        },
        
        // PROFILE PAGE HERE
        {
          path:'/admin/profile',
          element:<ProfilePage />
        }
      ],
    },
  ];

  return routes;
};
