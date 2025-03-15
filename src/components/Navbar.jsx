import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { yslHorizontalWhiteImg, yslHorizontalBlackImg } from "../utils"
import { navList } from '../constants'

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const headerRef = useRef(null)
  const lastScrollY = useRef(0)

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY === 0) {
        setIsAtTop(true)
        setIsSticky(false)
      } else {
        setIsAtTop(false)

        if (currentScrollY > lastScrollY.current) {
          setIsSticky(false)
        } else if (currentScrollY < lastScrollY.current) {
          setIsSticky(true)
        }
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const headerElement = headerRef.current

    if (isSticky && !isAtTop) {
      gsap.fromTo(
        headerElement,
        { top: '-100%' },
        {
          top: 0,
          position: 'fixed',
          duration: 0.3,
          ease: 'power2.out'
        }
      )
    } else {
      gsap.to(headerElement, {
        position: 'absolute',
        top: 0,
        duration: 0.2,
        ease: 'power2.out'
      })
    }
  }, [isSticky, isAtTop])

  return (
    <header 
      ref={headerRef}
      className={`absolute top-0 left-0 w-full py-5 sm:px-10 px-5 z-20 group ${
        isSticky || isHovered ? 'bg-white' : 'bg-transparent'
      } transition-colors duration-300 ease-in`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isAtTop && (
        <div className="flex justify-center">
          <img 
            src={isHovered ? yslHorizontalBlackImg : yslHorizontalWhiteImg} 
            alt="YSL"
            className="cursor-pointer mb-4"
          />
        </div>
      )}

      <nav className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 max-sm:gap-2">
          {navList.map((nav) => (
            <div
              key={nav}
              className={`px-3 text-sm cursor-pointer ${
                isSticky || isHovered ? 'text-black' : 'text-white'
              } hover:text-gray-400`}
            >
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar