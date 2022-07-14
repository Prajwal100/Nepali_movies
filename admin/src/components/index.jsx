import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Celebrity from './celebrity/Celebrities';
import CreateCelebrity from './celebrity/create'
import Dashboard from './dashboard';
const routes =()=>{
    return (
        <Routes>
      <Route exact path="/" element={<Dashboard />}></Route>
      <Route exact path="/celebrities" element={<Celebrity />}></Route>
      <Route exact path="/celebrity/create" element={<CreateCelebrity />}></Route>
            
        </Routes>
    )
}

export default routes;