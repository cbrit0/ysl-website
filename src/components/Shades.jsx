import ShadesCarousel from "./ShadesCarousel"
import { shades } from "../constants";
import { useState } from 'react';

const Shades = () => {
  const [activeSlideBackground, setActiveSlideBackground] = useState(shades[0].image)

  const handleSlideChange = (index) => {
    setActiveSlideBackground(shades[index].image)
  };

  return (
    <section 
      id="shades" 
      className="overflow-hidden h-[90vh] common-padding"
      style={{ 
        backgroundImage: `url(${activeSlideBackground})`,
        backgroundSize: "cover",
        transition: "background-image 0.5s ease-in-out"
      }}
    >
      <div className="screen-max-width h-full flex-col">
        <div className="w-full flex-center flex-col">
          <h1 id="title" className="section-heading">COUTURE-INSPIRED SHADES</h1>
        </div>
        
        <ShadesCarousel onSlideChange={handleSlideChange}/>
      </div>
    </section>
  )
}

export default Shades