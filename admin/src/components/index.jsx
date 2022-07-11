import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Dashboard from './dashboard';
const routes =()=>{
    return (
        <Routes>
      <Route exact path="/" element={<Dashboard />}></Route>
            
        </Routes>
    )
}

export default routes;