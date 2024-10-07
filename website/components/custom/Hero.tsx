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
    <div className="relative flex h-[50vh] mt-20 lg:mt-0 lg:h-[100vh] pt-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-black md:shadow-xl lg:m-0">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/80 bg-clip-text text-center text-4xl md:text-6xl lg:text-7xl font-semibold leading-none text-transparent max-w-7xl py-5">
        Social Shifu is the new way <br /> to generate AI videos.
      </span>
      <h2 className="text-gray-400 max-w-sm text-sm mx-auto text-center">
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
      <div className="relative flex flex-row gap-3 items-center px-2 mx-5 mb-5 lg:w-[50vw] mt-10 text-white bg-[#1a1a1a] font-semibold rounded-xl ">
        <input
          className="focus:outline-none py-4 px-8 w-full rounded-md text-white bg-[#1a1a1a]"
          type="email"
          placeholder="Enter Your Email"
        ></input>

        <AnimatedSubscribeButtonDemo />
      </div>
    </div>
  );
}
