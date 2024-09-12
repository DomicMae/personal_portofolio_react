import "../input.css";

const BodyAboutMePage = ({ user }) => {
  return (
    <div className="text-black pb-20">
      {" "}
      {/* Semua teks di dalam div ini akan berwarna hitam */}
      <div className="flex items-center justify-center space-x-4">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl text-white">
          About
        </h1>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl text-custom-orange">
          Me
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4 p-10">
        <div className="col-span-1">{/* Kolom pertama kosong */}</div>
        <div className="col-span-2 flex flex-col items-center justify-center">
          <p className="font-normal text-custom-orange text-xl text-center">
            Saya merupakan lulusan S1 Sistem Informasi Bisnis Universitas
            Kristen Petra. Seorang yang teliti dan terampil dalam membuat
            website. Memiliki kemampuan komunikasi lisan dan verbal yang baik,
            memiliki kemampuan problem solving dalam menghadapi masalah serta
            dapat menyumbang berbagai inovasi yang menarik.
          </p>
          <hr className="w-full border-t-2 border-white mt-6" />
        </div>
        <div className="col-span-1">{/* Kolom ketiga kosong */}</div>
      </div>
      <div className="flex items-center justify-center relative">
        <h1 className="absolute bottom-5 mb-0 text-5xl font-bold">
          <span className="text-white">ARDON</span>
          <span className="text-custom-orange"> YUNORS </span>
          <span className="text-white">TALLAN</span>
        </h1>
        <img src="foto-full.png" alt="" className="rounded-md w-82 h-82" />
      </div>
    </div>
  );
};

export default BodyAboutMePage;
