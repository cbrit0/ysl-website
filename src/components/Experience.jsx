import { yslBeautyClubImg, smallYslBeautyClubImg, crueltyFreeImg } from "../utils"
import { useState, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

const Experience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760)
  const [imageSrc, setImageSrc] = useState(isMobile ? smallYslBeautyClubImg : yslBeautyClubImg)

  const handleResize = () => {
    const mobile = window.innerWidth < 760
    setIsMobile(mobile)
    setImageSrc(mobile ? smallYslBeautyClubImg : yslBeautyClubImg)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
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
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {isMobile ? (
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-center justify-centerp-6 pt-12 text-center">
            <div className="font-bold text-2xl mb-8 text-black">
              JOIN THE YSL BEAUTY CLUB
            </div>
          </div>
          
          <div className="flex-1">
            <img
              className="w-full h-auto object-cover" 
              src={imageSrc} 
              alt="YSL Beauty Club" 
            />
          </div>
          
          <div className="flex-center flex-col p-6 pb-12">
            <div className="text-sm text-center mb-6">
              Unlock exclusive access to the ultimate member-only experience. A luxurious journey awaits.
            </div>

            <button className="h-14 w-48 cursor-pointer select-none bg-black font-semibold text-white">
              JOIN NOW
            </button>
          </div>
        </div>
      ) : (
        <div className="relative top-0 left-0 w-auto h-full">
          <img
            className="w-full h-full object-cover" 
            src={imageSrc} 
            alt="YSL Beauty Club" 
          />

          <div className="flex-center absolute top-0 right-0 w-1/3 h-full">
            <div className="flex-col text-center text-white mb-20">
              <div className="font-bold text-[52px] leading-none mb-4 text-5xl">
                JOIN THE <br /> YSL BEAUTY CLUB
              </div>
              <div className="text-[13px] leading-normal mb-4">
                Unlock exclusive access to the ultimate member-only <br /> experience. A luxurious journey awaits.
              </div>
              <button className="h-14 w-40 cursor-pointer select-none bg-black font-semibold text-sm">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      )}
      
      <span 
        id="cruelty-free"
        className="block h-10 bg-repeat bg-[length:auto_100%]"
        style={{ backgroundImage: `url(${crueltyFreeImg})` }}
      />
    </section>
  )
}

export default Experience