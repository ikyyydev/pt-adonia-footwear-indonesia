import { values } from "@/common/constants";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ValuesSec = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nilai-Nilai Perusahaan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nilai-nilai yang menjadi landasan dalam setiap aspek operasional dan
            pengembangan perusahaan kami
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-0 shadow-primary/10 hover:shadow-primary/20"
              >
                <CardHeader className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {value.description}
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

export default ValuesSec;
