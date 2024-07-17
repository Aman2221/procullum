import React from "react";
import BorderInput from "@/common/BorderInput";
import BlueBgButton from "@/common/BlueBgButton";
import Image from "next/image";
import LinkButton from "@/common/LinkButton";

const ForgotPassword = () => {
  return (
    <div className="font-poppins font-inter">
      <div className="flex-center">
        <div className="grid grid-cols-2 items-center gap-20 ">
          <div className="flex-center w-full">
            <Image
              src="/img/forgot-pass.png"
              alt="sign in"
              height={600}
              width={600}
              className=" object-contain w-full"
            />
          </div>
          <div className="shadow-lg rounded-3xl py-6 px-10 w-full flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Forgot Password</h1>
            <span className="text-base max-w-96">
              Enter the email you used to create your account so we can send you
              instructions on how to reset your password.
            </span>

            <div className="w-full mt-10">
              <BorderInput
                placeholder="Email address"
                name="email_address"
                label="Enter your email address"
                type="email"
              />
            </div>
            <BlueBgButton text="Request reset link" extrClss="w-full mt-6" />
            <LinkButton
              href="/sign-in"
              text="Back to login"
              extrClss="text-base text-semibold mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
