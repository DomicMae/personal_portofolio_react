import "../input.css";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./ui/EffectHome";

const BodyHomePage = ({ user }) => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="text-black">
        {/* Responsive grid layout */}
        <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-10">
          {/* Left section with text */}
          <div className="flex flex-col justify-start md:justify-center items-start md:items-start pt-40 md:pt-0">
            <div className="flex flex-col justify-center text-center md:text-start pb-0 md:pb-20 w-full">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-6xl font-jakarta font-bold text-custom-orange pb-2"
              >
                Hello!!
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="block md:hidden text-3xl sm:text-4xl font-jakarta font-bold text-custom-white pb-0"
              >
                I’m
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="block md:hidden text-3xl sm:text-4xl font-jakarta font-bold text-custom-white pb-2"
              >
                Ardon Yunors Tallan
              </motion.h1>

              {/* Teks untuk md ke atas: gabungan */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden md:block text-6xl font-jakarta font-bold text-custom-white pb-2"
              >
                I’m Ardon Yunors Tallan,
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-6xl font-jakarta font-bold text-custom-orange pb-2"
              >
                Fresh Graduated Programmer
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-6xl font-jakarta font-bold text-custom-white pb-4 md:pb-8"
              >
                Creative Software Developer
              </motion.h1>
            </div>
          </div>

          {/* Right section with image */}
          <div className="hidden md:flex justify-center items-center pb-0 md:pb-20 relative">
            <div
              className="absolute -rotate-3 w-[24rem] h-[36rem] bg-gradient-to-br from-pink-500 via-indigo-500 to-purple-500
                  blur-2xl opacity-20 rounded-xl z-0"
            />

            <img
              src="FotoMe-Light.jpg"
              alt="Foto Ardon"
              className="w-[22rem] h-[32rem] object-cover rounded-3xl shadow-2xl
               border-[1px] border-white/10 backdrop-blur-md z-10"
            />
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default BodyHomePage;
