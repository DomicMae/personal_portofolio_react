import "../input.css";

const BodySertifikatPage = ({ user }) => {
  return (
    <div className="text-black pb-20">
      <div id="sertifikat" className="pt-24 text-center">
        <div className="flex items-center justify-center space-x-2 pb-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
            Sertifikat
          </h1>
        </div>
      </div>

      {/* First Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-neutral-800 w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Coursera_1.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat Coursera_1"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-white px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Coursera</h2>
            <p>Dasar-Dasar Dukungan Teknis</p>
            <p>2022</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-neutral-800 w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Courser_2.jpg" // Make sure this image exists in the public folder
              alt="Sertifikat Courser_2"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-white px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Coursera</h2>
            <p>Seluk Beluk Jaringan Komputer</p>
            <p>2022</p>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-neutral-800 w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Coursera_3.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat Coursera_3"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-white px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Coursera</h2>
            <p>Sistem Operasi dan Anda: Menjadi Pengguna yang Berdaya</p>
            <p>2022</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-neutral-800 w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Coursera_4.jpg"
              alt="Sertifikat Coursera_4"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-white px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Coursera</h2>
            <p>Administrasi Sistem dan Layanan Infrastruktur TI</p>
            <p>2023</p>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-neutral-800 w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_AWS.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat_Dicoding_AWS"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-white px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Dasar AWS Cloud</p>
            <p>2023</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-neutral-800 w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_DataScience.jpg"
              alt="Sertifikat_Dicoding_DataScience"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-white px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Dasar Data Science</p>
            <p>2024</p>
          </div>
        </div>
      </div>

      {/* Fourth Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-neutral-800 w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_Javascript.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat_Dicoding_Javascript"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-white px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Dasar Pemrograman JavaScript</p>
            <p>2023</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-neutral-800 w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_ProyekManagement.jpg"
              alt="Sertifikat_Dicoding_ProyekManagement"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-white px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Dasar Manajemen Proyek</p>
            <p>2023</p>
          </div>
        </div>
      </div>

      {/* Fifth Card */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-neutral-800 w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat_Dicoding_SQL.jpg" // Make sure the preview image is in the public folder
              alt="Sertifikat_Dicoding_SQL"
              className="border border-gray-300 w-full rounded-md "
            />
          </figure>
          <div className="card-body text-white px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Dasar Structured Query Language (SQL)</p>
            <p>2024</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="card rounded-3xl bg-neutral-800 w-full md:w-1/2 lg:w-1/3 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat-baparekraf-developer-day-2023.jpg"
              alt="Sertifikat-baparekraf-developer-day-2023"
              className="border border-gray-300 w-full rounded-md"
            />
          </figure>
          <div className="card-body text-white px-10 pb-5 font-redhat">
            <h2 className="card-title text-3xl font-bold pb-3">Dicoding</h2>
            <p>Belajar Dasar Structured Query Language (SQL)</p>
            <p>2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySertifikatPage;
