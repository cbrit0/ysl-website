import { forwardRef, useState } from "react"
import { yslHorizontalWhiteImg, yslHorizontalBlackImg } from "../utils"
import { navList } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const Navbar = forwardRef(({ isAtTop }, ref) => {
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      ref={ref}
      id="header"
      className={`absolute top-0 left-0 w-full py-3.5 md:pt-5 md:pb-0 px-4 md:px-5 z-20 ${
        isHovered ? 'bg-white' : 'bg-transparent'
      } transition-colors duration-300 ease-in`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between md:justify-center md:mb-6">
        <img 
          src={isHovered ? yslHorizontalBlackImg : yslHorizontalWhiteImg} 
          alt="YSL"
          className="cursor-pointer w-28 md:w-auto"
        />

        <div className="md:hidden">
        <FontAwesomeIcon icon={faMagnifyingGlass} className={`mr-8 ${isHovered ? 'text-black' : 'text-white'}`} />

        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className={`${isHovered ? 'text-black' : 'text-white'}`} onClick={toggleMenu} />
        </div>
      </div>

      <nav id="navbar" className="hidden md:flex-center gap-2">
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