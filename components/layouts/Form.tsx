import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { departments } from "@/common/constants";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { Textarea } from "../ui/textarea";

const Form = () => {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nama Depan *</Label>
          <Input id="firstName" placeholder="Masukkan nama depan" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Nama Belakang *</Label>
          <Input id="lastName" placeholder="Masukkan nama belakang" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" type="email" placeholder="nama@email.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Nomor Telepon</Label>
        <Input id="phone" type="tel" placeholder="+62 812 3456 7890" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Perusahaan</Label>
        <Input id="company" placeholder="Nama perusahaan Anda" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="department">Departemen Tujuan</Label>
        <select className="w-full p-3 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="">Pilih departemen</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept.email}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subjek *</Label>
        <Input id="subject" placeholder="Subjek pesan Anda" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Pesan *</Label>
        <Textarea
          id="message"
          placeholder="Tulis pesan Anda di sini..."
          rows={6}
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-primary cursor-pointer hover:bg-primary-hover shadow-primary"
        size="lg"
      >
        Kirim Pesan
        <Send className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
};

export default Form;
