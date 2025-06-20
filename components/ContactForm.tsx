'use client'

import React, { useRef } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID as string, // replace with your EmailJS service ID
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string, // replace with your EmailJS template ID
      form.current,
      process.env.NEXT_PUBLIC_USER_ID as string // replace with your EmailJS public key
    ).then((result) => {
      alert("Message sent!");
      form.current?.reset();
    }, (error) => {
      alert("Failed to send message: " + error.text);
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2 className="text-4xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          required
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Your message"
          name="message"
          required
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button type="submit" className="px-6 mb-8 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
