import HeaderSec from "@/components/fragments/HeaderSec";
import CompanyStory from "@/components/layouts/CompanyStory";
import ValuesSec from "@/components/layouts/ValuesSec";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tentang Kami - PT Adonia Footwear Indonesia",
  description: "PT Adonia Footwear Indonesia Tentang Page",
  keywords:
    "pt adonia footwear indonesia, tentang kami, sejarah pt adonia footwear indonesia",
  category: "Sejarah",
};

const TentangKamiPage = () => {
  return (
    <>
      <HeaderSec
        title="Tentang Kami"
        description="PT Adonia Footwear Indonesia adalah perusahaan manufaktur sepatu yang
          telah dipercaya sebagai mitra strategis brand-brand internasional
          terkemuka selama lebih dari 2 tahun."
      />
      <CompanyStory />
      <ValuesSec />
    </>
  );
};

export default TentangKamiPage;
