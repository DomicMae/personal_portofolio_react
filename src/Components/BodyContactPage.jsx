import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../input.css";

const BodyContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data to be sent via EmailJS
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_domic", // Replace with your actual EmailJS service ID
        "template_gdf9t1j", // Replace with your actual EmailJS template ID
        emailParams,
        "f-POm7UiLaWYdhXUu" // Replace with your actual EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="text-black pb-20">
      <div id="contact" className="pt-24 text-center"></div>
      <div className="flex items-center justify-center space-x-2">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
          Contact
        </h1>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-orange">
          Me!!
        </h1>
      </div>
      <form
        className="space-y-8 max-w-sm mx-auto px-4 py-8"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-base font-normal leading-6 text-white"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-base font-normal leading-6 text-white"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-base font-normal leading-6 text-white"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tuliskan email/no wa kalian diatas"
                value={formData.message}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-base font-medium text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BodyContactPage;
