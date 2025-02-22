import { highlightsSlides } from "../constants";

const VideoCarousel = () => {
    return (
      <>
        <div className="flex items-center gap-2">
          {highlightsSlides.map((slide, i) => (
            <div key={slide.id} id="slider" className="flex-1">
              <div className="flex-center flex-col mb-4">
                <div className="h-12 w-full mt-6 flex-center">
                  <div className="h-full w-70">
                    <p 
                      className="text-center text-wrap" 
                      dangerouslySetInnerHTML={{ __html: slide.text }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full h-full border-2">
                <video
                  id="video"
                  playsInline={true}
                  className="pointer-events-none"
                  preload="auto"
                  muted
                  autoPlay
                  loop
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>

              <a className="h-14 w-full flex-center border mt-4 font-medium hover:border-2 cursor-pointer select-none">
                {slide.button}
              </a>
            </div>
          ))}
        </div>
      </>
    );
}

export default VideoCarousel