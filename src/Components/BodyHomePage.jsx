import "../input.css";

const BodyHomePage = ({ user }) => {
  return (
    <div className="text-black">
      {" "}
      {/* Semua teks di dalam div ini akan berwarna hitam */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-custom-orange">
          Hello!!
        </h1>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
          I’m Ardon Yunors Tallan,
        </h1>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-custom-orange">
          Fresh Graduated Programmer
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 p-10">
        <div className="col-span-1 flex items-center">
          <div className="grid grid-rows-2">
            <div className="row-span-1 flex flex-col items-center justify-center">
              <h1 className="text-4xl text-white font-redhat">""</h1>{" "}
              {/* Kalimat ("") */}
              <p className="text-white text-xl text-center font-light">
                Kuatkan dan teguhkanlah hatimu, janganlah takut dan gemetar
                karena mereka, karena Tuhan, Allahmu, Dialah yang berjalan
                menyertai engkau; Ia tidak akan membiarkan engkau dan tidak akan
                meninggalkan engkau.
              </p>
            </div>
            <div className="row-span-1 flex flex-col items-center justify-center">
              <h1 className="text-custom-orange text-xl font-bold">
                Ulangan 31:6
              </h1>
              <h1 className="text-4xl text-white font-redhat py-4">""</h1>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex items-center justify-center">
          <img
            src="foto.png"
            alt="Description"
            className="rounded-full w-56 h-56"
          />
        </div>
        <div className="col-span-1">{/* Kolom ketiga kosong */}</div>
      </div>
    </div>
  );
};

export default BodyHomePage;
