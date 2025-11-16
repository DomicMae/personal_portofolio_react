import { ArrowDown } from "lucide-react";
import "../input.css";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./ui/EffectHome";

const BodyProject = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="text-black pb-20">
        <div id="project" className="pt-12 text-center"></div>
        <div className="flex flex-col items-center justify-center space-y-8 pt-20 pb-24">
          <div className="text-center space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-orange mb-4"
            >
              Project
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl font-bold text-custom-white"
            >
              check more about my project in below
            </motion.h2>
          </div>

          {/* Arrow bouncing */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="text-custom-orange"
          >
            <ArrowDown size={36} />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: 1.5, scale: 1.05 }}
              className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              <a
                href="https://github.com/DomicMae"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center"
              >
                <motion.img
                  src="github.png"
                  alt="GitHub"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-md"
                />
                <motion.p
                  whileHover={{ y: -2 }}
                  className="font-medium text-custom-orange text-xl text-center pt-4"
                >
                  Github DomicMae
                </motion.p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: 1.5, scale: 1.05 }}
              className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              <a
                href="https://github.com/DomicMae1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center"
              >
                <motion.img
                  src="github.png"
                  alt="GitHub"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-md"
                />
                <motion.p
                  whileHover={{ y: -2 }}
                  className="font-medium text-custom-orange text-xl text-center pt-4"
                >
                  Github DomicMae1
                </motion.p>
              </a>
            </motion.div>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center space-y-2 pt-12">
        <div className="flex flex-col items-center justify-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bold tracking-tight text-custom-white text-xl sm:text-2xl text-center pt-6 pb-20"
          >
            Checkout my gitHub contributions
          </motion.h1>
          <div className="w-full flex justify-center px-4 sm:px-6 md:px-8">
            <img
              src="/github-progress.svg"
              alt="github-progress"
              loading="eager"
              className="
        rounded-md
        w-full
        max-w-[350px]
        sm:max-w-[700px]
        md:max-w-[900px]
        lg:max-w-[1248px]
        h-auto
      "
            />
          </div>
        </div>
      </div> */}

        <div className="text-black">
          <div id="project" className="pt-24 text-center">
            <div className="flex items-center justify-center space-x-2 pb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-orange"
              >
                Another Project
              </motion.h1>
            </div>
          </div>

          {/* Container untuk Card 1 & Card 2 */}
          <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
            {/* First Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative card rounded-3xl bg-custom-red w-full md:w-[40%] shadow-2xl hover:shadow-yellow-400/40 hover:-translate-y-2 transform transition-all duration-500"
            >
              <a
                href="https://www.figma.com/design/qVsKitnd2IzypbVKoTrIbJ/EZ-Cook-Prototype-New?node-id=0-1&t=QZRiQFd0bBAEo3sl-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="px-10 pt-10 pb-5 flex justify-center">
                  <div className="w-full aspect-[16/9] max-w-full rounded-lg overflow-hidden border-4 border-custom-yellow shadow-md">
                    <img
                      src="/WebsiteEZCook.svg"
                      alt="WebsiteEZCook"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>

                <div className="card-body px-10 pb-6 font-redhat">
                  <h2 className="card-title text-3xl font-bold pb-3 text-custom-yellow">
                    UI/UX Project EZ Cook
                  </h2>
                  <p className="text-base leading-relaxed text-justify text-white">
                    EZ Cook adalah proyek dari techno entrepreneurship. Proyek
                    ini bertujuan menyediakan makanan sehat untuk orang sibuk
                    yang kurang memperhatikan kandungan gizi makanannya.
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Second Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative card rounded-3xl bg-custom-red w-full md:w-[40%] shadow-2xl hover:shadow-yellow-400/40 hover:-translate-y-2 transform transition-all duration-500"
            >
              <a
                href="https://www.figma.com/design/6t0qS0NceaFpjtxEXpZ17j/Pujasera-Kelompok?node-id=0-1&t=rXVM7KcfcTD2Z49C-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="px-10 pt-10 pb-5 flex justify-center">
                  <img
                    src="/WebsitePujasera.svg"
                    alt="WebsitePujasera"
                    className="border-4 border-custom-yellow w-auto max-w-full max-h-full rounded-lg shadow-md"
                  />
                </figure>
                <div className="card-body text-custom-yellow px-10 pb-6 font-redhat">
                  <h2 className="card-title text-3xl font-bold pb-3">
                    Project Pujasera
                  </h2>
                  <p className="text-base leading-relaxed text-justify text-white">
                    Project Pujasera ini adalah hasil kerja tim saya sebagai
                    tugas kuliah. Saya bertanggung jawab di bagian Back-end dan
                    aktif berdiskusi dengan anggota tim untuk memastikan seluruh
                    sistem berjalan sesuai kebutuhan klien.
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Container Card 3 dan 4 */}
          <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
            {/* Third Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative card rounded-3xl bg-custom-red w-full md:w-[40%] shadow-2xl hover:shadow-yellow-400/40 hover:-translate-y-2 transform transition-all duration-500"
            >
              <a
                href="https://www.figma.com/design/uTdNGSOqPt3S7s4bobOyvY/Desain-Komplain?t=fO5yOCo6KmXV43WU-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="px-10 pt-10 pb-5 flex justify-center">
                  <img
                    src="/WebsiteKomplain.svg"
                    alt="WebsiteKomplain"
                    className="border-4 border-custom-yellow w-auto max-w-full max-h-full rounded-lg shadow-md"
                  />
                </figure>
                <div className="card-body text-custom-yellow px-10 pb-6 font-redhat">
                  <h2 className="card-title text-3xl font-bold pb-3">
                    Project Komplain Rumah Sakit
                  </h2>
                  <p className="text-base leading-relaxed text-justify text-white">
                    Website ini dirancang agar mudah digunakan oleh customer
                    untuk menyampaikan komplain dan memantau progresnya secara
                    real-time. Terdapat dua peran: customer dan administrator.
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Fourth Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative card rounded-3xl bg-custom-red w-full md:w-[40%] shadow-2xl hover:shadow-yellow-400/40 hover:-translate-y-2 transform transition-all duration-500"
            >
              <a
                href="https://www.figma.com/design/2hXGuGQ9tJLbu1uaNIJcb1/Desain-Landing-Page-Kopra?node-id=0-1&t=fO5yOCo6KmXV43WU-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="px-10 pt-10 pb-5 flex justify-center">
                  <img
                    src="/CompanyProfileDafco.svg"
                    alt="CompanyProfileDafco"
                    className="border-4 border-custom-yellow w-auto max-w-full max-h-full rounded-lg shadow-md"
                  />
                </figure>
                <div className="card-body text-custom-yellow px-10 pb-6 font-redhat">
                  <h2 className="card-title text-3xl font-bold pb-3">
                    Landing Page Dafco Resource
                  </h2>
                  <p className="text-base leading-relaxed text-justify text-white">
                    Landing page profesional untuk Company Profile Dafco
                    Resource, sebuah perusahaan komoditas kopra yang menonjolkan
                    nilai kualitas dan kepercayaan.
                  </p>
                </div>
              </a>
              {/* Tombol tambahan */}
              <div className="px-10 pb-6">
                <a
                  href="https://dafco-landing.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-custom-yellow text-custom-red font-bold px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Kunjungi Landing Page
                </a>
              </div>
            </motion.div>
          </div>

          {/* Fifth & Sixth Card Container */}
          <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
            {/* Fifth Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative card rounded-3xl bg-custom-red w-full md:w-[40%] shadow-2xl hover:shadow-yellow-400/40 hover:-translate-y-2 transform transition-all duration-500"
            >
              <a
                href="https://www.figma.com/design/LaChXdJLSq2xT5FW12Ks0o/EveryNation?t=fO5yOCo6KmXV43WU-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="px-10 pt-10 pb-5 flex justify-center">
                  <img
                    src="/WebsiteNation.svg"
                    alt="WebsiteNation"
                    className="border-4 border-custom-yellow w-auto max-w-full max-h-full rounded-lg shadow-md"
                  />
                </figure>
                <div className="card-body text-custom-yellow px-10 pb-6 font-redhat">
                  <h2 className="card-title text-3xl font-bold pb-3">
                    UI/UX Project Every Nation
                  </h2>
                  <p className="text-base leading-relaxed text-justify text-white">
                    Project Every Nation ini adalah hasil kerja bareng teman
                    saya. Di project ini, saya ikut membantu di bagian desain
                    UI/UX agar tampilan lebih menarik dan sesuai konsep.
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Sixth Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative card rounded-3xl bg-custom-red w-full md:w-[40%] shadow-2xl hover:shadow-yellow-400/40 hover:-translate-y-2 transform transition-all duration-500"
            >
              <a
                href="https://www.figma.com/design/3biF9r5VrJa8DfKAk73VUv/Desain-Mobile?node-id=0-1&t=fO5yOCo6KmXV43WU-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="px-10 pt-10 pb-5 flex justify-center">
                  <img
                    src="/MobileProject.svg"
                    alt="MobileProject"
                    className="border-4 border-custom-yellow w-auto max-w-full max-h-full rounded-lg shadow-md"
                  />
                </figure>
                <div className="card-body text-custom-yellow px-10 pb-6 font-redhat">
                  <h2 className="card-title text-3xl font-bold pb-3">
                    Project Mobile Rumah Sakit
                  </h2>
                  <p className="text-base leading-relaxed text-justify text-white">
                    Project ini adalah hasil kerja saya. Di project ini, saya
                    ikut sebagai Android Developer, berkolaborasi dengan tim
                    backend untuk memastikan integrasi data berjalan baik dan
                    sesuai keinginan klien.
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Seventh & Eighth Card Container */}
          <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
            {/* Seventh Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative card rounded-3xl bg-custom-red w-full md:w-[40%] shadow-2xl hover:shadow-yellow-400/40 hover:-translate-y-2 transform transition-all duration-500"
            >
              <a
                href="https://www.figma.com/design/LzGpck6i9vFPhxjzF75HzZ/Desain-Website-Absensi?node-id=0-1&t=koDZHRS3VpynARpn-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="px-10 pt-10 pb-5 flex justify-center">
                  <img
                    src="/absensi.svg"
                    alt="WebsiteNation"
                    className="border-4 border-custom-yellow w-auto max-w-full max-h-full rounded-lg shadow-md"
                  />
                </figure>
                <div className="card-body text-custom-yellow px-10 pb-6 font-redhat">
                  <h2 className="card-title text-3xl font-bold pb-3">
                    Project Absensi Siswa
                  </h2>
                  <p className="text-base leading-relaxed text-justify text-white">
                    Project Every Nation ini adalah hasil kerja bareng teman
                    saya. Di project ini, saya ikut membantu di bagian desain
                    UI/UX agar tampilan lebih menarik dan sesuai konsep.
                  </p>
                </div>
              </a>
              <div className="px-10 pb-6">
                <a
                  href="https://absensi-siswa-pt.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-custom-yellow text-custom-red font-bold px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Kunjungi Absensi Page
                </a>
              </div>
            </motion.div>

            {/* Eighth Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative card rounded-3xl bg-custom-red w-full md:w-[40%] shadow-2xl hover:shadow-yellow-400/40 hover:-translate-y-2 transform transition-all duration-500"
            >
              <a
                href="https://www.figma.com/design/xUirvR69GN6Jk4QIhR8Uff/Tracking-Money-Design?node-id=0-1&t=4OhCKITnw5zgZ6zr-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="px-10 pt-10 pb-5 flex justify-center">
                  <img
                    src="/tracking.svg"
                    alt="MobileProject"
                    className="border-4 border-custom-yellow w-auto max-w-full max-h-full rounded-lg shadow-md"
                  />
                </figure>
                <div className="card-body text-custom-yellow px-10 font-redhat">
                  <h2 className="card-title text-3xl font-bold pb-3">
                    Project Tracking Money
                  </h2>
                  <p className="text-base leading-relaxed text-justify text-white">
                    Project ini adalah hasil kerja saya. Di project ini, saya
                    ikut sebagai Android Developer, berkolaborasi dengan tim
                    backend untuk memastikan integrasi data berjalan baik dan
                    sesuai keinginan klien.
                  </p>
                </div>
              </a>
              <div className="px-10 pb-6">
                <a
                  href="https://tracking-money-domic.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-custom-yellow text-custom-red font-bold px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Kunjungi Tracking Page
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Kode lainnya */}
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default BodyProject;
