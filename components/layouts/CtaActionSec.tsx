import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  buttonText?: string;
}

const CTAActinSec = ({ title, description, buttonText }: Props) => {
  return (
    <section className="py-10 md:py-14 text-primary-foreground">
      <div className="container-fluid bg-primary mx-auto px-4 py-10 rounded-2xl text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-md md:text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
          {description}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-primary hover:bg-primary-light hover:text-primary shadow-primary"
        >
          <Link href="/karir">
            {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTAActinSec;
