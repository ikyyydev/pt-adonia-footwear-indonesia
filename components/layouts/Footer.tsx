import { navlinks, socialsfooter } from "@/common/constants";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Image from "next/image";

import Logo from "@/public/img/Logo.png";
import { MdAttachEmail, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-10 pb-5 md:pt-16 md:pb-3 bg-primary text-white w-full">
      <div className="container-fluid flex flex-col gap-6 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {/* Logo */}
          <Link href={"/"} className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image
                src={Logo}
                alt="logo"
                className="w-12 object-contain object-center"
              />
              <h3 className="text-xl font-bold">
                PT Adonia <br />{" "}
                <span className="text-sm font-medium">Footwear Indonesia</span>
              </h3>
            </div>
            <p className="text-sm font-normal text-slate-200 mt-3">
              PT. Adonia Footwear Indonesia merupakan salah satu anak perusahaan
              dari HuaLi Industrial Group.
            </p>
          </Link>

          {/* Nav */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Tautan Cepat</h3>
            <ul className="flex flex-col gap-2.5 mt-3">
              {navlinks.map((item, index) => {
                return (
                  <div className="flex gap-1 items-center" key={index}>
                    <MdOutlineKeyboardArrowRight />
                    <li className="hover:underline transition-all text-sm">
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Kontak</h3>
            <div className="flex flex-col gap-2.5 mt-3">
              <div className="flex gap-2 items-center">
                <span>
                  <TiLocation />
                </span>
                <p className="text-sm">
                  Jl. Raya Barat No. 16 Lebaksiu Kidul, Kec. Lebaksiu, Kab.
                  Tegal, Jawa Tengah, INDONESIA
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <MdAttachEmail />
                </span>
                <p className="text-sm">recruitment.afi@huali-group.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <FaPhoneAlt />
                </span>
                <p className="text-sm">08123456789</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Ikuti Kami</h3>
            <div className="flex gap-4 items-center mt-3">
              {socialsfooter.map((item, index) => {
                return (
                  <Tooltip key={index}>
                    <TooltipTrigger
                      asChild
                      className="cursor-pointer p-1.5 md:p-2 bg-white rounded-full text-black hover:opacity-80"
                    >
                      <Link href={item.href} target="_blank">
                        {item.icon}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className="bg-secondary text-black">
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="w-full py-2 border-t-[1px] border-gray-300">
          <p className="text-center text-sm md:text-[16px] font-medium mt-2">
            &copy; 2023 PT Adonia Footwear Indonesia |{" "}
            <span>Hak cipta dilindungi undang-undang.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
