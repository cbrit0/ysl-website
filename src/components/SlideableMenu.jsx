import { navList } from '../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const SlideableMenu = ({ isMenuOpen }) => {
  useGSAP(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        '#slideable-menu',
        { x: '100%' },
        {
          x: 0,
          position: 'fixed',
          duration: 0.5,
          ease: 'power2.out'
        }
      )
    } else {
      gsap.fromTo(
        '#slideable-menu',
        { x: 0 },
        {
          x: '100%',
          position: 'fixed',
          duration: 0.2,
          ease: 'power2.out'
        }
      )
    }
  }, [isMenuOpen])

  return (
    <div id='slideable-menu' className='fixed top-14 w-full h-full z-30 bg-white top-shadow translate-x-[100%]'>
      {navList.map((nav, index) => (
        <div
          key={index}
          className={`pl-4 pt-3 pb-3.5 font-bold text-sm shadow-bottom ${
            index === 0 && 'border-t-[1.5px] border-gray-500/40'
          }`}
        >
          {nav}
        </div>
      ))}
    </div>
  )
}

export default SlideableMenu