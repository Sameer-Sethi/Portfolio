'use client'
import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'

const handleImageClick = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Navbar = () => {
  return (
    <div className='fixed top-0 z-40 w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
      <Image
        src="/logoS.png"
        alt="logo"
        height={80}
        width={80}
        className="absolute left-1 top-1"
      />
      <div className='flex flex-row px-265 mb-2 gap-5'>
        {Socials.map((social) => (
          <Image
          key={social.name}
          src={social.src}
          alt={social.name}
          width={30}
          height={30}
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => handleImageClick(social.link)}
          style={{ display: 'inline-block' }}
          />
          
        ))}
      </div>
    </div>
  )
}

export default Navbar
