"use client";
import { logoSvgPath } from "@/common/index";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import LinkButton from "@/common/LinkButton";
import NotAuthNav from "./NotAuthNav";
import AuthNav from "./AuthNav";

const NavBar = ({
  showMenuAndButtons,
  isAuth = false,
}: {
  showMenuAndButtons: boolean;
  isAuth?: boolean;
}) => {
  const [selectedMenu, setSectedMenu] = useState("");
  const sidebarRef = useRef<HTMLDivElement>(null);

  const onMenuClick = (name: string) => {
    setSectedMenu(name);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setSectedMenu("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="py-3 shadow fixed w-full left-0 bg-white z-10 top-0">
      <div className="flex justify-between items-center font-inter container mx-auto">
        <Image src={logoSvgPath} alt="logo" height={100} width={200} />
        {showMenuAndButtons ? (
          <>
            {isAuth ? (
              <AuthNav />
            ) : (
              <NotAuthNav
                sidebarRef={sidebarRef}
                selectedMenu={selectedMenu}
                onMenuClick={onMenuClick}
              />
            )}

            <div className="flex items-center gap-10">
              <LinkButton
                text="Sign in"
                href="/sign-in"
                extrClss="blue-color"
              />
              <LinkButton
                text="Sign up"
                href="/sign-up"
                extrClss="text-white green-bg rounded-lg px-6 py-3"
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default NavBar;
