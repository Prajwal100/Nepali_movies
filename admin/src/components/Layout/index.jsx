import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Navbar from './Header'
const AdminLayouts = ({ children }) => {
  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          
           
     <div id="content">
       <Navbar />
       
       {children}

       
      </div>

          <Footer />
        </div>
      </div>

    </>
  );
};

export default AdminLayouts;
