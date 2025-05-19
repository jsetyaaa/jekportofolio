import { desc } from "framer-motion/client";
import images from "../assets/images";

const projectData = [
  {
    title: "Landing Page PlastEco Solutions",
    description:
      "PlastEco Solutions menyadari bahwa tanpa tindakan yang tepat, limbah plastik akan terus mengancam keberlanjutan lingkungan dan kesehatan manusia. Oleh karena itu, kami menawarkan solusi lengkap untuk pengelolaan limbah plastik dengan pendekatan yang holistik dan berkelanjutan. Dengan layanan pengumpulan, pemrosesan, dan daur ulang yang efisien, kami membantu mengurangi jumlah limbah plastik yang berakhir di lautan dan lingkungan sekitarnya.",
    fitur: "Pencarian, Pengolahan, dan Ekstraksi Data",
    teams: [
      {
        name: "Yudi",
        role: "Frontend",
      },
      {
        name: "Bagas",
        role: "Backend",
      },
    ],
    tech: "ReactJS, NodeJS, ExpressJS, TailwindCSS",
    thumbnail: images["Plasteco.webp"],
    url: "https://plasteco-solutions.vercel.app/",
    slug: "plasteco-solutions",
  },
  {
    title: "Srabeling Apps",
    description: "Srabeling Apps merupakan aplikasi web yang dibuat menggunakan Flask, yang secara khusus dirancang untuk membantu peneliti dalam mengekstrak data dari Google Play Store. Srabeling Apps memberikan kemudahan dan efisiensi bagi peneliti yang perlu mengakses data aplikasi untuk analisis lebih lanjut, sehingga menjadikannya alat yang sangat berharga untuk penelitian aplikasi seluler.",
    fitur: [
      {
        name: "Scraping Data",
        description: "Aplikasi Dapat Melakukan Scraping Data Dari Google Play Store",
      },
      {
        name: "Filter Data",
        description: "Aplikasi Dapat Melakukan Filter Data Dari Google Play Store Berdasarkan Stars",
      },
      {
        name: "Labeling Data",
        description: "Aplikasi Dapat Melakukan Labeling Data menggunakan Model Support Vector Machine",
      },
      {
        name: "Visualisasi Data",
        description: "Aplikasi Dapat Melakukan Visualisasi Data yang telah di Scraping",
      },
      {
        name: "Download Data",
        description: "Aplikasi Dapat Melakukan Download Data yang telah di Scraping",
      },
    ],
    teams: [
      {
        name: "Solo Projects",
        role: "Fullstack",
      }
    ],
    tech: [
      "Python",
      "Flask",
      "HTML",
      "TailwindCSS",
    ],
    thumbnail: images["Srabeling.webp"],
    url: null,
    slug: "srabeling",
  },
  {
    title: "Blog TechnoAI",
    description:
      "Techno AI adalah web blog informatif seputar teknologi dan kecerdasan buatan, dibangun menggunakan PHP Laravel. Menyajikan artikel, berita, dan tutorial terkini, Techno AI hadir sebagai sumber terpercaya bagi para pengembang, pelajar, dan pecinta teknologi yang ingin mengikuti perkembangan dunia AI secara mendalam dan berkelanjutan.",
    fitur: [
      {
        name: "Blog",
        description: "Menampilkan artikel, berita, dan tutorial terkini tentang teknologi dan kecerdasan buatan.",
      },
      {
        name: "Dashboard CMS",
        description: "Melakukan pengelolaan artikel, kategori artikel, berita, dan tutorial.",
      },
      {
        name: "SEO",
        description: "Memudahkan pencarian halaman web melalui mesin pencari.",
      },
    ],
    teams: [
      {
        name: "Solo Projects",
        role: "Fullstack",
      }
    ],
    tech: [
      "PHP 8.7.3",
      "Laravel 11.0.2",
      "Sweetalert 2.1.2",
      "HTML",
      "TailwindCSS",
    ],
    thumbnail: images["Technoai.webp"],
    url: null,
    slug: "technoai",
  },
  {
    title: "Landing Page Arjabina",
    description: "Arjabina adalah penyedia jasa desain arsitek, interior, dan kontraktor Jogja yang profesional dan terpercaya. Dengan pengalaman dan keahlian yang kuat dalam industri desain, kami menyediakan solusi desain yang sesuai dengan kebutuhan dan keinginan anda.",
    fitur: [
      {
        name: "Landing Page",
        description: "Landing Page yang menampilkan informasi tentang Arjabina dan layanan yang disediakan.",
      },
      {
        name: "Call To Action",
        description: "Call To Action yang memudahkan pengunjung untuk menghubungi Arjabina.",
      },
      {
        name: "SEO",
        description: "Memudahkan pencarian halaman web melalui mesin pencari.",
      }
    ],
    teams: [
      {
        name: "Solo Projects",
        role: "UI Designer and Front End",
      }
    ],
    tech: [
      "ReactJS",
      "TailwindCSS",
    ],
    thumbnail: images["Arjabina.webp"],
    url: null,
    slug: "arjabina",
  },
  {
    title: "Medaritown",
    description: "Medaritown adalah sebuah perusahaan perumahan yang berdedikasi untuk menghadirkan lingkungan hunian yang nyaman dan modern bagi masyarakat. Dengan fokus pada desain inovatif, keberlanjutan, dan kualitas bangunan, Medaritown telah membangun reputasi sebagai pengembang properti yang terkemuka. Perusahaan ini menawarkan berbagai tipe rumah mulai dari apartemen hingga rumah mewah, memberikan pilihan hunian yang sesuai dengan berbagai kebutuhan dan gaya hidup.",
    fitur: [
      {
        name: "Landing Page",
        description: "Landing Page yang menampilkan informasi tentang Medaritown dan layanan yang disediakan.",
      },
      {
        name: "Call To Action",
        description: "Call To Action yang memudahkan pengunjung untuk menghubungi Medaritown.",
      },
      {
        name: "SEO",
        description: "Memudahkan pencarian halaman web melalui mesin pencari.",
      },
      {
        name: "Admin Panel",
        description: "Admin Panel yang memudahkan pengelolaan konten dan informasi Medaritown.",
      },
      {
        name: "Maps",
        description: "Maps yang menampilkan lokasi Medaritown.",
      }
    ],
    teams: [
      {
        name: "M. Adnan Zainul M. dan M. Reza Setiawan",
        role: "Project Leader",
      },
      {
        name: "Eker F. Arung, M. Zhafir Zaydan, dan Fakhriyannur Adha",
        role: "UI/UX Designer",
      },
      {
        name: "M. Ikhwan Pramudika",
        role: "Front End",
      },
      {
        name: "Joko Setyanto",
        role: "Front End & Back End",
      },
      {
        name: "Haikal Raditya F.",
        role: "Back End",
      },
    ],
    tech: [
      "HTML",
      "TailwindCSS",
      "PHP Native",
    ],
    thumbnail: images["Medaritown.webp"],
    url: null,
    slug: "medaritown",
  }
];

export default projectData;
