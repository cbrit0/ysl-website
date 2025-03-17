import { useState } from "react"
import { yslHorizontalWhiteImg, yslHorizontalBlackImg } from "../utils"
import { navList } from '../constants'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const SlideableMenu = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`absolute top-0 left-0 w-full p-4 z-20 ${
        isHovered ? 'bg-white' : 'bg-transparent'
      } transition-colors duration-300 ease-in`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between">
        <img 
          src={isHovered ? yslHorizontalBlackImg : yslHorizontalWhiteImg} 
          alt="YSL"
          className="w-26"
        />

        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={`mr-8 ${isHovered ? 'text-black' : 'text-white'}`} />

          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className={`${isHovered ? 'text-black' : 'text-white'}`} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  )
}

export default SlideableMenu