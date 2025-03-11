import { useState, useEffect } from "react"
import ShadesCarousel from "./ShadesCarousel"
import { shades } from "../constants"

const Shades = () => {
  const [activeShade, setActiveShade] = useState(shades[0])

  const handleSlideChange = (shade) => {
    setActiveShade(shade)
  }

  useEffect(() => {
    shades.forEach((shade) => {
      const img = new Image()
      img.src = shade.image
    })
  }, [])

  return (
    <section 
      id="shades" 
      className="overflow-hidden h-auto common-padding"
      style={{
        backgroundImage: `url(${activeShade.image})`,
        backgroundSize: 'cover',
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      <div className="screen-max-width h-full flex-col">
        <div className="w-full flex-center flex-col">
          <h1 id="title" className="section-heading">COUTURE-INSPIRED SHADES</h1>
        </div>
        
        <ShadesCarousel onSlideChange={handleSlideChange} />
      </div>
    </section>
  )
}

export default Shades