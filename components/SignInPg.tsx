import React from "react";
import NavBar from "./Nav/NavBar";
import BorderInput from "@/common/BorderInput";
import BlueBgButton from "@/common/BlueBgButton";
import AuthFooter from "./AuthFooter";

const SignInPg = () => {
  return (
    <div className="relative h-dvh font-poppins">
      <NavBar showMenuAndButtons={false} />
      <BorderInput />
      <BlueBgButton />
      <AuthFooter />
    </div>
  );
};

export default SignInPg;
