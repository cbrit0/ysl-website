import { carouselSlides } from "../constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useEffect } from "react"

gsap.registerPlugin(useGSAP)

const Carousel = () => {
  const sliderRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    const slides = slideRefs.current;
    const totalSlides = slides.length;
    let currentIndex = 0;

    const playSlide = (index) => {
      gsap.to(slides, {
        x: `-${index * 100}%`,
        duration: 1,
        ease: 'power2.inOut',
      });
    };

    const autoPlay = () => {
      const currentSlide = carouselSlides[currentIndex];
      playSlide(currentIndex);

      currentIndex = (currentIndex + 1) % totalSlides;
      setTimeout(autoPlay, currentSlide.duration * 1000);
    };

    autoPlay();
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div ref={sliderRef} className="flex w-full h-full">
        {carouselSlides.map((slide, index) => (
          <div 
            ref={(el) => (slideRefs.current[index] = el)} 
            key={slide.id} 
            id="slider"
            className="flex-shrink-0 w-full h-full flex items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src={slide.image}
                alt={slide.name}
                className="object-cover rounded-lg"
              />
              
              <div className="text-center text-white p-4 rounded-lg">
                <h2 className="text-2xl font-bold">{slide.name}</h2>
                <p className="text-lg">{slide.description}</p>
                <p className="text-md">{slide.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel