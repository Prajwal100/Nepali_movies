import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./views/dashboard";
import { isLoggedIn } from "./utils/helper";
import ProfilePage from "./views/profile/Profile"
import ProfileSettings from './views/profile/ProfileSettings'
import Celebrity from "./views/celebrity/Celebrities";
import CreateCelebrity from "./views/celebrity/AddCelebrity";
import EditCelebrity from "./views/celebrity/EditCelebrity";

import Movies from './views/movie/Movies'
import CreateMovie from './views/movie/AddMovie'
import EditMovie from './views/movie/EditMovie';
import GeneralSettings from './views/settings/GeneralSettings'
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
        
        // CELEBRITIES ROUTES
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
        
        // MOVIES ROUTES
        {
          path:"/admin/movies",
          element:<Movies />
        },
        {
          path: "/admin/movie/create",
          element: <CreateMovie />,
        },
        {
          path: "/admin/movie/edit/:id",
          element: <EditMovie />,
        },
        // PROFILE PAGE HERE
        {
          path:'/admin/profile',
          element:<ProfilePage />
        },
        {
          path:'/admin/profile-settings',
          element:<ProfileSettings />
        },
        
        // General Settings
        {
          path:'/admin/settings',
          element:<GeneralSettings />
        }
      ],
    },
  ];

  return routes;
};
