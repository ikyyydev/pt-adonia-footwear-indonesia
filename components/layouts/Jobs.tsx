import { jobOpenings } from "@/common/constants";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, Briefcase, Clock, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const Jobs = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Lowongan Kerja Terbuka
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan posisi yang sesuai dengan keahlian dan minat Anda di
            berbagai departemen
          </p>
        </div>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-0 shadow-primary/10 hover:shadow-primary/20"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">
                      {job.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant={"secondary"}>{job.department}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-primary hover:bg-primary-hover shadow-primary whitespace-nowrap text-primary cursor-pointer">
                    Lamar Sekarang
                    <ArrowRight className="w-4 h-4 ml-2 text-primary" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{job.description}</p>
                <div>
                  <h4 className="font-semibold text-accent mb-2">
                    Persyaratan:
                  </h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
