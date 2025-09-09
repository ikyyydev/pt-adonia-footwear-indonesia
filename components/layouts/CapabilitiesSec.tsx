import { capabilities } from "@/common/constants";
import React from "react";
import { Card, CardContent } from "../ui/card";

const CapabilitiesSec = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Kapabilitas Produksi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Data dan statistik yang menunjukkan kemampuan produksi dan kinerja
            operasional kami
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
            >
              <CardContent className="pt-8 pb-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {cap.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {cap.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSec;
