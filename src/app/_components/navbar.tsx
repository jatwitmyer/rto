"use client"

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";

interface INavbarProps {
  property: Array<string>;
}

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About Us",
    href: "/about",
  },
  {
    id: "tributes",
    label: "Tributes",
    href: "/tributes",
  },
  {
    id: "join",
    label: "Join",
    href: "/join",
  },
];

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const pathname = usePathname();
  const isActive = (path: Url) => pathname === path;

  return (
    <nav className="">
     <ul className="p-5 text-xl flex place-content-center items-center gap-4 ">
        <li>
          <Link
            href="/"
            className="font-bold text-3xl pr-10"
          >
            When Robots Take Over
          </Link>
        </li>
        {navItems.map((eachItem) => (
          <li key={eachItem.id}>
            <Link
              href={eachItem.href}
              className={`${
                isActive(eachItem.href) ? "" : ""
              }`}
            >
              {eachItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;