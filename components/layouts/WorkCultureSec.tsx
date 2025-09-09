import { workCulture } from "@/common/constants";
import React from "react";

const WorkCultureSec = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Budaya Kerja</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nilai-nilai yang menjadi fondasi dalam membangun lingkungan kerja
            yang positif dan produktif
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {workCulture.map((culture, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-primary w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  {culture.title}
                </h3>
                <p className="text-muted-foreground">{culture.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkCultureSec;
