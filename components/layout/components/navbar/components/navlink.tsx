import React from "react";
import Link from "next/link";

type NavLinkProps = {
  active: boolean;
  label: string;
};

export const NavLink = ({ active, label }: NavLinkProps) => {
  return (
    <Link href={"/"} className="flex gap-2">
      {active ? (
        <div className="w-3 rounded-full aspect-square bg-secondary self-center"></div>
      ) : null}
      <span>{label}</span>
    </Link>
  );
};
