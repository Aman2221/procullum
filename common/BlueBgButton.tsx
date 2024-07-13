import React from "react";

const BlueBgButton = ({
  text = "Button",
  handleClick,
}: {
  text?: string;
  handleClick?: () => void;
}) => {
  return (
    <div>
      <button
        className=" blue-btn rounded-lg text-white text-xs"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default BlueBgButton;
