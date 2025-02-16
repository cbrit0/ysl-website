import { yslHorizontalWhiteImg, yslHorizontalBlackImg } from "../utils";
import { navList } from '../constants';
import { useState } from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header 
      className="absolute top-0 left-0 w-full py-5 sm:px-10 px-5 bg-transparent z-10 group hover:bg-white transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center">
        <img src={isHovered ? yslHorizontalBlackImg : yslHorizontalWhiteImg} alt="YSL" />
      </div>

      <nav className="flex justify-center mt-4">
        <div className="flex flex-wrap justify-center gap-4 max-sm:gap-2">
          {navList.map((nav) => (
            <div
              key={nav}
              className="px-3 text-sm cursor-pointer text-gray hover:text-gray-400 transition-colors duration-300 group-hover:text-black"
            >
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;