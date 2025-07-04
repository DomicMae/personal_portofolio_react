import "../input.css";
import { motion } from "framer-motion";

const BodySertifikatPage = ({ user }) => {
  return (
    <div className="text-black pb-20">
      <div id="sertifikat" className="pt-24 text-center">
        <div className="flex items-center justify-center space-x-2 pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-white"
          >
            Sertifikat
          </motion.h1>
        </div>
      </div>

      {/* First Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Coursera_1.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat Coursera_1"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Coursera</h2>
            <p>Dasar-Dasar Dukungan Teknis</p>
            <p>Dec 2022</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Courser_2.jpg" // Make sure this image exists in the public folder
              alt="Sertifikat Courser_2"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Coursera</h2>
            <p>Seluk Beluk Jaringan Komputer</p>
            <p>Dec 2022</p>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Coursera_3.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat Coursera_3"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Coursera</h2>
            <p>Sistem Operasi dan Anda: Menjadi Pengguna yang Berdaya</p>
            <p>Dec 2022</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Coursera_4.jpg"
              alt="Sertifikat Coursera_4"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Coursera</h2>
            <p>Administrasi Sistem dan Layanan Infrastruktur TI</p>
            <p>Jan 2023</p>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Coursera_IT Support.jpg"
              alt="Sertifikat Coursera_IT Support"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Coursera</h2>
            <p>IT Support</p>
            <p>Jan 2023</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat-baparekraf-developer-day-2023.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat-baparekraf-developer-day-2023"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Baparekraf Developer Day 2023</p>
            <p>Mar 2023</p>
          </div>
        </div>
      </div>

      {/* Fourth Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_AWS.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat_Dicoding_AWS"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Dasar AWS Cloud</p>
            <p>Apr 2023</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_Javascript.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat_Dicoding_Javascript"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Dasar Pemrograman JavaScript</p>
            <p>May 2023</p>
          </div>
        </div>
      </div>

      {/* Fifth Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_ProyekManagement.jpg"
              alt="Sertifikat_Dicoding_ProyekManagement"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Dasar Manajemen Proyek</p>
            <p>Dec 2023</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_SQL.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat_Dicoding_SQL"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Dasar Structured Query Language (SQL)</p>
            <p>Jan 2024</p>
          </div>
        </div>
      </div>

      {/* Sixth Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_DataScience.jpg"
              alt="Sertifikat_Dicoding_DataScience"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Dasar Data Science</p>
            <p>Jan 2024</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_Memulai Pemrograman dengan Python.jpg"
              alt="Sertifikat_Dicoding_Memulai Pemrograman dengan Python"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Memulai Pemrograman dengan Python</p>
            <p>Mar 2025</p>
          </div>
        </div>
      </div>

      {/* Seventh Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_Belajar Dasar Visualisasi Data.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat_Dicoding_Belajar Dasar Visualisasi Data"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Dasar Visualisasi Data</p>
            <p>Apr 2025</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_AI Praktis untuk Produktivitas.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat_Dicoding_AI Praktis untuk Produktivitas"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>AI Praktis untuk Produktivitas</p>
            <p>May 2025</p>
          </div>
        </div>
      </div>

      {/* Eight Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_Belajar Back-End Pemula dengan JavaScript.jpg"
              alt="Sertifikat_Dicoding_Belajar Back-End Pemula dengan JavaScript"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Back-End Pemula dengan JavaScript</p>
            <p>May 2025</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_Belajar Penggunaan Generative AI.jpg"
              alt="Sertifikat_Dicoding_Belajar Penggunaan Generative AI"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Penggunaan Generative AI</p>
            <p>Mei 2025</p>
          </div>
        </div>
      </div>

      {/* Nineth Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_Financial Literacy.jpg"
              alt="Sertifikat_Dicoding_Financial Literacy"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Financial Literacy 101</p>
            <p>May 2025</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_BelajarMachineLearningPemula.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat_Dicoding_BelajarMachineLearningPemula"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Machine Learning Pemula</p>
            <p>Jun 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySertifikatPage;
