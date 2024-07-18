import Image from "next/image";
import React from "react";

const CourseCard = () => {
  return (
    <div className="w-96 shadow-lg rounded-lg  font-poppins">
      <Image
        src="/img/cources.png"
        alt="sign in"
        height={250}
        width={0}
        sizes="100vw"
        className=" object-contain w-full"
      />

      <div className="p-4 relative">
        <div className="rattings bg-black flex-center w-14 gap-1 rounded absolute -top-4 right-4 py-1">
          <i className="bx bxs-star text-sm text-yellow-400"></i>
          <span className="text-white text-sm">8.9</span>
        </div>
        <h1 className="text-2xl font-semibold font-inter">Machine Learning</h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <h2 className="line-through italic font-gray">$200</h2>
            <h2>/</h2>
            <h2 className="green-color font-semibold">$20</h2>
          </div>
          <div className=" flex items-center gap-2">
            <Image
              src="/img/cources.png"
              alt="sign in"
              height={20}
              width={20}
              className="rounded-full border"
            />
            <span>Name</span>
          </div>
        </div>

        <span className="font-gray">
          Materi pembelajarn mengenai pembuatan website tingkat pemula
        </span>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <i className="bx bxs-star"></i>
            <span className="text-sm">4 months</span>
          </div>
          <div className="flex items-center">
            <i className="bx bxs-star"></i>
            <span className="text-sm">4 months</span>
          </div>
          <div className="flex items-center">
            <i className="bx bxs-star"></i>
            <span className="text-sm">4 months</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
