import ForgotPassword from "@/components/ForgotPassword";
import Layout from "@/components/Layout";
import React from "react";

const Forgot = () => {
  return (
    <Layout showNav={true} showAuthFooter={true} isFooterAbs={true}>
      <ForgotPassword />
    </Layout>
  );
};

export default Forgot;
