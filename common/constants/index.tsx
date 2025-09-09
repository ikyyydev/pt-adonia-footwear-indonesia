import {
  BsFillLightningFill,
  BsHeart,
  BsShield,
  BsTrophy,
} from "react-icons/bs";
import {
  BenefitsProps,
  CapabilitiesProps,
  ContactInfoProps,
  DepartmentProps,
  JobOpeningsProps,
  Navlink,
  ServicesProps,
  ServicesSectionProps,
  SocialFooterProps,
  ValuesProps,
  WorkCultureProps,
} from "../types";
import {
  FaAward,
  FaDollarSign,
  FaFacebookF,
  FaGlobe,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaShieldAlt,
  FaTrophy,
  FaTruck,
} from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { FiAward } from "react-icons/fi";
import { HiMiniCog } from "react-icons/hi2";
import { FaUserLarge, FaUserSlash } from "react-icons/fa6";
import { PiPackage } from "react-icons/pi";
import { Building2, Clock, Mail, Phone } from "lucide-react";

export const navlinks: Navlink[] = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Tentang",
    href: "/tentang",
  },
  {
    name: "Layanan",
    href: "/layanan",
  },
  {
    name: "Karir",
    href: "/karir",
  },
  {
    name: "Kontak",
    href: "/kontak",
  },
];

export const socialsfooter: SocialFooterProps[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ptadoniafootwear/?igshid=MzRlODBiNWFlZA%3D%3D",
    icon: <FaInstagram />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/pt-adonia-footwear-indonesia/",
    icon: <FaLinkedin />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/PT-Adonia-Footwear-Indonesia/61553261974715/?mibextid=9R9pXO",
    icon: <FaFacebookF />,
  },
];

export const services: ServicesProps[] = [
  {
    icon: <BsShield />,
    title: "Kualitas Terjamin",
    description:
      "Standar kualitas internasional dengan sertifikasi ISO 9001:2015",
  },
  {
    icon: <BsFillLightningFill />,
    title: "Produksi Cepat",
    description: "Kapasitas produksi tinggi dengan lead time yang kompetitif",
  },
  {
    icon: <FaTrophy />,
    title: "Inovasi Berkelanjutan",
    description: "R&D terus menerus untuk mengembangkan teknologi produksi",
  },
];

export const values: ValuesProps[] = [
  {
    icon: BsShield,
    title: "Kualitas",
    description:
      "Komitmen terhadap standar kualitas tertinggi dalam setiap produk yang kami hasilkan",
  },
  {
    icon: LuUsers,
    title: "Kerjasama Tim",
    description:
      "Membangun lingkungan kerja yang kolaboratif dan mendukung pertumbuhan bersama",
  },
  {
    icon: FaGlobe,
    title: "Keberlanjutan",
    description:
      "Berkomitmen pada praktik ramah lingkungan dan tanggung jawab sosial",
  },
  {
    icon: FiAward,
    title: "Integritas",
    description:
      "Menjalankan bisnis dengan transparansi, kejujuran, dan etika yang tinggi",
  },
  {
    icon: BsFillLightningFill,
    title: "Inovasi",
    description:
      "Terus mengembangkan teknologi dan metode produksi untuk efisiensi optimal",
  },
  {
    icon: FaHeart,
    title: "Kepedulian",
    description:
      "Mengutamakan kesejahteraan karyawan dan kontribusi positif bagi masyarakat",
  },
];

