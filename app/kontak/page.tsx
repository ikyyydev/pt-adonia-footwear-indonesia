import HeaderSec from "@/components/fragments/HeaderSec";
import ContactForm from "@/components/layouts/ContactForm";
import ContactInfo from "@/components/layouts/ContactInfo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kontak - PT Adonia Footwear Indonesia",
  description: "PT Adonia Footwear Indonesia Kontak Page",
  keywords: "kontak, pt adonia footwear indonesia, informasi kontak",
  category: "Kontak",
};

const KontakPage = () => {
  return (
    <>
      <HeaderSec
        title="Informasi Kontak"
        description="Kami siap membantu Anda dengan segala kebutuhan informasi tentang produk dan layanan kami. Jangan ragu untuk menghubungi tim profesional kami yang siap melayani dengan sepenuh hati."
      />

      <div className="py-10 md:py-14">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Information */}
            <ContactInfo />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default KontakPage;
