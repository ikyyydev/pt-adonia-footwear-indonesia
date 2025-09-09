"use client";

import { navlinks } from "@/common/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  return (
    <ul className="flex gap-5">
      {navlinks.map((link, index) => {
        return (
          <li
            key={index}
            className="hover:text-blue-500 transition-all ease-in duration-100"
          >
            <Link
              href={link.href}
              className={`relative px-3 py-2 transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-md text-primary font-medium"
                  : "text-slate-900 hover:text-primary"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-in-out ${
                  isActive(link.href) ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlink;
