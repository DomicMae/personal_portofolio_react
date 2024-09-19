import "../input.css";
import React, { useState } from "react";

const BodySertifikatPage = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [isPDFVisible, setIsPDFVisible] = useState(false); // State to control PDF visibility

  // Fungsi untuk membuka modal dan mengatur skill yang dipilih
  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill("");
  };

  // Function to toggle PDF visibility
  const togglePDF = () => {
    setIsPDFVisible(!isPDFVisible);
  };

  return (
    <div className="text-black">
      <div id="skills" className="pt-24 text-center">
        <div className="flex items-center justify-center space-x-2 pb-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
            Sertifikat
          </h1>
        </div>
      </div>

      {/* First Card */}
      <div className="flex justify-center gap-10 px-20 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-neutral-800 w-1/2 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Coursera_1.jpg" // Make sure the preview image is in the public folder
              alt="PDF Preview"
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
        <div className="card rounded-3xl bg-neutral-800 w-1/2 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Courser_2.jpg" // Make sure this image exists in the public folder
              alt="Certificate Image"
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
      <div className="flex justify-center gap-10 px-20 mt-6">
        {/* First Image Card */}
        <div className="card rounded-3xl bg-neutral-800 w-1/2 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Coursera_1.jpg" // Make sure the preview image is in the public folder
              alt="PDF Preview"
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
        <div className="card rounded-3xl bg-neutral-800 w-1/2 shadow-xl">
          <figure className="px-10 pt-10 pb-5">
            <img
              src="/Sertifikat Courser_2.jpg" // Make sure this image exists in the public folder
              alt="Certificate Image"
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
    </div>
  );
};

export default BodySertifikatPage;
