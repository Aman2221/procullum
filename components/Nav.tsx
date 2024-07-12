"use client";
import { logoSvgPath } from "@/common/index";
import Image from "next/image";
import React from "react";
import data from "@/json/index.json";
import Link from "next/link";
import LinkButton from "@/common/LinkButton";

const NavBar = () => {
  const handleClick = () => {};

  return (
    <div className="py-3">
      <div className="flex justify-between items-center font-inter">
        <Image src={logoSvgPath} alt="logo" height={100} width={200} />
        <ul className="flex items-center gap-10">
          {data.nav_opt_unAuth.map((item) => (
            <li className="flex items-center" key={item.name}>
              <Link href={item.route}>
                <span>{item.name}</span>
                {item.isSubMenu ? <></> : ""}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-10">
          <LinkButton buttonText="Sign in" onClick={handleClick} extrClss="blue-color"/>
          <LinkButton buttonText="Sign up" onClick={handleClick} extrClss="text-white green-bg rounded-lg px-6"/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
