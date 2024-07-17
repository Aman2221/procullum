import Layout from "@/components/Layout";
import SignUpPg from "@/components/SignUpPg";
import React from "react";

const SignUp = () => {
  return (
    <Layout showAuthFooter={true} showNav={true}>
      <SignUpPg />
    </Layout>
  );
};

export default SignUp;
