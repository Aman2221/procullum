import HomePg from "@/components/Home";
import Layout from "@/components/Layout";
import React from "react";

const Home = () => {
  return (
    <Layout showNav={true} isAuth={true}>
      <HomePg />
    </Layout>
  );
};

export default Home;
