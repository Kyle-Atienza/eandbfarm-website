import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { IoBagHandleOutline, IoMenuOutline } from "react-icons/io5";

import { NavLink } from "./components";
import { LeafLogoSVG } from "@/public/assets/brand";
import { Block, Button } from "@/components";

type NavbarProps = {
  className?: string;
};

export const Navbar = ({}: NavbarProps) => {
  const [drawer, setDrawer] = useState<{ isOpen: boolean }>({
    isOpen: false,
  });

  return (
    <>
      <Block
        padding
        className={`flex justify-between items-center sticky top-0  py-8 bg-base z-50`}
      >
        <Button
          size="small"
          clean
          className={`text-4xl  z-[2] md:hidden relative ${
            drawer.isOpen ? "text-secondary" : ""
          }`}
          onClick={() =>
            setDrawer((prevState) => ({ ...prevState, isOpen: !drawer.isOpen }))
          }
        >
          <IoMenuOutline />
        </Button>
        <Image
          alt="navbar-logo"
          className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:relative md:translate-x-0 md:translate-y-0 md:top-auto md:left-auto"
          src={LeafLogoSVG}
        />
        <ul className="hidden gap-10 md:flex md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 md:left-1/2 md:absolute">
          <li>
            <NavLink active={true} label={"Home"} />
          </li>
          <li>
            <NavLink active={false} label={"Blog"} />
          </li>
          <li>
            <NavLink active={false} label={"Products"} />
          </li>
          <li>
            <NavLink active={false} label={"Services"} />
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="bg-primary rounded-[1000px] uppercase text-base text-xs font-bold self-center px-4 py-2 tracking-widest">
            Open
          </div>
          <Link href={"/"}>
            <IoBagHandleOutline className="text-xl" />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 h-[2px] w-full px-6 lg:px-8 xl:px-12">
          <div className="w-full h-full bg-primary"></div>
        </div>
        {/* <div className="absolute top-0 left-0 z-[1] w-screen h-screen bg-primary"></div> */}
      </Block>
    </>
  );
};
