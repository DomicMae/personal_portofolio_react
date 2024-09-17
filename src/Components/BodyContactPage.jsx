import "../input.css";

const BodyContactPage = ({ user }) => {
  return (
    <div className="text-black">
      <div id="contact" className="pt-24 text-center"></div>
      <div className="flex items-center justify-center space-x-2 pb-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
          Contact
        </h1>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-orange">
          Me!!
        </h1>
      </div>
      <div className="items-center justify-center grid grid-cols-3 pb-8">
        <div className="col-span-1 flex flex-col items-center justify-center ">
          <img src="whatsapp.webp" alt="" className="rounded-md w-20 h-26" />
          <p className="font-medium text-custom-orange text-xl text-center">
            WhatsApp
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="instagram.png" alt="" className="rounded-md w-28 h-34" />
          <p className="font-medium text-custom-orange text-xl text-center">
            Instagram
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="line.png" alt="" className="rounded-md w-24 h-30" />
          <p className="font-medium text-custom-orange text-xl text-center">
            Line
          </p>
        </div>
      </div>

      {/* Kode lainnya */}
    </div>
  );
};

export default BodyContactPage;
