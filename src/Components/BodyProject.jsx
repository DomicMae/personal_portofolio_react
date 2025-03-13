import { ArrowDown } from "lucide-react";
import "../input.css";

const BodyProject = () => {
  return (
    <div className="text-black pb-20">
      <div id="project" className="pt-24 text-center"></div>
      <div className="flex items-center justify-center space-x-2 pb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-orange">
          Project
        </h1>
      </div>

      <div className="flex items-center justify-center space-x-2 pb-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-2xl text-custom-white">
          Check in here
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 pt-12">
        {/* ArrowDown berada di atas gambar dan teks */}
        <ArrowDown size={32} className="animate-bounce text-custom-orange" />

        <a
          href="https://github.com/DomicMae"
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="github.png"
              alt="GitHub"
              className="rounded-md w-82 h-82"
            />
            <p className="font-medium text-custom-orange text-xl text-center pt-6">
              GitHub
            </p>
          </div>
        </a>
      </div>

      <div className="text-black">
        <div id="project" className="pt-24 text-center">
          <div className="flex items-center justify-center space-x-2 pb-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-orange">
              Another Project
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-2 pb-2">
            <h1 className="text-2xl font-bold tracking-tight sm:text-2xl text-custom-white">
              Check my another project in below
            </h1>
          </div>
        </div>

        {/* First Card */}
        <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
          {/* First Image Card */}
          <div className="card rounded-3xl bg-custom-red w-full md:w-1/2 shadow-xl">
            <figure className="px-10 pt-10 pb-5 flex justify-center">
              <img
                src="/WebsiteEZCook.svg" // Make sure the preview image is in the public folder
                alt="WebsiteEZCook"
                className="border-4 border-custom-yellow w-auto h-auto rounded-md"
              />
            </figure>
            <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
              <h2 className="card-title text-3xl font-bold pb-3">
                UI/UX Project EZ Cook
              </h2>
              <p>
                EZ Cook adalah proyek dari techno entrepreneurship. Proyek ini
                bertujuan menyediakan makanan sehat untuk orang sibuk yang
                kurang memperhatikan kandungan gizi makanannya. Saya terlibat
                dalam pengembangan konsep hingga pengemasan ide agar produk ini
                relevan dan menarik bagi target pasar.
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
          {/* Second Image Card */}
          <div className="card rounded-3xl bg-custom-red w-full md:w-1/2 shadow-xl">
            <figure className="px-10 pt-10 pb-5 flex justify-center">
              <img
                src="/WebsitePujasera.svg" // Make sure the preview image is in the public folder
                alt="WebsitePujasera"
                className="border-4 border-custom-yellow w-auto h-auto rounded-md"
              />
            </figure>
            <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
              <h2 className="card-title text-3xl font-bold pb-3">
                Project Pujasera
              </h2>
              <p>
                Project Pujasera ini adalah hasil kerja bareng kelompok saya. Di
                project ini, saya ikut sebagai Back-end. Dimana selama
                prosesnya, saya berdiskusi bareng teman untuk memastikan agar
                sesuai dengan keinginan klien.
              </p>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
          {/* Third Image Card */}
          <div className="card rounded-3xl bg-custom-red w-full md:w-1/2 shadow-xl">
            <figure className="px-10 pt-10 pb-5 flex justify-center">
              <img
                src="/WebsiteKomplain.svg" // Make sure the preview image is in the public folder
                alt="WebsiteKomplain"
                className="border-4 border-custom-yellow w-auto h-auto rounded-md"
              />
            </figure>
            <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
              <h2 className="card-title text-3xl font-bold pb-3">
                Project Komplain Rumah Sakit
              </h2>
              <p>
                Website ini dirancang agar mudah digunakan, sehingga customer
                bisa menyampaikan komplain dengan cepat dan memantau progresnya
                secara real-time. Website komplain rumah sakit ini dibuat untuk
                dua jenis pengguna: customer dan administrator. Customer dapat
                menyampaikan komplain, memantau statusnya, dan melihat laporan
                setelah komplain selesai ditangani oleh rumah sakit.
                Administrator dapat melihat beberapa komplain dari customer dan
                melakukan respon terhadap komplain yang diberikan oleh customer.
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
          {/* Fourth Image Card */}
          <div className="card rounded-3xl bg-custom-red w-full md:w-1/2 shadow-xl">
            <figure className="px-10 pt-10 pb-5 flex justify-center">
              <img
                src="/CompanyProfileDafco.svg" // Make sure the preview image is in the public folder
                alt="CompanyProfileDafco"
                className="border-4 border-custom-yellow w-auto h-auto rounded-md"
              />
            </figure>
            <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
              <h2 className="card-title text-3xl font-bold pb-3">
                Landing Page Dafco Resource
              </h2>
              <p>
                Landing page untuk Company Profile Dafco Resource. Dafco
                Resource adalah perusahaan yang bergerak di bidang komoditas
                kopra. Landing page ini dibuat untuk memperkenalkan Dafco
                Resource secara profesional kepada klien dan mitra bisnis.
                Landing page ini juga menyoroti nilai utama Dafco Resource,
                yaitu kualitas dan kepercayaan.
              </p>
            </div>
          </div>
        </div>

        {/* Fifth Card */}
        <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
          {/* Fifth Image Card */}
          <div className="card rounded-3xl bg-custom-red w-full md:w-1/2 shadow-xl">
            <figure className="px-10 pt-10 pb-5 flex justify-center">
              <img
                src="/WebsiteNation.svg" // Make sure the preview image is in the public folder
                alt="WebsiteNation"
                className="border-4 border-custom-yellow w-auto h-auto rounded-md"
              />
            </figure>
            <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
              <h2 className="card-title text-3xl font-bold pb-3">
                UI/UX Project Every Nation
              </h2>
              <p>
                Project Every Nation ini adalah hasil kerja bareng teman saya.
                Di project ini, saya ikut membantu di bagian desain UI/UX agar
                tampilan dapat lebih menarik dan enak dilihat oleh orang-orang.
                Selama prosesnya, saya berdiskusi bareng teman untuk memastikan
                desainnya sesuai dengan konsep yang diinginkan.
              </p>
            </div>
          </div>
        </div>

        {/* Sixth Card */}
        <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
          {/* Sixth Image Card */}
          <div className="card rounded-3xl bg-custom-red w-full md:w-1/2 shadow-xl">
            <figure className="px-10 pt-10 pb-5 flex justify-center">
              <img
                src="/MobileProject.svg" // Make sure the preview image is in the public folder
                alt="MobileProject"
                className="border-4 border-custom-yellow w-auto h-auto rounded-md"
              />
            </figure>
            <div className="card-body text-custom-yellow px-10 pb-5 font-redhat">
              <h2 className="card-title text-3xl font-bold pb-3">
                Project Mobile Rumah Sakit
              </h2>
              <p>
                Project ini adalah hasil kerja saya. Di project ini, saya ikut
                sebagai Android Apps. Dimana selama prosesnya, saya berdiskusi
                bareng backend untuk memastikan agar data atau error bisa
                dihandle sesuai dengan keinginan klien.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Kode lainnya */}
    </div>
  );
};

export default BodyProject;
