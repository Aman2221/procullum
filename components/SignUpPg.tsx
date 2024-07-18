import React from "react";
import BorderInput from "@/common/BorderInput";
import BlueBgButton from "@/common/BlueBgButton";
import Image from "next/image";
import Link from "next/link";
import data from "@/json/index.json";

const SignUpPg = () => {
  return (
    <div className="font-poppins">
      <div className="flex-center">
        <div className="grid grid-cols-2 items-center gap-20 ">
          <div className="flex-center w-full">
            <Image
              src="/img/sign-up.png"
              alt="sign in"
              height={600}
              width={600}
              className=" object-contain w-full"
            />
          </div>
          <div className="shadow-lg rounded-3xl py-6 px-10 w-full flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <h3 className="text-2xl ">
                Welocome to <span className="blue-color">Procullum</span>
              </h3>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">Have an Account ?</span>
                <Link className="text-sm blue-color" href="/sign-in">
                  Sign in
                </Link>
              </div>
            </div>
            <h1 className="text-4xl font-semibold">Sign in</h1>
            <div className="flex gap-6 mt-6">
              {data.sign_in_buttons.map((item) => (
                <div key={item.name} className="bg-gray-100 rounded-md p-3">
                  <Image
                    src={item.img_url}
                    alt={item.name}
                    height={20}
                    width={20}
                    className="object-contain w-full"
                  />
                </div>
              ))}
            </div>
            <div className={`my-3 flex items-center w-full mt-10`}>
              <span className="flex-1 border border-slate-200 w-full mr-1"></span>
              <p className={`mb-0 text-center font-normal`}>Or sign in with</p>
              <span className="flex-1 border border-slate-200 w-full ml-1"></span>
            </div>
            <div className="flex gap-6 ">
              {data.sign_up_feilds
                .filter(
                  (item) =>
                    item.name == "Phone_number" || item.name == "User_name"
                )
                .map((item) => (
                  <div key={item.name}>
                    <BorderInput
                      placeholder={item.placeholder}
                      name={item.name.replace("_", " ")}
                      type={item.type}
                    />
                  </div>
                ))}
            </div>
            <div className="flex flex-col gap-6 mt-6">
              {data.sign_up_feilds
                .filter(
                  (item) =>
                    item.name !== "Phone_number" && item.name !== "User_name"
                )
                .map((item) => (
                  <div key={item.name}>
                    <BorderInput
                      placeholder={item.placeholder}
                      name={item.name.replace("_", " ")}
                      type={item.type}
                    />
                  </div>
                ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-2 items-center">
                <input
                  className="border-2 border-gray-400 rounded w-4 h-4 outline-none"
                  type="checkbox"
                  name="remeber_me"
                  id="remeber_me"
                />
                <span className="text-sm">Remeber me</span>
              </div>
              <Link className="text-sm blue-color" href="/forgot-password">
                Forgot password
              </Link>
            </div>
            <BlueBgButton text="Sign in" extrClss="w-full mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPg;
