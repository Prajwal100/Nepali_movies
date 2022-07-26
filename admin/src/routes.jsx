import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Celebrity from "./views/celebrity/Celebrities";
import CreateCelebrity from "./views/celebrity/AddCelebrity";
import EditCelebrity from "./views/celebrity/EditCelebrity";
import Dashboard from "./views/dashboard";
import { isLoggedIn } from "./utils/helper";
import ProfilePage from "./views/profile/Profile"
// Login page
import LoginPage from "./views/auth/login";
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