export const servicesSection: ServicesSectionProps[] = [
  {
    icon: PiPackage,
    title: "Manufaktur Sepatu Olahraga",
    description:
      "Produksi sepatu olahraga dengan standar kualitas internasional untuk brand Adidas dan partner lainnya.",
    features: [
      "Running Shoes",
      "Training Shoes",
      "Lifestyle Sneakers",
      "Performance Footwear",
    ],
  },
  {
    icon: HiMiniCog,
    title: "Custom Manufacturing",
    description:
      "Layanan manufaktur khusus sesuai dengan spesifikasi dan kebutuhan klien dengan fleksibilitas tinggi.",
    features: [
      "Design Consultation",
      "Prototype Development",
      "Small to Large Batch",
      "Quality Assurance",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Quality Control",
    description:
      "Sistem kontrol kualitas yang ketat di setiap tahap produksi dengan sertifikasi internasional.",
    features: [
      "ISO 9001:2015",
      "Material Testing",
      "Process Monitoring",
      "Final Inspection",
    ],
  },
  {
    icon: FaTruck,
    title: "Supply Chain Management",
    description:
      "Manajemen rantai pasok yang efisien dari bahan baku hingga pengiriman produk jadi.",
    features: [
      "Raw Material Sourcing",
      "Inventory Management",
      "Logistics Coordination",
      "On-time Delivery",
    ],
  },
  {
    icon: FaUserLarge,
    title: "Research & Development",
    description:
      "Tim R&D yang berdedikasi untuk mengembangkan inovasi dalam teknologi dan desain sepatu.",
    features: [
      "Material Innovation",
      "Process Optimization",
      "Sustainability Research",
      "Technology Integration",
    ],
  },
  {
    icon: FaAward,
    title: "Sustainability Program",
    description:
      "Program keberlanjutan yang mengintegrasikan praktik ramah lingkungan dalam seluruh operasi.",
    features: [
      "Eco-friendly Materials",
      "Waste Reduction",
      "Energy Efficiency",
      "Carbon Footprint Reduction",
    ],
  },
];

export const capabilities: CapabilitiesProps[] = [
  { metric: "Kapasitas Produksi Harian", value: "50,000+ pairs" },
  { metric: "Jenis Produk", value: "200+ variants" },
  { metric: "Lead Time Standard", value: "45-60 days" },
  { metric: "Quality Rate", value: "99.8%" },
  { metric: "Countries Served", value: "25+ countries" },
  { metric: "Production Lines", value: "15 lines" },
];

export const benefits: BenefitsProps[] = [
  {
    icon: FaDollarSign,
    title: "Gaji Kompetitif",
    description:
      "Paket kompensasi yang menarik sesuai dengan kualifikasi dan pengalaman",
  },
  {
    icon: BsHeart,
    title: "Asuransi Kesehatan",
    description: "Asuransi kesehatan menyeluruh untuk karyawan dan keluarga",
  },
  {
    icon: BsTrophy,
    title: "Pengembangan Karir",
    description: "Program pelatihan dan pengembangan profesional berkelanjutan",
  },
  {
    icon: FaUserSlash,
    title: "Lingkungan Kerja Positif",
    description: "Budaya kerja yang mendukung kolaborasi dan inovasi",
  },
];

export const jobOpenings: JobOpeningsProps[] = [
  {
    title: "Outsole",
    department: "Production",
    location: "Tegal, Jawa Tengah",
    type: "Full Time",
    experience: "0-2 tahun",
    description:
      "Melakukan produksi sepatu olahraga dengan standar kualitas internasional.",
    requirements: [
      "SMP atau sederajat",
      "Pengalaman produksi sepatu",
      "Memahami standar ISO 9001",
      "Teliti dan detail oriented",
    ],
  },
  {
    title: "Quality Control",
    department: "Quality Assurance",
    location: "Tegal, Jawa Tengah",
    type: "Full Time",
    experience: "1-4 tahun",
    description:
      "Melakukan inspeksi kualitas produk dan memastikan compliance terhadap standar internasional.",
    requirements: [
      "D3/S1 Teknik atau bidang terkait",
      "Pengalaman QC di industri footwear/garment",
      "Memahami standar ISO 9001",
      "Teliti dan detail oriented",
    ],
  },
  {
    title: "Operator Produksi",
    department: "Production",
    location: "Tegal, Jawa Tengah",
    type: "Full Time",
    experience: "0-2 tahun",
    description:
      "Melakukan produksi sepatu dengan standar kualitas internasional.",
    requirements: [
      "SMP atau sederajat",
      "Pengalaman produksi sepatu",
      "Memahami standar ISO 9001",
      "Teliti dan detail oriented",
    ],
  },
  {
    title: "Human Resources Specialist",
    department: "Human Resources",
    location: "Tegal, Jawa Tengah",
    type: "Full Time",
    experience: "2-4 tahun",
    description:
      "Mengelola berbagai aspek HR termasuk recruitment, training, dan employee relations.",
    requirements: [
      "S1 Psikologi/Manajemen SDM",
      "Pengalaman HR di perusahaan manufaktur",
      "Kemampuan komunikasi yang excellent",
      "Familiar dengan labor law Indonesia",
    ],
  },
];

export const workCulture: WorkCultureProps[] = [
  {
    title: "Inovasi Berkelanjutan",
    description:
      "Kami mendorong setiap karyawan untuk berpikir kreatif dan berkontribusi dalam pengembangan produk dan proses.",
  },
  {
    title: "Work-Life Balance",
    description:
      "Menghargai keseimbangan antara kehidupan profesional dan personal setiap karyawan.",
  },
  {
    title: "Diversitas & Inklusi",
    description:
      "Lingkungan kerja yang menghargai perbedaan dan memberikan kesempatan yang sama bagi semua.",
  },
  {
    title: "Pembelajaran Berkelanjutan",
    description:
      "Program pelatihan regular untuk meningkatkan kompetensi dan mengembangkan karir.",
  },
];

export const contactInfo: ContactInfoProps[] = [
  {
    icon: Building2,
    title: "Kantor Pusat",
    details: [
      "PT Adonia Footwear Indonesia",
      "Jl. Industri Raya No. 123",
      "Tegal, Jawa Tengah 52191",
      "Indonesia",
    ],
  },
  {
    icon: Phone,
    title: "Telepon",
    details: [
      "+62 283 123 4567 (Kantor Pusat)",
      "+62 283 123 4568 (Produksi)",
      "+62 283 123 4569 (Marketing)",
      "+62 812 3456 7890 (WhatsApp)",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "info@adoniafootwear.co.id",
      "sales@adoniafootwear.co.id",
      "hr@adoniafootwear.co.id",
      "support@adoniafootwear.co.id",
    ],
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    details: [
      "Senin - Jumat: 08:00 - 17:00",
      "Sabtu: 08:00 - 12:00",
      "Minggu: Tutup",
      "Hari Libur Nasional: Tutup",
    ],
  },
];

export const departments: DepartmentProps[] = [
  { name: "General Inquiry", email: "info@adoniafootwear.co.id" },
  { name: "Sales & Marketing", email: "sales@adoniafootwear.co.id" },
  { name: "Human Resources", email: "hr@adoniafootwear.co.id" },
  { name: "Customer Support", email: "support@adoniafootwear.co.id" },
  { name: "Quality Assurance", email: "qa@adoniafootwear.co.id" },
  { name: "Production", email: "production@adoniafootwear.co.id" },
];
