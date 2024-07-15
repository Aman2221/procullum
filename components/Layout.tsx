import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import Footer from "./Footer";
import NavBar from "./Nav/NavBar";

const Layout = ({
  children,
  showFooter = false,
  showNav = false,
}: {
  children?: React.ReactNode;
  showFooter?: boolean;
  showNav?: boolean;
}) => {
  return (
    <>
      {showNav ? <NavBar showMenuAndButtons={false} /> : <></>}
      <div className="container m-auto">{children}</div>
      {showFooter ? <Footer /> : <></>}
      <ToastContainer />
    </>
  );
};

export default Layout;
