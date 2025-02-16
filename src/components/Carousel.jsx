import { carouselSlides } from "../constants"

const Carousel = () => {
  return (
    <>
      <div className="flex items-center">
        {carouselSlides.map((slide, idx) => (
          <div key={slide.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <img src={slide.image} alt={slide.name} className="pointer-events-none"/>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                <p className="md:text-2xl text-xl font-medium">
                  {slide.name}
                </p>
                <p className="md:text-2xl text-xl font-normal">
                  {slide.description}
                </p>
                <p className="md:text-2xl text-xl font-light">
                  {slide.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Carousel