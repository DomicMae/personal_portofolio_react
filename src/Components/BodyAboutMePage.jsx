import "../input.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const BodyAboutMePage = ({ user }) => {
  const [language, setLanguage] = useState("id"); // default Bahasa Indonesia

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  return (
    <div className="text-black pb-24">
      <div id="about-me" className="pt-24 text-center">
        <div className="flex items-center justify-center space-x-4 animate-fade-in-up">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-jakarta font-bold tracking-tight sm:text-5xl text-custom-orange relative group"
          >
            About
            <span className="block h-1 w-0 bg-custom-yellow group-hover:w-full transition-all duration-500 absolute bottom-0 left-0 rounded-full"></span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-jakarta font-bold tracking-tight sm:text-5xl text-custom-orange relative group"
          >
            Me!!
            <span className="block h-1 w-0 bg-custom-yellow group-hover:w-full transition-all duration-500 absolute bottom-0 left-0 rounded-full"></span>
          </motion.h1>
        </div>

        {/* Tombol ganti bahasa */}
        <div className="mt-6 animate-fade-in-up">
          <button
            onClick={toggleLanguage}
            className="bg-custom-orange text-white px-6 py-2 rounded-lg shadow-md hover:bg-custom-yellow hover:scale-105 transition-all duration-300"
          >
            {language === "id" ? "Bahasa Inggris" : "Bahasa Indonesia"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-4 md:p-10">
        <div className="hidden md:block col-span-1"></div>

        <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center">
          <p className="font-jakarta text-custom-orange text-base md:text-xl text-justify leading-relaxed mt-6 transition-all duration-700 ease-in-out animate-fade-in-up hover:scale-[1.02]">
            {language === "id" ? (
              <>
                Pernah suatu hari, seorang anak bernama Ardon duduk di depan
                layar monitor dan berkata, “Hmm… sepertinya saya bisa membuat
                dunia jadi lebih mudah dengan baris-baris kode ini.” Dari
                situlah perjalanan saya dimulai.
                <br />
                <br />
                Saya adalah lulusan Sistem Informasi Bisnis dari Universitas
                Kristen Petra yang percaya bahwa teknologi bukan hanya soal
                sistem, tapi juga soal solusi. Selama kuliah, saya jatuh cinta
                pada logika, error, dan tentu saja, keberhasilan ketika aplikasi
                akhirnya berjalan mulus tanpa bug (meskipun itu jarang terjadi
                di percobaan pertama).
                <br />
                <br />
                Saya pernah magang sebagai Back-end dan Android Developer, dan
                di sanalah saya belajar: deadline adalah teman, tim adalah
                keluarga, dan coffee adalah bahan bakar. Saya suka tantangan
                baru, terutama yang bisa saya “debug” — baik itu sistem maupun
                hidup.
                <br />
                <br />
                Di dunia teknologi yang cepat berubah ini, saya tetap belajar
                setiap hari. Target saya sederhana: menjadi developer yang tidak
                hanya tahu cara menulis kode, tapi juga mengerti mengapa kode
                itu penting bagi orang lain.
              </>
            ) : (
              <>
                One day, a boy named Ardon sat in front of a monitor and said,
                “Hmm… maybe I can make the world better with a few lines of
                code.” That’s where the journey began.
                <br />
                <br />
                I'm a graduate of Business Information Systems from Petra
                Christian University who believes that technology isn't just
                about systems, but about solutions. In college, I fell in love
                with logic, errors, and the sweet success of bug-free code
                (which rarely happens on the first try).
                <br />
                <br />
                I've interned as a Back-end and Android Developer, and that's
                where I learned: deadlines are friends, teams are family, and
                coffee is fuel. I love new challenges, especially the kind I can
                "debug" — whether it's in a system or in life.
                <br />
                <br />
                In this fast-paced tech world, I continue learning every day. My
                goal is simple: to be a developer who not only writes code, but
                understands why that code matters to people.
              </>
            )}
          </p>

          <hr className="w-full border-t-2 border-white mt-6 animate-fade-in-up" />
        </div>
      </div>
    </div>
  );
};

export default BodyAboutMePage;
