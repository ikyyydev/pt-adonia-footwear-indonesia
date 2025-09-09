import { contactInfo } from "@/common/constants";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-6">
          Informasi Kontak
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Tim customer service kami siap membantu Anda dengan respons yang cepat
          dan profesional. Hubungi kami melalui berbagai channel komunikasi yang
          tersedia.
        </p>
      </div>

      <div className="grid gap-6">
        {contactInfo.map((info, index) => {
          return (
            <Card
              key={index}
              className="border-0 shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-primary">
                    {info.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
