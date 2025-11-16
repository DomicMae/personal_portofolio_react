import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../input.css"; // Pastikan path ini benar

// --- 1. DATA SERTIFIKAT ---
const sertifikatData = [
  {
    id: 1,
    imgSrc: "/Sertifikat Coursera_1.jpg",
    issuer: "Coursera",
    title: "Dasar-Dasar Dukungan Teknis",
    date: "Dec 2022",
  },
  {
    id: 2,
    imgSrc: "/Sertifikat Courser_2.jpg",
    issuer: "Coursera",
    title: "Seluk Beluk Jaringan Komputer",
    date: "Dec 2022",
  },
  {
    id: 3,
    imgSrc: "/Sertifikat Coursera_3.jpg",
    issuer: "Coursera",
    title: "Sistem Operasi dan Anda: Menjadi Pengguna yang Berdaya",
    date: "Dec 2022",
  },
  {
    id: 4,
    imgSrc: "/Sertifikat Coursera_4.jpg",
    issuer: "Coursera",
    title: "Administrasi Sistem dan Layanan Infrastruktur TI",
    date: "Jan 2023",
  },
  {
    id: 5,
    imgSrc: "/Sertifikat Coursera_IT Support.jpg",
    issuer: "Coursera",
    title: "IT Support",
    date: "Jan 2023",
  },
  {
    id: 6,
    imgSrc: "/Sertifikat-baparekraf-developer-day-2023.jpg",
    issuer: "Dicoding",
    title: "Baparekraf Developer Day 2023",
    date: "Mar 2023",
  },
  {
    id: 7,
    imgSrc: "/Sertifikat_Dicoding_AWS.jpg",
    issuer: "Dicoding",
    title: "Belajar Dasar AWS Cloud",
    date: "Apr 2023",
  },
  {
    id: 8,
    imgSrc: "/Sertifikat_Dicoding_Javascript.jpg",
    issuer: "Dicoding",
    title: "Belajar Dasar Pemrograman JavaScript",
    date: "May 2023",
  },
  {
    id: 9,
    imgSrc: "/Sertifikat_Dicoding_ProyekManagement.jpg",
    issuer: "Dicoding",
    title: "Belajar Dasar Manajemen Proyek",
    date: "Dec 2023",
  },
  {
    id: 10,
    imgSrc: "/Sertifikat_Dicoding_SQL.jpg",
    issuer: "Dicoding",
    title: "Belajar Dasar Structured Query Language (SQL)",
    date: "Jan 2024",
  },
  {
    id: 11,
    imgSrc: "/Sertifikat_Dicoding_DataScience.jpg",
    issuer: "Dicoding",
    title: "Belajar Dasar Data Science",
    date: "Jan 2024",
  },
  {
    id: 12,
    imgSrc: "/Sertifikat_Dicoding_Memulai Pemrograman dengan Python.jpg",
    issuer: "Dicoding",
    title: "Memulai Pemrograman dengan Python",
    date: "Mar 2025",
  },
  {
    id: 13,
    imgSrc: "/Sertifikat_Dicoding_Belajar Dasar Visualisasi Data.jpg",
    issuer: "Dicoding",
    title: "Belajar Dasar Visualisasi Data",
    date: "Apr 2025",
  },
  {
    id: 14,
    imgSrc: "/Sertifikat_Dicoding_AI Praktis untuk Produktivitas.jpg",
    issuer: "Dicoding",
    title: "AI Praktis untuk Produktivitas",
    date: "May 2025",
  },
  {
    id: 15,
    imgSrc:
      "/Sertifikat_Dicoding_Belajar Back-End Pemula dengan JavaScript.jpg",
    issuer: "Dicoding",
    title: "Belajar Back-End Pemula dengan JavaScript",
    date: "May 2025",
  },
  {
    id: 16,
    imgSrc: "/Sertifikat_Dicoding_Belajar Penggunaan Generative AI.jpg",
    issuer: "Dicoding",
    title: "Belajar Penggunaan Generative AI",
    date: "Mei 2025",
  },
  {
    id: 17,
    imgSrc: "/Sertifikat_Dicoding_Financial Literacy.jpg",
    issuer: "Dicoding",
    title: "Financial Literacy 101",
    date: "May 2025",
  },
  {
    id: 18,
    imgSrc: "/Sertifikat_Dicoding_BelajarMachineLearningPemula.jpg",
    issuer: "Dicoding",
    title: "Belajar Machine Learning Pemula",
    date: "Jun 2025",
  },
  {
    id: 19,
    imgSrc: "/Sertifikat_IBM_1.jpg",
    issuer: "IBM",
    title: "Use Generative AI for Software Development",
    date: "Jul 2025",
  },
  {
    id: 20,
    imgSrc: "/Sertifikat_IBM_2.jpg",
    issuer: "IBM",
    title: "IBM Granite Models for Software Development",
    date: "Jul 2025",
  },
  {
    id: 21,
    imgSrc: "/Sertifikat_IBM_3.jpg",
    issuer: "IBM",
    title: "Code Generation and Optimization Using IBM Granite",
    date: "Jul 2025",
  },
  {
    id: 22,
    imgSrc: "/Sertifikat IBM-Ardon.jpg",
    issuer: "Hacktiv8 Indonesia",
    title: "Code Generations and Optimization",
    date: "Jul 2025",
  },
];

