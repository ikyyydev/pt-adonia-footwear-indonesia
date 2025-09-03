import { BsTwitter } from "react-icons/bs";
import { Navlink, SocialFooterProps } from "../types";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const navlinks: Navlink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const socialsfooter: SocialFooterProps[] = [
  {
    name: "Github",
    href: "https://github.com/",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/",
    icon: <FaLinkedin />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    icon: <BsTwitter />,
  },
];
