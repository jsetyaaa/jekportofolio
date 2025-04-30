import React from "react";
import images from "../../assets/images";

const AboutSection = () => {
  return (
    <div
      className="bg-primary mx-auto p-6 md:mx-12 md:rounded-xl md:mt-8
    md:flex md:flex-row md:gap-4 lg:h-screen"
    >
      <div className="md:w-1/2 flex sm:items-start md:justify-center lg:items-center">
        <img
          src={images["MyFoto2.png"]}
          alt="Foto Joko Setyanto"
          className="lg:w-3/4"
        />
      </div>
      <div className="mt-6 md:mt-0 md:w-1/2">
        {/* Perkenalan Singkat */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-second">Tentang Saya</h2>
          <p className="mt-4 text-second">
            Saya adalah seorang Web Developer dan Data Analyst dengan semangat
            tinggi dalam membangun solusi digital yang efisien dan berbasis
            data.
          </p>
        </section>

        {/* Keahlian Utama */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-second">
            Keahlian Utama
          </h3>
          <ul className="mt-4 list-disc pl-5 text-second">
            <li>
              <strong>Frontend:</strong> React.js, Tailwind CSS, HTML5,
              JavaScript
            </li>
            <li>
              <strong>Backend:</strong> PHP Native, Laravel (opsional)
            </li>
            <li>
              <strong>Data Analysis:</strong> Python, Pandas, Scikit-learn, SVM,
              Data Visualization (Matplotlib, Seaborn)
            </li>
            <li>
              <strong>Tools:</strong> Git, Figma, VSCode, Excel, Tableau, Jupyter Notebook
            </li>
          </ul>
        </section>

        {/* Pengalaman / Proyek */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-second">Pengalaman / Proyek</h3>
          <p className="mt-4 text-second">
            Saya mengembangkan <strong>Srabeling Apps</strong>, aplikasi
            berbasis Flask yang dapat melakukan scraping data ulasan aplikasi
            dari Google Play Store, lalu melakukan klasifikasi sentimen secara
            otomatis menggunakan model SVM.
          </p>
        </section>

        {/* Motivasi dan Gaya Kerja */}
        <section className="mb-8 text-second">
          <h3 className="text-xl font-semibold text-second">Motivasi dan Gaya Kerja</h3>
          <p className="mt-4">
            Saya menyukai tantangan teknis dan terbiasa bekerja secara detail
            dan terstruktur. Saya percaya bahwa kombinasi antara desain
            antarmuka yang baik dan analisis data yang kuat dapat menghasilkan
            keputusan yang lebih tepat dan produk yang lebih unggul.
          </p>
        </section>

        {/* Tujuan Karir / Personal Goal */}
        <section className="mb-8 text-second">
          <h3 className="text-xl font-semibold text-second">Tujuan Karir</h3>
          <p className="mt-4">
            Saat ini saya fokus untuk memperdalam keahlian di bidang analisis
            data dan pengembangan aplikasi web dinamis, dengan harapan bisa
            berkontribusi dalam proyek-proyek digital yang berdampak luas.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
