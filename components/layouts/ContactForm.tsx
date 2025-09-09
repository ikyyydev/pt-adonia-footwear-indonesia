import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Form from "./Form";

const ContactForm = () => {
  return (
    <Card className="border-0 shadow-lg shadow-primary/20 h-fit">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Kirim Pesan</CardTitle>
        <p className="text-muted-foreground">
          Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 24
          jam kerja.
        </p>
      </CardHeader>
      <CardContent className="space-y-6 ">
        <Form />
      </CardContent>
    </Card>
  );
};

export default ContactForm;
