import "../input.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  // Kategori Frontend
  { name: "JavaScript", icon: "js.svg", category: "frontend", level: "Expert" },
  {
    name: "TypeScript",
    icon: "ts.svg",
    category: "frontend",
    level: "Advanced",
  },
  { name: "React", icon: "react.svg", category: "frontend", level: "Expert" },
  {
    name: "React Native",
    icon: "react.svg",
    category: "mobile",
    level: "Expert",
  },
  { name: "HTML", icon: "html.svg", category: "frontend", level: "Expert" },
  { name: "CSS", icon: "css.svg", category: "frontend", level: "Expert" },
  {
    name: "ViteJS",
    icon: "vitejs.svg",
    category: "frontend",
    level: "Intermediate",
  },
  {
    name: "Expo",
    icon: "expo.svg",
    category: "mobile",
    level: "Intermediate",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap.svg",
    category: "frontend",
    level: "Advanced",
  },
  {
    name: "Figma",
    icon: "figma.svg",
    category: "tool",
    level: "Intermediate",
  },

  // Kategori Backend
  { name: "PHP", icon: "php.svg", category: "backend", level: "Advanced" },
  {
    name: "Laravel",
    icon: "laravel.svg",
    category: "backend",
    level: "Advanced",
  },
  {
    name: "Go (Golang)",
    icon: "golang.svg",
    category: "backend",
    level: "Intermediate",
  },
  {
    name: "Echo",
    icon: "echo.svg",
    category: "backend",
    level: "Intermediate",
  },
  { name: "SQL", icon: "sql.svg", category: "database", level: "Advanced" },
  {
    name: "MongoDB",
    icon: "mongodb.svg",
    category: "database",
    level: "Intermediate",
  },
  {
    name: "Nuxt JS",
    icon: "nuxt.svg",
    category: "backend",
    level: "Intermediate",
  },
  {
    name: "Svelte Js",
    icon: "svelte.svg",
    category: "frontend",
    level: "Intermediate",
  },
  {
    name: "Midtrans",
    icon: "midtrans.svg",
    category: "tool",
    level: "Intermediate",
  },
  {
    name: "Postgresql",
    icon: "postgresql.svg",
    category: "database",
    level: "Intermediate",
  },
  {
    name: "Power BI",
    icon: "powerbi.svg",
    category: "data",
    level: "Intermediate",
  },
  {
    name: "Metabase",
    icon: "metabase.svg",
    category: "data",
    level: "Intermediate",
  },
  {
    name: "Next JS",
    icon: "nextjs.svg",
    category: "backend",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind.svg",
    category: "frontend",
    level: "Intermediate",
  },
  {
    name: "Shadcn UI",
    icon: "shadcn.svg",
    category: "frontend",
    level: "Intermediate",
  },
  {
    name: "Vue JS",
    icon: "vuejs.svg",
    category: "frontend",
    level: "Intermediate",
  },
  {
    name: "Postman",
    icon: "postman.svg",
    category: "tool",
    level: "Intermediate",
  },
  {
    name: "Git",
    icon: "git.svg",
    category: "tool",
    level: "Intermediate",
  },
];

const levelStyles = {
  Expert: "bg-emerald-500/20 text-emerald-400",
  Advanced: "bg-blue-500/20 text-blue-400",
  Intermediate: "bg-yellow-500/20 text-yellow-400",
  Beginner: "bg-gray-500/20 text-gray-400",
};

const SkillLegend = () => (
  <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-12 text-sm text-neutral-400">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Expert
    </div>
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-blue-500"></span> Advanced
    </div>
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-yellow-500"></span> Intermediate
    </div>
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-gray-500"></span> Beginner
    </div>
  </div>
);

const SkillCard = ({ name, icon, level }) => {
  // Ambil style badge, default ke 'Beginner' jika tidak ditemukan
  const badgeStyle = levelStyles[level] || levelStyles.Beginner;

  // PASTIKAN Anda mengubah '/icons/' ke path folder icon Anda
  const iconPath = `/${icon}`;

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-neutral-800/50 border border-neutral-700/60 shadow-lg aspect-square gap-3 transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700">
      <div className="w-12 h-12 md:w-16 md:h-16">
        <img
          src={iconPath}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-white font-medium text-sm md:text-base text-center">
        {name}
      </span>
      <span
        className={`px-3 py-0.5 rounded-full text-xs font-semibold ${badgeStyle}`}
      >
        {level}
      </span>
    </div>
  );
};

