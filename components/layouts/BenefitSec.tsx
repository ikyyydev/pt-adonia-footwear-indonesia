import { benefits } from "@/common/constants";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const BenefitSec = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Mengapa Bergabung dengan Kami?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menawarkan lingkungan kerja yang dinamis dengan berbagai
            benefit dan kesempatan pengembangan karir
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-primary/10 hover:shadow-primary/20"
              >
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-primary">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitSec;
