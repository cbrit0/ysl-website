import { use, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { yslHorizontalWhiteImg, yslHorizontalBlackImg } from "../utils"
import { navList } from '../constants'
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [hoverdStickyIndex, setHoveredStickyIndex] = useState(null)
  const [isSticky, setIsSticky] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const lastScrollY = useRef(0)
  const headerRef = useRef(null)

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

      if (currentScrollY <= headerRef.current.offsetHeight) {
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

  useGSAP(() => {
    if (isSticky && !isAtTop) {
      gsap.fromTo(
        '#sticky-navbar',
        { y: '-99%' },
        {
          y: 0,
          position: 'fixed',
          duration: 0.2,
          ease: 'power2.out'
        }
      )
    } else {
      gsap.fromTo(
        '#sticky-navbar',
        { top: 0 },
        {
          y: '-99%',
          position: 'fixed',
          duration: 0.2,
          ease: 'power2.out'
        }
      )
    }
  }, [isSticky, isAtTop])

  return (
    <header
      ref={headerRef}
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
            className={`p-4 cursor-pointer ${hoveredIndex === index ? 'border-b-3' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p className={`text-[11px] font-bold text-sm ${isHovered ? 'text-black' : 'text-white'}`}>
              {nav}
            </p>
          </div>
        ))}
      </nav>

      <nav id="sticky-navbar" className="sticky-navbar">
        {navList.map((nav, index) => (
          <div
            key={index}
            className={`p-4 cursor-pointer ${hoverdStickyIndex === index ? 'border-b-3' : ''}`}
            onMouseEnter={() => setHoveredStickyIndex(index)}
            onMouseLeave={() => setHoveredStickyIndex(null)}
          >
            <p className="text-[11px] font-bold text-sm">
              {nav}
            </p>
          </div>
        ))}
      </nav>
    </header>
  )
}

export default Navbar