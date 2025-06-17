"use client";

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      {/* Outer container stays centered and fills the screen */}
      <div
        className="
          grid grid-cols-2 gap-2
          max-w-[78%] w-80%
          max-h-[78%] h-80%
          overflow-y-auto
          p-3
          bg-transparent
          rounded-xl
        "
        style={{
          // Optional: set a maxHeight or height if you want to control the scroll area
          // maxHeight: "80vh",
        }}
      >
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
