import BlueBgButton from "@/common/BlueBgButton";
import LinkButton from "@/common/LinkButton";
import Image from "next/image";
import React from "react";
import data from "@/json/index.json";
import SecHeadNormal from "./SecHeadNormal";
import CourseCard from "./CourseCard";

const HomePg = () => {
  return (
    <div className="font-poppins">
      <div className="grid grid-cols-2 items-center gap-20 home-banner">
        <div className="banner-content">
          <h1 className="large-text font-dmsans">
            Take your time and
            <span className="green-color"> learn </span>
            from anywhere
          </h1>
          <h4 className="text-lg mt-6   ">
            Technology it bringing a massive wave of evaluation on learning
            things in different ways.
          </h4>
          <div className="flex items-center gap-6 mt-20 ">
            <BlueBgButton text="Start your free trial now" extrClss="px-6" />
            <LinkButton
              text="View all Courses"
              extrClss="blue-color border rounded-lg text-sm py-3 px-6 border border-gray-200 font-medium "
            />
          </div>
        </div>
        <div>
          <Image
            src="/img/home-banner.png"
            alt="sign in"
            height={600}
            width={600}
            className=" object-contain w-full"
          />
        </div>
      </div>
      <div className="featurs flex justify-between my-24">
        {data.home_features.map((item) => (
          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="font-bold text-2xl font-inter">{item.heading}</h3>
            <h6 className="max-w-80 text-base font-gray my-2">
              {item.description}
            </h6>
            <div className="bg-white shadow-lg rounded-full flex-center h-12 w-12 mt-2">
              <i
                className={`bx ${item.icon} text-black text-lg font-bold blue-color`}
              ></i>
            </div>
          </div>
        ))}
      </div>
      <SecHeadNormal
        heading="Streamline your learning  with Procullum"
        subHeading="Procullum is a cutting-edge SaaS learning platform designed to revolutionize the way of online learnings. Our powerful platform empowers you to streamline your learnings and growth."
      />
      <div className="grid grid-cols-3 justify-between place-items-center mt-10">
        {["1", "2", "3"].map((item, i) => (
          <div key={i}>
            <CourseCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePg;
