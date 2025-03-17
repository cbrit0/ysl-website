import { forwardRef, useState } from "react"
import { yslHorizontalWhiteImg, yslHorizontalBlackImg } from "../utils"
import { navList } from '../constants'

const Navbar = forwardRef(( { isAtTop }, ref ) => {
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleMouseEnter = () => {
    if (isAtTop) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (isAtTop) {
      setIsHovered(false)
    }
  }

  return (
    <header
      ref={ref}
      id="header"
      className={`absolute top-0 left-0 w-full pt-5 px-5 z-20 ${
        isHovered ? 'bg-white' : 'bg-transparent'
      } transition-colors duration-300 ease-in`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex-center mb-6">
        <img 
          src={isHovered ? yslHorizontalBlackImg : yslHorizontalWhiteImg} 
          alt="YSL"
          className="cursor-pointer"
        />
      </div>

      <nav id="navbar" className="flex-center gap-2">
        {navList.map((nav, index) => (
          <div
            key={index}
            className={`p-4 cursor-pointer border-b-3 ${isHovered && hoveredIndex === index ? 'border-black' : 'border-transparent'}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p className={`flex-center text-[11px] font-bold ${isHovered ? 'text-black' : 'text-white'}`}>
              {nav}
            </p>
          </div>
        ))}
      </nav>
    </header>
  )
})

export default Navbar