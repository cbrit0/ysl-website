import { navList } from "../constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

const StickyNavbar = ({ isSticky, isAtTop }) => {
  useGSAP(() => {
    if (isSticky && !isAtTop) {
      gsap.fromTo(
        '#sticky-navbar',
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
        '#sticky-navbar',
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
    <nav id="sticky-navbar" className="hidden md:sticky-navbar">
      {navList.map((nav, index) => (
        <div
          key={index}
          className="p-4 cursor-pointer border-b-3 border-transparent hover:border-black"
        >
          <p className="flex-center w-18 h-8 text-[11px] font-bold">
            {nav}
          </p>
        </div>
      ))}
    </nav>
  )
}

export default StickyNavbar