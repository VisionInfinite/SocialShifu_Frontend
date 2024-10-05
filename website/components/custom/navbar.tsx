import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <motion.nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-full px-6 py-3 my-3 flex items-center justify-between w-max lg:w-11/12 max-w-4xl z-50 border border-black">
        <div className="flex items-center gap-x-2 md:justify-start justify-center w-full md:w-auto">
          <div className="w-8 h-8 bg-white rounded-full">
            <img src="./logo.png" alt="" />
          </div>
          <span className="font-semibold text-center">Jay</span>
        </div>
        <div className="hidden lg:flex space-x-6">
          {["Work", "Benefits", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-black  transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
