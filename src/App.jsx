import { useEffect, useState, useRef } from "react"
import StickyNavbar from "./components/StickyNavbar"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Model from "./components/Model"
import HypeOnSocial from "./components/HypeOnSocial"
import Shades from "./components/Shades"
import QuickLinks from "./components/QuickLinks"
import Discover from "./components/Discover"
import SlideableMenu from "./components/SlideableMenu"
import MiniNavbar from "./components/MiniNavbar"

const App = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const lastScrollY = useRef(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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

  return (
    <main className="bg-white">
      <div className="hidden md:flex">
        <Navbar isAtTop={isAtTop} ref={headerRef} />
        <StickyNavbar isSticky={isSticky} isAtTop={isAtTop} />
      </div>
      <div className="flex md:hidden">
        <MiniNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        <SlideableMenu isMenuOpen={isMenuOpen}/>
      </div>
      <Hero />
      <Shades />
      <QuickLinks />
      <HypeOnSocial />
      <Model />
      <Discover />
    </main>
  )
}

export default App
