import { Object } from "@/interfaces";
import Link from "next/link";
import React from "react";

const SubMenu = ({
  item,
  selectedMenu,
}: {
  item: {
    name: string;
    sub_options: Object[];
  };
  selectedMenu: string;
}) => {
  return (
    <div
      id="dropdown"
      className={`${
        item.name == selectedMenu ? "flex" : "hidden"
      } animate__animated animate__fadeIn mt-1 z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ease-in transition-transform`}
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        {item.sub_options.map((item) => (
          <li key={item.name as string}>
            <Link href="/" className="block px-4 py-2 text-black capitalize">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
