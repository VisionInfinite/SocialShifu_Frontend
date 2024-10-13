"use client";

import { useEffect, useState } from "react";
import Particles from "@/components/ui/particles";
import { AnimatedSubscribeButtonDemo } from "./AnimatedSubscribeButtonDemo";

export function Hero() {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff"); 
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-black px-4 py-16 md:py-20 lg:py-24 lg:mt-16 mt-16">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/80 bg-clip-text text-center text-3xl font-semibold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mb-4 md:mb-6 py-2">
        Social Shifu is the new way <br className="hidden sm:inline" /> to generate AI videos.
      </span>
      <h2 className="text-gray-400 max-w-xs sm:max-w-sm md:max-w-md text-sm sm:text-base text-center mb-8 md:mb-10">
        SocialSifu Does all the video automation you need, from generating to
        posting. Everything by us, just relax.
      </h2>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="relative flex flex-col w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl gap-3 items-center px-3 sm:px-4 py-3 text-white bg-[#1a1a1a] font-semibold rounded-xl">
        <input
          className="focus:outline-none py-2 px-3 w-full text-sm rounded-md text-white bg-[#2a2a2a]"
          type="email"
          placeholder="Enter Your Email"
        />
        <div className=" mt-2 mx-auto">
          <AnimatedSubscribeButtonDemo />
        </div>
      </div>
    </div>
  );
}
