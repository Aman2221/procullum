import React from "react";

const LinkButton = ({
  buttonText,
  onClick,
  extrClss,
}: {
  buttonText: string;
  onClick: () => void;
  extrClss?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`border-none outline-none  px-4 py-3 ${extrClss}`}
    >
      {buttonText}
    </button>
  );
};

export default LinkButton;
