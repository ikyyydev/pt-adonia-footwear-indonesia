import AboutPreviewSec from "@/components/layouts/AboutPreviewSec";
import CtactionSec from "@/components/layouts/CtaActionSec";
import HeroSec from "@/components/layouts/HeroSec";

export default function Home() {
  return (
    <>
      <HeroSec />
      <AboutPreviewSec />
      <CtactionSec
        title="Bergabunglah dengan Tim Profesional Kami"
        description="Kami selalu mencari talenta-talenta terbaik untuk bergabung dalam misi kami menciptakan produk berkualitas dunia"
        buttonText="Lihat Lowongan Kerja"
      />
    </>
  );
}
