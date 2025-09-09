import HeaderSec from "@/components/fragments/HeaderSec";
import CapabilitiesSec from "@/components/layouts/CapabilitiesSec";
import ServicesSec from "@/components/layouts/ServicesSec";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Layanan - PT Adonia Footwear Indonesia",
  description: "PT Adonia Footwear Indonesia Layanan Page",
  keywords: "pt adonia footwear indonesia,",
  category: "Layanan",
};

const LayananPage = () => {
  return (
    <>
      <HeaderSec
        title="Layanan"
        description="Dengan pengalaman lebih dari 2 tahun, kami menyediakan layanan manufaktur sepatu berkualitas tinggi dengan standar internasional untuk memenuhi kebutuhan pasar global."
      />

      <ServicesSec />
      <CapabilitiesSec />
    </>
  );
};

export default LayananPage;
