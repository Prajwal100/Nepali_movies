import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Celebrity from "./components/celebrity/Celebrities";
import CreateCelebrity from "./components/celebrity/AddCelebrity";
import Dashboard from "./components/dashboard";
import { isLoggedIn } from "./utils/helper";

// Login page
import LoginPage from './components/auth/login'
export const getRoutes = () => {
  
  const routes=[
    {
      path:'/',
      children:[
        {
          path:'/',
          element:isLoggedIn() ? <Navigate to="/" /> : <Navigate to="/login" />,
        },
        {
          path:'login',
          element:isLoggedIn() ? <Navigate to="/" /> : <LoginPage />,
        
        }
      ]
      
    }
  ]
  
  return routes;
  // return (
  //   <Routes>
  //     <Route exact path="/" element={<Dashboard />}></Route>
  //     <Route exact path="/celebrities" element={<Celebrity />}></Route>
  //     <Route
  //       exact
  //       path="/celebrity/create"
  //       element={<CreateCelebrity />}
  //     ></Route>
  //   </Routes>
  // );
};
