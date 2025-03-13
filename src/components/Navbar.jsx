import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { yslHorizontalWhiteImg, yslHorizontalBlackImg } from "../utils"
import { navList } from '../constants'

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const headerRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY === 0) {
        setIsSticky(false)
      } else if (currentScrollY > lastScrollY.current) {
        setIsSticky(false)
      } else if (currentScrollY < lastScrollY.current) {
        setIsSticky(true)
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

    if (isSticky && window.scrollY !== 0) {
      gsap.to(headerElement, {
        position: 'fixed',
        top: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
      headerElement.style.transition = 'none'
      headerElement.style.backgroundColor = 'white'
    } else {
      gsap.to(headerElement, {
        position: 'absolute',
        top: 0,
        duration: 0.3,
        ease: 'power2.out'
      })

      if (window.scrollY === 0) {
        headerElement.style.transition = 'background-color 0.3s ease'
        headerElement.style.backgroundColor = isHovered ? 'white' : 'transparent'
      } else {
        headerElement.style.transition = 'none'
        headerElement.style.backgroundColor = isHovered ? 'white' : 'transparent'
      }
    }
  }, [isSticky, isHovered])

  return (
    <header 
      ref={headerRef}
      className="absolute top-0 left-0 w-full py-5 sm:px-10 px-5 z-20 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-center">
        <img 
          src={isSticky || isHovered ? yslHorizontalBlackImg : yslHorizontalWhiteImg} 
          alt="YSL"
          className="cursor-pointer"
        />
      </div>

      <nav className="flex-center mt-4">
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