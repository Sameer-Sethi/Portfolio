"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const words = [
  "Web Development",
  "Artificial Intelligence",
  "Machine Learning",
];

function TypewriterText({
  className = "",
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1200,
}: {
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [text, isDeleting, wordIdx]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink">|</span>
      <style jsx>{`
        .animate-blink {
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(main-bg.webp)"}}>
        
        <div className='pl-20 md:pl-30 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
          <h1 className='text-[48px] text-white font-semibold'>
            Innovating at the Crossroads of{" "}
            <TypewriterText className='text-transparent bg-clip-text bg-gradient-to-r font-bold from-purple-500 to-cyan-500' />
          </h1>
          <p className='text-gray-200 hidden md:block'>
            Hi! I&apos;m Sameer, a developer with expertise in AI, machine learning, and web development, passionate about building intelligent and impactful digital solutions.This is my portfolio website where I showcase my skills, projects, and interests.
          </p>
          <div className='flex-col  md:flex-row hidden md:flex gap-5'>
            <Link href="/my-skills" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg relative text-white max-w-[200px]'>
              My Tech-skills
            </Link>
            <Link href="/my-projects" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg relative text-white max-w-[200px]'>
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover: opacity-2'/>           
              My Projects
            </Link>
            <Link href="/contact-me" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg relative text-white max-w-[200px]'>
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover: opacity-2'/>           
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <div className='absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5'>
        <Link href="/my-skills" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
          Learn More
        </Link>
        <Link href="/my-projects" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
          My Projects
        </Link>
        <Link href="/contact-me" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>       
          Contact Me
        </Link>
      </div>
      <div className='absolute bottom-0 right-0 z-[10]'>
        <Image
          src="/horse.png"
          alt="Horse"
          height={280}
          width={280}
          className="absolute right-35 top-20"
        />
        <Image src="/cliff.webp" alt="cliff" width={380} height={480} />
      </div>
      <div className='absolute bottom-0 z-[5] w-full h-auto'>
        <Image
          src="/trees.webp"
          alt="trees"
          width={1800}
          height={1800}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-10 left-0 z-[10]"
      />
    </main>
  );
}
