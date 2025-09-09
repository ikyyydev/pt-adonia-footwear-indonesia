import Link from "next/link";
import React from "react";
import Navlink from "./Navlink";
import MobileNav from "./MobileNav";

import { Button } from "../ui/button";
import Image from "next/image";

import Logo from "@/public/img/Logo.png";

const Header = () => {
  return (
    <header className="sticky z-50 bg-white top-0 min-h-[50px] py-4 border-b border-gray-300">
      <div className="container-fluid flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={Logo} alt="logo" className="w-12" />
        </Link>

        {/* Dekstop Nav */}
        <div className="hidden md:flex">
          <Navlink />
        </div>

        {/* Button */}
        <div className="hidden md:flex">
          <Button>Hubungi Kami</Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
