import React, { useState } from "react";

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <button
        className={`relative px-[50px] py-[19px] font-normal uppercase border-[1px] ${
          isHovered ? "border-[#a749ff]" : "border-[#333]"
        } overflow-hidden transition-colors duration-500 text-gray-800 hover:text-white`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10 text-[16px]">SHOP NOW</span>

        <span
          className={`absolute top-0 left-0 w-full h-full bg-[#a749ff] transition-transform duration-500 ${
            isHovered ? "animate-fill-left" : "animate-exit-right"
          }`}
        ></span>
      </button>
  );
};

export default Button;
