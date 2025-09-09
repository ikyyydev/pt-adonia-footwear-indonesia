import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HeroSec = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero bg-[url('/img/Office.jpg')] bg-cover bg-center bg-no-repeat object-contain backdrop">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container-fluid relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          PT Adonia
          <br />
          <span className="text-primary-light">Footwear Indonesia</span>
        </h1>
        <p className="text-md md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Produsen sepatu terkemuka untuk brand Hoka dan Adidas di Indonesia
          dengan komitmen terhadap kualitas, inovasi, dan keberlanjutan
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4 justify-center z-10">
          <Button asChild size="lg" className="shadow-primary">
            <Link href="/tentang">
              Tentang Kami <FaArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white bg-transparent"
          >
            <Link href="/karir">Bergabung dengan Kami</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
