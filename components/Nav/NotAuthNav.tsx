import Link from "next/link";
import React from "react";
import data from "@/json/index.json";
import SubMenu from "./SubMenu";

const NotAuthNav = ({
  sidebarRef,
  selectedMenu,
  onMenuClick,
}: {
  sidebarRef: React.RefObject<HTMLDivElement>;
  selectedMenu: string;
  onMenuClick: (a: string) => void;
}) => {
  return (
    <ul className="flex items-center gap-10">
      {data.nav_opt_unAuth.map((item) => (
        <li className="flex items-center" key={item.name}>
          {item.isSubMenu ? (
            <div>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="flex items-center"
                type="button"
                onClick={() => onMenuClick(item.name)}
              >
                {item.name}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div ref={sidebarRef}>
                <SubMenu item={item} selectedMenu={selectedMenu} />
              </div>
            </div>
          ) : (
            <Link href={item.route}>
              <span>{item.name}</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NotAuthNav;
