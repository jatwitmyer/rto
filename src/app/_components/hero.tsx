"use client"

// import Link from "next/link";
import React from "react";
import Image from "next/image";
import heroImage from "../../../public/hero-image-expanded-2.jpg"

export default function Hero() {
  return (
    <div className= "h-[400px]"  style={{ 
      backgroundImage: `url('hero-image-expanded-2.jpg')`,
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      backgroundAttachment: 'local',
      }}>
      <div className=" flex items-center h-full w-6/12 text-6xl ml-[35px] text-white text-center  font-bold ">
        Show the robots of tomorrow that humanity is worth protecting
      </div>
      {/* <div className="">
        <Image
          src={heroImage}
          alt="Image of robots shaking hands."
          // height={400}
          // width={646}
          placeholder="blur" // Optional blur-up while loading
          />
      </div> */}
    </div>
  )
}