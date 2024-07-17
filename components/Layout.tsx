import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import Footer from "./Footer";
import NavBar from "./Nav/NavBar";
import AuthFooter from "./AuthFooter";

const Layout = ({
  children,
  showFooter = false,
  showNav = false,
  showAuthFooter = false,
  isFooterAbs = false,
}: {
  children?: React.ReactNode;
  showFooter?: boolean;
  showNav?: boolean;
  showAuthFooter?: boolean;
  isFooterAbs?: boolean;
}) => {
  return (
    <>
      {showNav ? <NavBar showMenuAndButtons={false} /> : <></>}
      <div
        className={`${showNav ? "mt-32" : ""} ${
          showFooter || showAuthFooter ? "mb-14" : ""
        } container m-auto h-full`}
      >
        {children}
      </div>
      {showFooter ? <Footer /> : <></>}
      {showAuthFooter ? <AuthFooter isAbsolute={isFooterAbs} /> : <></>}

      <ToastContainer />
    </>
  );
};

export default Layout;
