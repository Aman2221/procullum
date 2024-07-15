"use client";
import { logoSvgPath } from "@/common/index";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import LinkButton from "@/common/LinkButton";
import { useRouter } from "next/navigation";
import NotAuthNav from "./NotAuthNav";
import AuthNav from "./AuthNav";

const NavBar = ({ showMenuAndButtons }: { showMenuAndButtons: boolean }) => {
  const router = useRouter();
  const [selectedMenu, setSectedMenu] = useState("");
  const [isAuth, setIsAuth] = useState(false);
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
    <div className="py-3 shadow fixed w-full left-0 ">
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
                buttonText="Sign in"
                onClick={() => router.push("/")}
                extrClss="blue-color"
              />
              <LinkButton
                buttonText="Sign up"
                onClick={() => router.push("/")}
                extrClss="text-white green-bg rounded-lg px-6"
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
