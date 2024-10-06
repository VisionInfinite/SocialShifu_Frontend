import React from "react";
import { ShinyButtonDemo } from "./ShinyButton";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-transparent text-white rounded-lg px-6 py-3 my-3 flex items-center justify-between w-max lg:w-11/12 max-w-4xl z-50 border border-gray-50/10 backdrop-blur-sm">
        <div className="flex items-center gap-x-2 md:justify-start justify-center w-full md:w-auto">
          <div className="w-10 h-10 rounded-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTCnyzrTR1-OdNvzoc2B1ixRNx5809Bnk2trXveb0nV7-rMPBuHO-b8X5wJaW_RJe3D4&usqp=CAU" alt=""  className="rounded-full" />
          </div>
          <span className="font-semibold text-center">Social Shifu</span>
        </div>
        <div className="hidden lg:flex space-x-6 ">
          {/* {["Work", "Benefits"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white  transition-colors py-1"
            >
              {item}
            </a>
          ))} */}
          <ShinyButtonDemo />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