const BodyAboutMePage = ({ user }) => {
  const [language, setLanguage] = useState("id"); // default Bahasa Indonesia

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const mobileSkills = skills.filter((s) => s.category === "mobile");
  const databaseSkills = skills.filter((s) => s.category === "database");
  const toolsSkills = skills.filter((s) => s.category === "tool");
  const dataSkills = skills.filter((s) => s.category === "data");

  return (
    <div className="text-black pb-12">
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
          <p className="pl-20 pr-20 font-jakarta text-custom-orange text-base md:text-xl text-center leading-relaxed mt-6 transition-all duration-700 ease-in-out animate-fade-in-up hover:scale-[1.02]">
            {language === "id" ? (
              <>
                Saya adalah lulusan baru dari Universitas Kristen Petra, jurusan
                Sistem Informasi Bisnis, dengan dasar akademik yang kuat di
                bidang pemrograman dan pengembangan perangkat lunak. Selama masa
                studi, saya menyelesaikan berbagai proyek praktis dan menguasai
                beberapa bahasa pemrograman. Saya juga memperoleh pengalaman
                nyata melalui magang sebagai Back-end Developer dan Android
                Developer, di mana saya berkontribusi dalam pengembangan sistem
                dalam lingkungan tim yang terstruktur. Saya memiliki semangat
                tinggi untuk terus berkembang secara profesional, dengan etos
                kerja yang kuat, kemauan untuk belajar, serta komitmen untuk
                memberikan hasil kerja berkualitas dalam setiap tugas yang
                diberikan.
              </>
            ) : (
              <>
                I am a recent graduate of Petra Christian University, majoring
                in Business Information Systems, with a strong academic
                foundation in programming and software development. During my
                studies, I completed several practical projects and developed
                skills in multiple programming languages. I also gained
                real-world experience through internships as a Back-end
                Developer and Android Developer, where I contributed to system
                development in a structured team environment. I am eager to
                continue growing professionally, bringing a strong work ethic,
                willingness to learn, and a commitment to delivering
                high-quality results in every task assigned.
              </>
            )}
          </p>
        </div>
      </div>

      <div className="p-20">
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

        <SkillLegend />

        {/* Grid utama untuk 2 kolom: Frontend & Backend */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 py-3">
          {/* Kolom Frontend */}
          <div className="p-6 md:p-8 bg-gray-950/10 backdrop-blur-md rounded-xl border border-neutral-800">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Frontend Development
            </h2>
            {/* Grid internal untuk skill-skill frontend */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
              {frontendSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Kolom Backend */}
          <div className="p-6 md:p-8 bg-gray-950/10 backdrop-blur-md rounded-xl border border-neutral-800">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Backend Development
            </h2>
            {/* Grid internal untuk skill-skill backend */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
              {backendSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Grid utama untuk 2 kolom: Mobile & Database */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 py-12">
          {/* Kolom Frontend */}
          <div className="p-6 md:p-8 bg-gray-950/10 backdrop-blur-md rounded-xl border border-neutral-800">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Mobile Apps Development
            </h2>
            {/* Grid internal untuk skill-skill frontend */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
              {mobileSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Kolom Backend */}
          <div className="p-6 md:p-8 bg-gray-950/10 backdrop-blur-md rounded-xl border border-neutral-800">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Database
            </h2>
            {/* Grid internal untuk skill-skill backend */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
              {databaseSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Grid utama untuk 2 kolom: Mobile & Database */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Kolom Frontend */}
          <div className="p-6 md:p-8 bg-gray-950/10 backdrop-blur-md rounded-xl border border-neutral-800">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Data Development
            </h2>
            {/* Grid internal untuk skill-skill frontend */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
              {dataSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Kolom Backend */}
          <div className="p-6 md:p-8 bg-gray-950/10 backdrop-blur-md rounded-xl border border-neutral-800">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Tools
            </h2>
            {/* Grid internal untuk skill-skill backend */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
              {toolsSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAboutMePage;
