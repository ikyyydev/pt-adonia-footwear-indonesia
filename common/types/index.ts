import { JSX } from "react";
import { IconType } from "react-icons";

export interface Navlink {
  name: string;
  href: string;
}

export interface SocialFooterProps {
  name?: string;
  href: string;
  icon: JSX.Element;
}

export interface ServicesProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ValuesProps {
  icon: IconType;
  title: string;
  description: string;
}

export interface ServicesSectionProps {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
}

export interface CapabilitiesProps {
  metric: string;
  value: string;
}

export interface BenefitsProps {
  icon: IconType;
  title: string;
  description: string;
}

export interface JobOpeningsProps {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export interface WorkCultureProps {
  title: string;
  description: string;
}

export interface ContactInfoProps {
  icon: IconType;
  title: string;
  details: string[];
}

export interface DepartmentProps {
  name: string;
  email: string;
}
