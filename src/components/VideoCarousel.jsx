import { highlightsSlides } from '../constants'
import { useState, useRef, createRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles.css'

const VideoCarousel = () => {
  const [videoStates, setVideoStates] = useState(
    highlightsSlides.map(() => ({ isPlaying: true }))
  )

  const videoRefs = useRef(highlightsSlides.map(() => createRef()))

  const togglePlayPause = (index) => {
    const videoElement = videoRefs.current[index].current
    if (!videoElement) return

    if (videoStates[index].isPlaying) {
      videoElement.pause()
    } else {
      videoElement.play()
    }

    setVideoStates((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = { isPlaying: !prevStates[index].isPlaying }
      return newStates
    })
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: '#custom-next-video',
          prevEl: '#custom-prev-video',
        }}
        pagination={{
          clickable: true,
          el: '#custom-pagination-video',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {highlightsSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className='flex-center flex-col'>
              <div className='h-12 w-full mt-6 flex-center mb-4'>
                <p
                  className='text-center text-wrap w-70'
                  dangerouslySetInnerHTML={{ __html: slide.text }}
                />
              </div>

              <div className='relative w-full'>
                <video
                  ref={videoRefs.current[index]}
                  playsInline
                  className='pointer-events-none w-full h-auto'
                  preload='auto'
                  muted
                  autoPlay
                  loop
                >
                  <source src={slide.video} type='video/mp4' />
                </video>

                <button
                  onClick={() => togglePlayPause(index)}
                  className='control-btn'
                >
                  <FontAwesomeIcon icon={videoStates[index].isPlaying ? faPause : faPlay} />
                </button>
              </div>

              <a className='discover-button'>
                {slide.button}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div id='custom-pagination-video' className='custom-pagination' />

      <div id='custom-navigation-video' className='custom-navigation'>
        <button id='custom-prev-video' className='custom-prev'>
          &#10094;
        </button>
        <button id='custom-next-video' className='custom-next'>
          &#10095;
        </button>
      </div>
    </>
  )
}

export default VideoCarousel