// --- 2. KOMPONEN CARD (untuk Halaman Utama) ---
const SertifikatCard = ({ imgSrc, issuer, title, date, onImageClick }) => (
  <div className="card rounded-3xl bg-custom-black w-full md:w-1/2 lg:w-1/3 shadow-xl">
    {/* 'figure' sekarang bisa diklik */}
    <figure
      className="px-10 pt-10 pb-5 cursor-pointer group"
      onClick={() => onImageClick(imgSrc)}
    >
      <img
        src={imgSrc}
        alt={title}
        className="border border-gray-300 w-full rounded-md transition-transform duration-300 group-hover:scale-105"
      />
    </figure>
    <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
      <h2 className="card-title text-3xl font-bold pb-3">{issuer}</h2>
      <p>{title}</p>
      <p>{date}</p>
    </div>
  </div>
);

// --- 3. KOMPONEN DRAWER (Panel dari Kanan) ---
const SertifikatDrawer = ({ allSertifikat, onClose, onImageClick }) => {
  return (
    <>
      {/* Overlay (Latar belakang gelap) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
      />

      {/* Panel Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 w-full max-w-4xl h-full bg-custom-black z-50 shadow-2xl"
      >
        <div className="flex flex-col h-full">
          {/* Header Drawer */}
          <div className="flex justify-between items-center p-6 border-b border-neutral-700 flex-shrink-0">
            <h2 className="text-2xl font-bold text-custom-white">
              All Certificates
            </h2>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Konten Drawer (Bisa di-scroll) */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {allSertifikat.map((sertifikat) => (
              // Menggunakan style list yang lebih kompak untuk di drawer
              <div
                key={sertifikat.id}
                className="flex items-center gap-4 p-4 bg-neutral-900 rounded-lg border border-neutral-700/60"
              >
                <img
                  src={sertifikat.imgSrc}
                  alt={sertifikat.title}
                  className="w-70 h-40 object-cover rounded-md flex-shrink-0 border border-neutral-700"
                  onClick={() => onImageClick(sertifikat.imgSrc)}
                />
                <div className="font-redhat text-custom-yellow overflow-hidden">
                  <h3 className="font-bold text-lg text-white truncate">
                    {sertifikat.issuer}
                  </h3>
                  <p className="text-sm truncate">{sertifikat.title}</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    {sertifikat.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const ImagePreviewModal = ({ imgSrc, onClose }) => {
  return (
    <>
      {/* Overlay (Latar belakang gelap) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-md flex justify-center items-center p-4"
      >
        {/* Tombol Tutup di Pojok */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl z-[110]"
          aria-label="Close image preview"
        >
          &times;
        </button>

        {/* Kontainer Gambar (agar tidak ikut tertutup saat diklik) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat gambar diklik
          className="relative"
        >
          <img
            src={imgSrc}
            alt="Sertifikat Preview"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

// --- 4. KOMPONEN UTAMA HALAMAN ---
const BodySertifikatPage = ({ user }) => {
  // State untuk mengontrol status buka/tutup drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const openPreview = (imgSrc) => setSelectedImage(imgSrc);
  const closePreview = () => setSelectedImage(null);

  // Ambil HANYA 6 sertifikat pertama (3 baris x 2 kartu) untuk tampilan awal
  const initialCertificates = sertifikatData.slice(0, 6);

  useEffect(() => {
    // Tentukan apakah scroll harus dikunci
    const isScrollLocked = isDrawerOpen || selectedImage !== null;

    if (isScrollLocked) {
      // Hitung lebar scrollbar untuk mencegah "lompatan" layout
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Terapkan style ke body
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Hapus style saat drawer/modal ditutup
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    // Fungsi cleanup: akan berjalan saat komponen di-unmount
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isDrawerOpen, selectedImage]);

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

      {/* Grid untuk 6 sertifikat awal */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {initialCertificates.map((sertifikat) => (
          <SertifikatCard
            key={sertifikat.id}
            imgSrc={sertifikat.imgSrc}
            issuer={sertifikat.issuer}
            title={sertifikat.title}
            date={sertifikat.date}
            onImageClick={openPreview}
          />
        ))}
      </div>

      {/* Tombol "More Certificate" */}
      <div className="text-center mt-12">
        <motion.button
          onClick={() => setIsDrawerOpen(true)}
          className="
            px-8 py-3
            bg-custom-yellow text-custom-black
            font-bold rounded-lg
            shadow-lg
            transition-all duration-300
            hover:bg-opacity-80
            hover:shadow-custom-yellow/30
            focus:outline-none focus:ring-2 focus:ring-custom-yellow focus:ring-opacity-50
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          More Certificate
        </motion.button>
      </div>

      {/* Drawer (Muncul saat isDrawerOpen === true) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <SertifikatDrawer
            allSertifikat={sertifikatData} // Kirim SEMUA data ke drawer
            onImageClick={openPreview}
            onClose={() => setIsDrawerOpen(false)}
          />
        )}

        {selectedImage && (
          <ImagePreviewModal
            key="preview" // <-- TAMBAHKAN KEY UNIK
            imgSrc={selectedImage}
            onClose={closePreview}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BodySertifikatPage;
