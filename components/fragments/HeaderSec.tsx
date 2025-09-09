import { title } from "process";
import React from "react";

const HeaderSec = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="w-full flex items-center justify-center py-10 md:py-16 bg-primary">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeaderSec;
