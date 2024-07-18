import LinkButton from "@/common/LinkButton";
import React from "react";

const SecHeadNormal = ({
  heading = "",
  subHeading = "",
}: {
  heading: string;
  subHeading?: string;
}) => {
  return (
    <div className="flex-center flex-col font-poppins">
      <h1 className="text-3xl font-bold font-inter">{heading}</h1>
      <span className="max-w-700 text-lg text-center mt-6">{subHeading}</span>
      <LinkButton
        text="View all Courses"
        extrClss="blue-color border mt-6 rounded-lg text-sm py-3 px-6 border border-gray-200 font-medium "
      />
    </div>
  );
};

export default SecHeadNormal;
