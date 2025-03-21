import { yslHorizontalBlackImg } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

const MiniStickyNavbar = ({ isSticky, isAtTop, isMenuOpen, toggleMenu }) => {
  useGSAP(() => {
    if (isSticky && !isAtTop) {
      gsap.fromTo(
        '#mini-sticky-navbar',
        { y: '-105%' },
        {
          y: 0,
          position: 'fixed',
          duration: 0.2,
          ease: 'power2.out'
        }
      )
    } else {
      gsap.fromTo(
        '#mini-sticky-navbar',
        { top: 0 },
        {
          y: '-105%',
          position: 'fixed',
          duration: 0.2,
          ease: 'power2.out'
        }
      )
    }
  }, [isSticky, isAtTop])

  return (
    <header
      id="mini-sticky-navbar"
      className="mini-sticky-navbar"
    >
      <div className="flex items-center justify-between">
        <img 
          src={yslHorizontalBlackImg} 
          alt="YSL"
          className="w-26"
        />

        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="mr-8 text-black"
          />

          <FontAwesomeIcon 
            icon={isMenuOpen ? faXmark : faBars} 
            className="text-black"
            onClick={toggleMenu} 
          />
        </div>
      </div>
    </header>
  )
}

export default MiniStickyNavbar