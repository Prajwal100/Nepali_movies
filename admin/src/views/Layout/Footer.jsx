import React from "react";
import {useSelector} from 'react-redux';
function Footer() {
  
  const {settings}= useSelector((state) => state.dashboard);
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>{settings.copyright}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
