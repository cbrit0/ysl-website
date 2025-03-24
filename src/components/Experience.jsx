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
      <img 
        className="w-full h-auto object-cover" 
        src={imageSrc} 
        alt="YSL Beauty Club" 
      />
      
      <span 
        id="cruelty-free"
        className="block h-10 bg-repeat bg-[length:auto_100%]"
        style={{ backgroundImage: `url(${crueltyFreeImg})` }}
      />
    </section>
  )
}

export default Experience