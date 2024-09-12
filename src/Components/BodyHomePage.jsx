import "../input.css";

const BodyHomePage = ({ user }) => {
  return (
    <div className="text-black pb-20">
      {" "}
      {/* Semua teks di dalam div ini akan berwarna hitam */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-orange">
          Hello!!
        </h1>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
          I’m Ardon Yunors Tallan,
        </h1>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-orange">
          Fresh Graduated Programmer
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 p-10">
        <div className="col-span-1 flex">
          <div className="grid grid-rows-1">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl text-white font-redhat font-bold italic">
                " "
              </h1>{" "}
              {/* Kalimat ("") */}
              <p className="text-white text-xl text-center font-light">
                Kuatkan dan teguhkanlah hatimu, janganlah takut dan gemetar
                karena mereka, karena Tuhan, Allahmu, Dialah yang berjalan
                menyertai engkau; Ia tidak akan membiarkan engkau dan tidak akan
                meninggalkan engkau.
              </p>
              <h1 className="text-custom-orange text-xl font-bold pt-4">
                Ulangan 31:6
              </h1>
              <h1 className="text-4xl text-white font-redhat pt-4 font-bold italic">
                " "
              </h1>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-center">
          <img
            src="foto.png"
            alt="Description"
            className="rounded-full w-64 h-64"
          />
        </div>
        <div className="col-span-1">{/* Kolom ketiga kosong */}</div>
      </div>
    </div>
  );
};

export default BodyHomePage;
