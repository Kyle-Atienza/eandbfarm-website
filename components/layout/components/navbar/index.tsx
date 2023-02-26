import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoBagHandleOutline } from "react-icons/io5";

import { NavLink } from "./components";
import { LeafLogoSVG } from "@/public/assets/brand";
import { Block } from "@/components";

type NavbarProps = {
  className: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <Block
      padding="px-12 py-8"
      border="none"
      className={`${className} bg-base`}
    >
      <div className="flex justify-between relative after:content-[''] after:absolute after:-bottom-8 after:left-[50%] after:-translate-x-1/2 after:h-[2px] after:w-full after:bg-primary">
        <Image alt="navbar-logo" src={LeafLogoSVG} />
        <ul className="flex gap-10">
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
      </div>
    </Block>
  );
};
