import React from "react";
import { FiPhone } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/main-bg.webp)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        style={{ backgroundImage: "url(/bg1.avif)" }}
        className="h-auto min-h-[320px] w-[90vw] max-w-5xl relative bg-cover flex bg-center rounded-xl border-4 border-white p-6 md:p-10"
      >
        <div className="flex flex-col md:flex-row w-full h-full justify-between items-start gap-8">
          {/* Left: Headline */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#14212A] leading-tight mb-4">
              Let's make something<br className="hidden sm:block" />
              amazing together.
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#14212A] mt-6">
              Start by{" "}
              <span className="text-[#ff0099] underline underline-offset-4">
                saying hi
              </span>
            </h2>
          </div>
          {/* Right: Contact Info */}
          <div className=" flex-1 max-w-xs w-full">
            <div className="text-lg md:text-3xl font-bold   mb-1 text-[#14212A]">
              Contact Us:
            </div>
            <div className="text-base text-[#14212A] mb-4">Delhi, India</div>
            <div className="flex items-center gap-2 mb-3">
              <FiPhone className="text-blue-500" size={22} />
              <a
                href="tel:+91-9560081391"
                className="text-blue-500 hover:underline font-bold"
              >
                Call
              </a>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <SiWhatsapp className="text-green-500" size={22} />
              <a
                href="https://wa.me/919560081391"
                className="text-green-500 hover:underline font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <MdEmail className="text-red-500" size={22} />
              <a
                href="mailto:sameer.sethi.ug22@nsut.ac.in"
                className="text-red-500 hover:underline font-bold"
              >
                Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
