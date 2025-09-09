import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const VisiMisiCard = () => {
  return (
    <Card className="shadow-lg border-0 shadow-primary/20 h-fit">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl text-primary">
          Visi & Misi
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="bg-transparent outline outline-primary px-3 py-1 rounded-full mb-3 w-fit text-primary text-sm">
            Visi
          </h3>
          <p className="text-muted-foreground">
            Terus berinovasi, selalu bersemangat dan memprioritaskan pelayanan
            customer, menjadi produsen sepatu yang berkualitas dunia.
          </p>
        </div>
        <div>
          <h3 className="bg-transparent outline outline-primary px-3 py-1 rounded-full mb-3 w-fit text-primary text-sm">
            Misi
          </h3>
          <p className="text-muted-foreground">
            Melalui fokus dan semangat kita, kami memberikan solusi produksi
            sepatu yang fleksibel dan inovatif, demi menciptakan keuntungan yang
            maksimal dan berdaya saing tinggi.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisiMisiCard;
