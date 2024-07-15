import React from "react";

const BlueBgButton = ({
  text = "Button",
  extrClss = "",
  handleClick,
}: {
  text?: string;
  handleClick?: () => void;
  extrClss?: string;
}) => {
  return (
    <div>
      <button
        className={`blue-btn rounded-lg text-white text-sm p-3 ${extrClss}`}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default BlueBgButton;
