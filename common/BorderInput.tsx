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
      <label className="capitalize text-sm" htmlFor={name}>
        {name}
      </label>
      <div className="input-div rounded-lg border border-gray-400 p-3 mt-3">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="outline-none text-sm"
        />
        <button></button>
      </div>
    </div>
  );
};

export default BorderInput;
