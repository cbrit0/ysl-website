import { yslBeautyClubImg, smallYslBeautyClubImg } from "../utils"
import { useState, useEffect } from "react"

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

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <img 
        className="w-full h-auto object-cover" 
        src={imageSrc} 
        alt="YSL Beauty Club" 
      />
    </section>
  )
}

export default Experience