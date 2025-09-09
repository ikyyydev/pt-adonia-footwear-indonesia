import HeaderSec from "@/components/fragments/HeaderSec";
import BenefitSec from "@/components/layouts/BenefitSec";
import CTAActinSec from "@/components/layouts/CtaActionSec";
import Jobs from "@/components/layouts/Jobs";
import WorkCultureSec from "@/components/layouts/WorkCultureSec";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Karir - PT Adonia Footwear Indonesia",
  description: "PT Adonia Footwear Indonesia Karir Page",
  keywords: "lowongan adonia, lowongan pt adonia, karir pt adonia,",
  category: "Lowongan",
};

const KarirPage = () => {
  return (
    <>
      <HeaderSec
        title="Karir"
        description="Bergabunglah dengan tim profesional PT Adonia Footwear Indonesia dan kembangkan karir Anda di industri manufaktur terdepan dengan lingkungan kerja yang mendukung pertumbuhan personal dan profesional."
      />

      <BenefitSec />
      <WorkCultureSec />
      <Jobs />
      <CTAActinSec
        title="Tidak Menemukan Posisi yang Cocok?"
        description="Kami selalu terbuka untuk talenta-talenta terbaik. Kirimkan CV Anda dan kami akan menghubungi ketika ada posisi yang sesuai dengan keahlian Anda."
        buttonText="Kirim CV"
      />
    </>
  );
};

export default KarirPage;
