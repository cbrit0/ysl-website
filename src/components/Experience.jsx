import { yslBeautyClubImg, smallYslBeautyClubImg, crueltyFreeImg } from "../utils"
import { useState, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

const Experience = () => {
  const [imageSrc, setImageSrc] = useState(window.innerWidth < 760 ? smallYslBeautyClubImg : yslBeautyClubImg)

  const handleImageSrcSet = () => {
    if (window.innerWidth < 760) {
      setImageSrc(smallYslBeautyClubImg)
    } else {
      setImageSrc(yslBeautyClubImg)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleImageSrcSet)

    return () => {
      window.removeEventListener('resize', handleImageSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to(
      '#cruelty-free', {
        backgroundPosition: '-100% 0',
        duration: 20,
        ease: 'linear',
        repeat: -1
      }

    )
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <div className="relative top-0 left-0 w-auto h-auto">
        <img
          className="w-full h-auto object-cover" 
          src={imageSrc} 
          alt="YSL Beauty Club" 
        />

        <div className="flex-center absolute top-0 right-0 w-1/2 h-full p-24">
          <div className="flex-col text-center text-white">
            <div className="font-bold text-5xl mb-4">
              JOIN THE YSL BEAUTY CLUB
            </div>

            <div className="text-xs mb-4">
            Unlock exclusive access to the ultimate member-only experience. A luxurious journey awaits.
            </div>
            
            <button className="h-14 w-48 cursor-pointer select-none bg-black font-semibold">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
      
      <span 
        id="cruelty-free"
        className="block h-10 bg-repeat bg-[length:auto_100%]"
        style={{ backgroundImage: `url(${crueltyFreeImg})` }}
      />
    </section>
  )
}

export default Experience