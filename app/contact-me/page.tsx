import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        style={{ backgroundImage: "url(/contactbg.avif) " }}
        className="h-[60%] w-[80%] relative bg-cover  flex bg-center  rounded-xl border-4 border-white"
      >
        <div className="absolute left-20 bottom-5 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
    
  );
};

export default Page;
