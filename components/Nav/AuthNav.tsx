import Link from "next/link";
import React from "react";
import data from "@/json/index.json";

const AuthNav = () => {
  return (
    <ul className="flex items-center gap-10">
      {data.nav_opt_auth.map((item) => (
        <li className="flex items-center" key={item.name}>
          <Link href={item.route}>
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AuthNav;
