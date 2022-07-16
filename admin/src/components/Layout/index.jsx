import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Navbar from "./Header";
import Helmet from 'react-helmet'
const AdminLayouts = ({ children,title='' }) => {
  return (
    <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
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
