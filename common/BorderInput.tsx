import React from "react";

const BorderInput = ({
  type = "text",
  placeholder = "Please enter text here",
  name = "name",
}: {
  type?: string;
  placeholder?: string;
  name?: string;
}) => {
  return (
    <div>
      <label className="capitalize text-base" htmlFor={name}>
        {name}
      </label>
      <div className="input-div rounded-lg border border-gray-400 p-3">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="outline-none text-sm"
        />
      </div>
    </div>
  );
};

export default BorderInput;
