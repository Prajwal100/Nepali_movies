import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Helmet } from "react-helmet";
const Layout = ({ children, title = "" }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
