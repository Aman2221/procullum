import React from "react";

const AuthFooter = ({ isAbsolute = false }: { isAbsolute?: boolean }) => {
  return (
    <div
      className={`${
        isAbsolute ? "absolute" : "relative"
      }  bottom-0 w-full h-20 flex-center left-0 right-0 footer-bg shadow-md`}
    >
      <span className="text-base footer-gray">
        All rights reserved by Procullum
      </span>
    </div>
  );
};

export default AuthFooter;
