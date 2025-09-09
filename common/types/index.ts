import { JSX } from "react";

export interface Navlink {
  name: string;
  href: string;
}

export interface SocialFooterProps {
  name?: string;
  href: string;
  icon: JSX.Element;
}
