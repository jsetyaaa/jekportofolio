import { desc } from "framer-motion/client";
import images from "../assets/images";

const projectData = [
  {
    title: "Landing Page PlastEco Solutions",
    description:
      "PlastEco Solutions menyadari bahwa tanpa tindakan yang tepat, limbah plastik akan terus mengancam keberlanjutan lingkungan dan kesehatan manusia. Oleh karena itu, kami menawarkan solusi lengkap untuk pengelolaan limbah plastik dengan pendekatan yang holistik dan berkelanjutan. Dengan layanan pengumpulan, pemrosesan, dan daur ulang yang efisien, kami membantu mengurangi jumlah limbah plastik yang berakhir di lautan dan lingkungan sekitarnya.",
    thumbnail: images["Plasteco.png"],
    url: "https://plasteco-solutions.vercel.app/",
    slug: "plasteco-solutions",
  },
  {
    title: "Blog TechnoAI",
    description:
      "Techno AI adalah web blog informatif seputar teknologi dan kecerdasan buatan, dibangun menggunakan PHP Laravel. Menyajikan artikel, berita, dan tutorial terkini, Techno AI hadir sebagai sumber terpercaya bagi para pengembang, pelajar, dan pecinta teknologi yang ingin mengikuti perkembangan dunia AI secara mendalam dan berkelanjutan.",
    thumbnail: images["Technoai.png"],
    url: null,
    slug: "technoai",
  },
  {
    title: "Landing Page Arjabina",
    description: "Arjabina adalah penyedia jasa desain arsitek, interior, dan kontraktor Jogja yang profesional dan terpercaya. Dengan pengalaman dan keahlian yang kuat dalam industri desain, kami menyediakan solusi desain yang sesuai dengan kebutuhan dan keinginan anda.",
    thumbnail: images["Arjabina.png"],
    url: null,
    slug: "arjabina",
  }
];

export default projectData;
