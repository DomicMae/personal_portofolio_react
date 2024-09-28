import "../input.css";

const BodyHomePage = ({ user }) => {
  return (
    <div className="text-black pb-20">
      {" "}
      <div className="grid grid-cols-3 gap-4 p-16 ">
        <div className="col-span-2 flex-col p-8">
          {/* <div className="flex flex-col pl-5"> */}
          {/* Semua teks di dalam div ini akan berwarna hitam */}
          <h1 className="text-4xl font-bold sm:text-5xl text-custom-orange pb-8">
            Hello!!
          </h1>
          <h1 className="text-4xl font-bold sm:text-5xl text-white">
            I’m Ardon Yunors Tallan,
          </h1>
          <h1 className="text-4xl font-bold sm:text-5xl text-custom-orange pb-8">
            Fresh Graduated Programmer
          </h1>

          {/* Kalimat ("") */}
          <p className="text-white text-xl font-light">
            Kuatkan dan teguhkanlah hatimu, janganlah takut dan gemetar karena
            mereka, karena Tuhan, Allahmu, Dialah yang berjalan menyertai
            engkau; Ia tidak akan membiarkan engkau dan tidak akan meninggalkan
            engkau.
          </p>
          {/* </div> */}
        </div>

        <div className="col-span-1 flex justify-center">
          <img
            src="foto.png"
            alt="Description"
            className="rounded-full w-108 h-108"
          />
        </div>
      </div>
    </div>
  );
};

export default BodyHomePage;
