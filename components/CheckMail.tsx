import React from "react";
import BorderInput from "@/common/BorderInput";
import BlueBgButton from "@/common/BlueBgButton";
import Image from "next/image";
import LinkButton from "@/common/LinkButton";

const CheckMailPg = () => {
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
            <h1 className="text-4xl font-semibold">Check your Email</h1>
            <span className="text-base max-w-96">
              We have sent an email with password reset information to
              n****e@e***e.com.
            </span>
            <div className="my-10">
              <span className="text-base w-full">
                Didn’t receive the email? Check spam or promotion folder
              </span>
              <BlueBgButton
                text="Resend password rest link"
                extrClss="w-full mt-6"
              />
              <LinkButton
                href="/sign-in"
                text="Back to login"
                extrClss="text-base text-semibold mt-4 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckMailPg;
