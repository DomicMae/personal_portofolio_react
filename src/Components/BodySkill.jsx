import "../input.css";
import React, { useState } from "react";

const BodySkill = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");

  // Fungsi untuk membuka modal dan mengatur skill yang dipilih
  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill("");
  };

  return (
    <div className="text-black pb-20">
      {" "}
      {/* Semua teks di dalam div ini akan berwarna hitam */}
      <div className="flex items-center justify-center space-x-2 pb-8">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl text-custom-orange">
          My
        </h1>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl text-white">
          Skill
        </h1>
      </div>
      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-4 text-lg font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            {/* Modal untuk PHP */}
            {selectedSkill === "PHP" && (
              <div>
                <h2 className="text-xl font-bold text-center">PHP</h2>
                <p className="text-center">
                  PHP adalah bahasa pemrograman server-side yang digunakan untuk
                  mengembangkan aplikasi web dinamis.
                </p>
              </div>
            )}

            {/* Modal untuk JavaScript */}
            {selectedSkill === "JavaScript" && (
              <div>
                <h2 className="text-xl font-bold text-center">JavaScript</h2>
                <p className="text-center">
                  JavaScript adalah bahasa pemrograman yang berjalan di sisi
                  klien dan digunakan untuk mengembangkan elemen interaktif di
                  website.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="flex items-center justify-center space-x-2 pb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-2xl text-white">
          Skill
        </h1>
      </div>
      <div className="items-center justify-center grid grid-cols-4 ">
        <div
          className="col-span-1 flex flex-col items-center justify-center"
          onClick={() => openModal("PHP")}
        >
          <img src="php.png" alt="" className="rounded-md w-82 h-82 pt-6" />
          <p className="font-medium text-custom-orange text-xl text-center pt-6">
            PHP
          </p>
        </div>
        <div
          className="col-span-1 flex flex-col items-center justify-center"
          onClick={() => openModal("JavaScript")}
        >
          <img src="js.png" alt="" className="rounded-md w-82 h-82" />
          <p className="font-medium text-custom-orange text-xl text-center">
            JavaScript
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="html.png" alt="" className="rounded-md w-82 h-82 pt-4" />
          <p className="font-medium text-custom-orange text-xl text-center pb-4">
            HTML
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="css.png" alt="" className="rounded-md w-82 h-82 pb-4" />
          <p className="font-medium text-custom-orange text-xl text-center pb-3">
            CSS
          </p>
        </div>
      </div>
      <div className="items-center justify-center grid grid-cols-4">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img
            src="sql.png"
            alt=""
            className="rounded-md w-82 h-82 pt-6 pb-4"
          />
          <p className="font-medium text-custom-orange text-xl text-center pt-4">
            SQL
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center ">
          <img src="react.png" alt="" className="rounded-md w-20 h-24 pt-4" />
          <p className="font-medium text-custom-orange text-xl text-center pt-8">
            React
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="laravel.png" alt="" className="rounded-md w-82 h-82" />
          <p className="font-medium text-custom-orange text-xl text-center">
            Laravel
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img
            src="bootstrap.png"
            alt=""
            className="rounded-md w-82 h-82 pt-4"
          />
          <p className="font-medium text-custom-orange text-xl text-center pb-4">
            Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodySkill;
