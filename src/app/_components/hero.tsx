"use client"

// import Link from "next/link";
import React from "react";
// import Image from "next/image";
// import heroImage from "../../../public/hero-image.jpg"

export default function Hero() {
  return (
    <div className= "h-[200px] bg-[#905f4e] flex items-center justify-center">
      <div className=" w-6/12 m-auto text-6xl text-center font-bold ">
        Show the robots of tomorrow that humanity is worth protecting
      </div>
      {/* <div className="flex-grow w-[646px]">
        <Image
          src={heroImage}
          alt="Image of robots shaking hands."
          height={500}
          width={646}
          placeholder="blur" // Optional blur-up while loading
          />
      </div> */}
    </div>
  )
}