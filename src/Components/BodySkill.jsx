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
      <div id="skills" className="pt-24 text-center">
        {/* Semua teks di dalam div ini akan berwarna hitam */}
        <div className="flex items-center justify-center space-x-2 pb-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-orange">
            My
          </h1>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
            Skill
          </h1>
        </div>
      </div>
      {/* Modal Section */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-lg font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            {/* Modal untuk PHP */}
            {selectedSkill === "PHP" && (
              <div>
                <h2 className="text-xl font-bold ">PHP</h2>
                <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-800 mt-4 mx-auto">
                  <div
                    className="bg-yellow-400 text-base font-medium text-black text-center p-0.5 leading-none rounded-full"
                    style={{ width: "70%" }} // Sesuaikan dengan persentase yang diinginkan
                  >
                    70%
                  </div>
                </div>
              </div>
            )}

            {/* Modal untuk JavaScript */}
            {selectedSkill === "JavaScript" && (
              <div>
                <h2 className="text-xl font-bold">JavaScript</h2>
                <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-800 mt-4 mx-auto">
                  <div
                    className="bg-yellow-400 text-base font-medium text-black text-center p-0.5 leading-none rounded-full"
                    style={{ width: "85%" }} // Sesuaikan dengan persentase yang diinginkan
                  >
                    85%
                  </div>
                </div>
              </div>
            )}

            {/* Modal untuk JavaScript */}
            {selectedSkill === "HTML" && (
              <div>
                <h2 className="text-xl font-bold">HTML</h2>
                <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-700 mt-4 mx-auto">
                  <div
                    className="bg-yellow-400 text-base font-medium text-black text-center p-0.5 leading-none rounded-full"
                    style={{ width: "100%" }} // Sesuaikan dengan persentase yang diinginkan
                  >
                    100%
                  </div>
                </div>
              </div>
            )}

            {/* Modal untuk JavaScript */}
            {selectedSkill === "CSS" && (
              <div>
                <h2 className="text-xl font-bold">CSS</h2>
                <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-700 mt-4 mx-auto">
                  <div
                    className="bg-yellow-400 text-base font-medium text-black text-center p-0.5 leading-none rounded-full"
                    style={{ width: "85%" }} // Sesuaikan dengan persentase yang diinginkan
                  >
                    85%
                  </div>
                </div>
              </div>
            )}

            {/* Modal untuk JavaScript */}
            {selectedSkill === "SQL" && (
              <div>
                <h2 className="text-xl font-bold">SQL</h2>
                <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-700 mt-4 mx-auto">
                  <div
                    className="bg-yellow-400 text-base font-medium text-black text-center p-0.5 leading-none rounded-full"
                    style={{ width: "85%" }} // Sesuaikan dengan persentase yang diinginkan
                  >
                    85%
                  </div>
                </div>
              </div>
            )}

            {/* Modal untuk JavaScript */}
            {selectedSkill === "React" && (
              <div>
                <h2 className="text-xl font-bold">React</h2>
                <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-700 mt-4 mx-auto">
                  <div
                    className="bg-yellow-400 text-base font-medium text-black text-center p-0.5 leading-none rounded-full"
                    style={{ width: "85%" }} // Sesuaikan dengan persentase yang diinginkan
                  >
                    85%
                  </div>
                </div>
              </div>
            )}

            {/* Modal untuk JavaScript */}
            {selectedSkill === "Laravel" && (
              <div>
                <h2 className="text-xl font-bold">Laravel</h2>
                <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-700 mt-4 mx-auto">
                  <div
                    className="bg-yellow-400 text-base font-medium text-black text-center p-0.5 leading-none rounded-full"
                    style={{ width: "85%" }} // Sesuaikan dengan persentase yang diinginkan
                  >
                    85%
                  </div>
                </div>
              </div>
            )}

            {/* Modal untuk JavaScript */}
            {selectedSkill === "Bootstrap" && (
              <div>
                <h2 className="text-xl font-bold">Bootstrap</h2>
                <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-700 mt-4 mx-auto">
                  <div
                    className="bg-yellow-400 text-base font-medium text-black text-center p-0.5 leading-none rounded-full"
                    style={{ width: "85%" }} // Sesuaikan dengan persentase yang diinginkan
                  >
                    85%
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="overflow-hidden w-full">
        <div className="items-center justify-end grid grid-cols-2 sm:grid-cols-8 animate-scroll">
          <div
            className="col-span-1 flex flex-col items-center justify-end"
            onClick={() => openModal("PHP")}
          >
            <img
              src="php.png"
              alt=""
              className="rounded-md w-82 h-82 pt-12 pb-4"
            />
            <p className="font-medium text-custom-orange text-xl text-center pt-4">
              PHP
            </p>
          </div>
          <div
            className="col-span-1 flex flex-col items-center justify-end"
            onClick={() => openModal("JavaScript")}
          >
            <img src="js.png" alt="" className="rounded-md w-82 h-82 pt-4" />
            <p className="font-medium text-custom-orange text-xl text-center pt-4">
              JavaScript
            </p>
          </div>
          <div
            className="col-span-1 flex flex-col items-center justify-end"
            onClick={() => openModal("HTML")}
          >
            <img
              src="html.png"
              alt=""
              className="rounded-md w-82 h-82 pt-6 pb-3"
            />
            <p className="font-medium text-custom-orange text-xl text-center">
              HTML
            </p>
          </div>
          <div
            className="col-span-1 flex flex-col items-center justify-end"
            onClick={() => openModal("CSS")}
          >
            <img
              src="css.png"
              alt=""
              className="rounded-md w-82 h-82 pt-6 pb-4"
            />
            <p className="font-medium text-custom-orange text-xl text-center pt-2 pb-2">
              CSS
            </p>
          </div>
          <div
            className="col-span-1 flex flex-col items-center justify-end"
            onClick={() => openModal("SQL")}
          >
            <img
              src="sql.png"
              alt=""
              className="rounded-md w-82 h-82 pt-12 pb-4"
            />
            <p className="font-medium text-custom-orange text-xl text-center pt-2 pb-1">
              SQL
            </p>
          </div>
          <div
            className="col-span-1 flex flex-col items-center justify-end"
            onClick={() => openModal("React")}
          >
            <img
              src="react.png"
              alt=""
              className="rounded-md w-20 h-21 pt-12"
            />
            <p className="font-medium text-custom-orange text-xl text-center pt-6 pb-3">
              React
            </p>
          </div>
          <div
            className="col-span-1 flex flex-col items-center justify-end"
            onClick={() => openModal("Laravel")}
          >
            <img
              src="laravel.png"
              alt=""
              className="rounded-md w-82 h-82 pt-3"
            />
            <p className="font-medium text-custom-orange text-xl text-center pt-2">
              Laravel
            </p>
          </div>
          <div
            className="col-span-1 flex flex-col items-center justify-end"
            onClick={() => openModal("Bootstrap")}
          >
            <img
              src="bootstrap.png"
              alt=""
              className="rounded-md w-82 h-82 pt-6"
            />
            <p className="font-medium text-custom-orange text-xl text-center pb-1">
              Bootstrap
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 pt-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-white text-2xl sm:text-4xl text-center pt-6 pb-3">
            GitHub Contributions
          </h1>
          <img
            src="Github Progress.png"
            alt="GitHub"
            className="rounded-md w-82 h-82 sm:w-82 sm:h-82"
          />
        </div>
      </div>
    </div>
  );
};

export default BodySkill;
