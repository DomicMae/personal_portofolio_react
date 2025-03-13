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
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-white">
          Contact Me!!
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
              className="block text-base font-bold leading-6 text-custom-blue"
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
                className="block w-full border bg-custom-white border-gray-900 rounded-md shadow-sm px-3 py-2 text-gray-900 placeholder:text-custom-blue focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-base font-bold leading-6 text-custom-blue"
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
                className="block w-full border bg-custom-white border-gray-900 rounded-md shadow-sm px-3 py-2 text-gray-900 placeholder:text-custom-blue focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-base font-bold leading-6 text-custom-blue"
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
                className="block w-full border bg-custom-white border-gray-900 rounded-md shadow-sm px-3 py-2 text-gray-900 placeholder:text-custom-blue focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="font-bold rounded-md border border-transparent bg-custom-red px-3 py-2 text-base text-custom-blue shadow-sm ring-1 ring-custom-red hover:bg-custom-red focus:ring-2 focus:ring-custom-red"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BodyContactPage;
