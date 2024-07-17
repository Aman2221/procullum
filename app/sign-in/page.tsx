import Layout from "@/components/Layout";
import SignInPg from "@/components/SignInPg";
import React from "react";

const SignIn = () => {
  return (
    <Layout showAuthFooter={true} showNav={true} isFooterAbs={true}>
      <SignInPg />
    </Layout>
  );
};

export default SignIn;
