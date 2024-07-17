import Link from "next/link";
import React from "react";

const LinkButton = ({
  text = "Button",
  extrClss = "",
  handleClick,
  href = "/",
}: {
  text?: string;
  handleClick?: () => void;
  extrClss?: string;
  href?: string;
}) => {
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`border-none outline-none px-4 py-3 flex-center ${extrClss}`}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
