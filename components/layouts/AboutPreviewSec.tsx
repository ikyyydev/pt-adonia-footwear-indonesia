import { services } from "@/common/constants";
import React from "react";
import VisiMisiCard from "../fragments/VisiMisiCard";

const AboutPreviewSec = () => {
  return (
    <section className="mb-10 py-10 md:py-16">
      <div className="container-fluid grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-xl md:text-4xl font-bold mb-6 text-primary">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-md md:text-lg text-muted-foreground mb-8 leading-relaxed">
            Dengan pengalaman lebih dari 15 tahun dalam industri manufaktur
            sepatu, kami telah menjadi mitra terpercaya untuk brand-brand
            internasional ternama. Komitmen kami terhadap kualitas dan inovasi
            menjadikan produk kami diakui di pasar global.
          </p>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                  <span className="h-6 w-6 text-primary">{service.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <VisiMisiCard />
      </div>
    </section>
  );
};

export default AboutPreviewSec;
