import React from "react";
import VisiMisiCard from "../fragments/VisiMisiCard";

const CompanyStory = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container-fluid grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Sejarah Perusahaan
          </h2>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              PT. Adonia Footwear Indonesia adalah perusahaan yang berdiri pada
              tahun 2023 dan bergerak dibidang industri sepatu yang berlokasi di
              Desa Lebaksiu Kidul, Kec. Lebaksiu, Kab. Tegal, Jawa Tengah,
              Indonesia,52461.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              PT. Adonia Footwear Indonesia merupakan salah satu anak perusahaan
              dari HuaLi Industrial Group. Dengan kantor pusat manajemen dan
              pusat pengembangan & desain di Zhongshan, Guangdong, kami telah
              menetapkan pabrik manufaktur di Vietnam, Dominika, Myanmar,
              Indonesia, dan wilayah lainnya. Kami memiliki pusat perdagangan di
              Hong Kong dan Zhongshan. HuaLi Industrial Group telah menjadi
              produsen utama dan mitra strategis sejumlah merek alas kaki
              olahraga ternama di dunia.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Untuk selanjutnya, kami akan terus menjunjung tinggi konsep
              &quot;berorientasi pada sumberdaya manusia, membuat alas kaki yang
              bahagia, manajemen teknologi, menciptakan keuntungan, dan operasi
              yang berkelanjutan&quot;. Sambil memperkuat teknologi pembuatan
              alas kaki, meningkatkan proses manufaktur, dan memberikan layanan
              yang unggul, kami juga akan memikul tanggung jawab untuk
              melindungi kepentingan karyawan dan secara efektif menggunakan
              sumber daya alam kita untuk meningkatkan keseimbangan dan
              keharmonisan antara perusahaan dan karyawan , dan antara
              perusahaan dan lingkungan, untuk menciptakan model pembuatan alas
              kaki yang paling dapat dipercaya, dan menjadi pemimpin industri
              pembuatan alas kaki global.
            </p>
          </div>
        </div>

        <VisiMisiCard />
      </div>
    </section>
  );
};

export default CompanyStory;
