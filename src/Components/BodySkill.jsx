import "../input.css";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./ui/EffectSkill";

const BodySkill = ({ user }) => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="text-black pb-20">
        <div id="skills" className="pt-24 text-center">
          {/* Semua teks di dalam div ini akan berwarna hitam */}
          <div className="flex items-center justify-center space-x-2 pb-12 text-custom-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-orange"
            >
              My
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-orange"
            >
              Skill
            </motion.h1>
          </div>
        </div>

        <div className="overflow-hidden w-full bg-neutral-950 py-6 ">
          {/* Baris 1 - Kanan ke kiri */}
          <div className="flex whitespace-nowrap scroll-left">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex">
                {[
                  "php.svg",
                  "js.svg",
                  "ts.svg",
                  "html.svg",
                  "css.svg",
                  "sql.svg",
                  "mongodb.svg",
                  "react.svg",
                  "vitejs.svg",
                  "expo.svg",
                  "laravel.svg",
                  "golang.svg",
                  "echo.svg",
                  "bootstrap.svg",
                  "figma.svg",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-end mx-6 flex-shrink-0 w-24"
                    onClick={() => src.replace(".svg", "").toUpperCase()}
                  >
                    <div className="w-24 h-24 flex items-center justify-center">
                      <img
                        src={src}
                        alt={src}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-medium text-custom-orange text-xl text-center mt-2">
                      {src.replace(".svg", "").toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pemisah */}
        <div className="h-1 w-full bg-custom-red mb-28 rounded-full" />

        <div className="overflow-hidden w-full bg-neutral-950 py-6 rounded-lg">
          {/* Baris 2 - Kiri ke kanan */}
          <div className="flex whitespace-nowrap scroll-right">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex">
                {[
                  "php.svg",
                  "js.svg",
                  "ts.svg",
                  "html.svg",
                  "css.svg",
                  "sql.svg",
                  "mongodb.svg",
                  "react.svg",
                  "vitejs.svg",
                  "expo.svg",
                  "laravel.svg",
                  "echo.svg",
                  "bootstrap.svg",
                  "figma.svg",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-end mx-6 flex-shrink-0 w-24"
                    onClick={() => src.replace(".svg", "").toUpperCase()}
                  >
                    <div className="w-24 h-24 flex items-center justify-center">
                      <img
                        src={src}
                        alt={src}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-medium text-custom-orange text-xl text-center mt-2">
                      {src.replace(".svg", "").toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2 pt-12">
          <div className="flex flex-col items-center justify-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-bold tracking-tight text-custom-white text-3xl sm:text-4xl text-center pt-6 pb-20"
            >
              GitHub Contributions
            </motion.h1>
            <div className="w-full flex justify-center px-4 sm:px-6 md:px-8">
              <img
                src="Github Progress.svg"
                alt="GitHub Contributions"
                className="
        rounded-md
        w-full
        max-w-[350px]           /* Mobile */
        sm:max-w-[700px]        /* Small tablet */
        md:max-w-[900px]        /* Tablet landscape */
        lg:max-w-[1248px]       /* Laptop/Desktop */
        h-auto
      "
              />
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default BodySkill;
