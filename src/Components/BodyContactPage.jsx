import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../input.css";
import { motion } from "framer-motion";

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
      to_name: "Bang Ardon",
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
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-white"
        >
          Contact Me!!
        </motion.h1>
      </div>

      {/* Social Cards Section */}
      <div className="flex justify-center mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              label: "Whatsapp",
              href: "https://wa.me/6288805787250",
              img: "/Whatsapp.svg",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/ardonyunors/",
              img: "/Linkedin.svg",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/ardonyunors",
              img: "/instagram.png",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ rotate: 1.5, scale: 1.05 }}
              loading="eager"
              className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center"
              >
                <motion.img
                  src={item.img}
                  alt={item.label}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-md object-contain"
                />
                <motion.p
                  whileHover={{ y: -2 }}
                  className="font-medium text-custom-orange text-xl text-center pt-4"
                >
                  {item.label}
                </motion.p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-white pt-14 mb:pt-10 pb-10 "
        >
          Another Contact
        </motion.h1>
      </div>

      <form
        className="space-y-8 w-full max-w-3xl mx-auto px-4 py-8"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-xl font-bold leading-6 text-custom-blue pb-3"
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
                className="block w-full border bg-custom-white border-gray-900 rounded-md shadow-sm px-3 py-4 text-gray-900 placeholder:text-custom-blue focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-xl  font-bold leading-6 text-custom-blue  pb-3"
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
                className="block w-full border bg-custom-white border-gray-900 rounded-md shadow-sm px-3 py-4 text-gray-900 placeholder:text-custom-blue focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-xl  font-bold leading-6 text-custom-blue pb-3"
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
                className="block w-full border bg-custom-white border-gray-900 rounded-md shadow-sm px-3 py-4 text-gray-900 placeholder:text-custom-blue focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <button
            type="submit"
            className=" text-xl font-bold rounded-md border w-1/3 border-transparent bg-custom-red px-3 py-2 text-custom-blue shadow-sm ring-1 ring-custom-red hover:bg-custom-red focus:ring-2 focus:ring-custom-red"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BodyContactPage;
