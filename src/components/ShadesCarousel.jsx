import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { shades } from '../constants'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles.css'

const ShadesCarousel = ({ onSlideChange }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex
          setActiveIndex(realIndex)
          onSlideChange(shades[realIndex])
        }}
        navigation={{
          nextEl: '#custom-next-shades',
          prevEl: '#custom-prev-shades',
        }}
        pagination={{
          clickable: true,
          el: '#custom-pagination-shades',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {shades.map((shade, i) => (
          <SwiperSlide key={shade.id} className='flex-center h-full'>
            <div className='flex-center flex-col'>
              <img
                src={shade.backgroundImg}
                alt={shade.colorName}
                className={`${activeIndex !== i && 'w-7/10 h-auto mt-12'} cursor-pointer transition-none`}
              />

              {activeIndex === i && (
                <>
                  <p className='text-sm font-semibold cursor-pointer'>MAKE ME BLUSH BOLD BLURRING BLUSH</p>
                  <div className='w-11/12 flex-center flex-col'>
                    <small className='text-wrap text-center mt-4 text-xs text-gray-500'>
                      An ultra-sensorial silky powder blush that blurs the look of pores. The waterproof and sweat proof formula ensures a 24h bright color flush.
                    </small>
                    <div className='mt-2 mb-2 w-full flex-center'>
                      <span className='h-4 w-4 mr-2 border border-gray-400' style={{ backgroundColor: shade.color }}>
                      </span>
                      <p className='text-xs text-center'>{shade.colorName}</p>
                    </div>
                    <div className='discover-shades-button'>
                      DISCOVER
                    </div>
                  </div>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div id='custom-pagination-shades' className='custom-pagination-shades' />

      <div id='custom-navigation-shades' className='custom-navigation-shades'>
        <button id='custom-prev-shades' className='custom-prev-shades'>
          &#10094;
        </button>
        <button id='custom-next-shades' className='custom-next-shades'>
          &#10095;
        </button>
      </div>
    </>
  )
}

export default ShadesCarousel