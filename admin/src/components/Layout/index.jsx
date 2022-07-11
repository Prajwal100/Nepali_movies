import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const AdminLayouts = ({ children }) => {
  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          {children}

          <Footer />
        </div>
      </div>

    </>
  );
};

export default AdminLayouts;
