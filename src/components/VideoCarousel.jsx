import { highlightsSlides } from "../constants";
import { playImg, pauseImg } from "../utils";
import { useState, useRef, createRef } from "react";

const VideoCarousel = () => {
  const [videoStates, setVideoStates] = useState(
    highlightsSlides.map(() => ({ isPlaying: true }))
  )

  const videoRefs = useRef(highlightsSlides.map(() => createRef()))

  const togglePlayPause = (index) => {
    const videoElement = videoRefs.current[index].current;
    if (!videoElement) return;

    if (videoStates[index].isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }

    setVideoStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = { isPlaying: !prevStates[index].isPlaying };
      return newStates;
    })
  }

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
                ref={videoRefs.current[i]}
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
              
              <button 
                className="control-btn absolute -translate-y-15 h-10 w-10 cursor-pointer border" 
                onClick={() => togglePlayPause(i)}
              >
                <img
                  src={videoStates[i].isPlaying ? pauseImg : playImg}
                  alt={videoStates[i].isPlaying ? "Pause" : "Play"}
                  className={`${videoStates[i].isPlaying ? 'h-full w-full' : 'h-4 w-4 ml-1'}`}
                />
              </button>
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