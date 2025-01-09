"use client";
import Link from "next/link";
import NavLinks from "./nav-links";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { VscSignOut } from "react-icons/vsc";
import { BiBarChartAlt } from "react-icons/bi";

export default function sideNav() {
  const router = useRouter();
  const handleSignOut = () => {
    window.sessionStorage.clear();
    router.push("/login");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userSession = window.sessionStorage.getItem("user_session");

      if (!userSession) {
        router.push("/login");
      }
    }
  }, [router]);
  return (
    <div className="flex h-full flex-col border-r-2 border-r-brown rounded-r-xl bg-primary gap-2 overflow-hidden top-0">
      <Link
        className="mb-1 flex h-20 items-end justify-start bg-brown p-2 md:h-40"
        href="/dashboard"
      >
        <div className="w-32 flex flex-row items-center text-white md:w-40">
          <BiBarChartAlt className="h-1/4 w-1/4" />
          <h1 className="text-2xl font-bold pl-2">Example</h1>
        </div>
      </Link>
      <div className="flex grow flex-row justify-center md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow bg-primary md:block"></div>
        <button
          onClick={handleSignOut}
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-b-lg bg-brown p-3 text-sm text-white font-medium hover:bg-font hover:text-brown md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <VscSignOut className="h-6 w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </div>
    </div>
  );
}
