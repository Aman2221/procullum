import CheckMailPg from "@/components/CheckMail";
import Layout from "@/components/Layout";
import React from "react";

const CheckMail = () => {
  return (
    <Layout showNav={true} showAuthFooter={true} isFooterAbs={true}>
      <CheckMailPg />
    </Layout>
  );
};

export default CheckMail;
