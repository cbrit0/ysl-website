import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { bog1Img, bog2Img, bog3Img, bog4Img } from "../utils"
import 'swiper/css'
import 'swiper/css/navigation'
import '../styles.css'

const QuickLinks = () => {
  return (
    <section id="quicklinks" className="sm:px-5 px-3 pt-4 overflow-hidden">
      <div className="screen-max-width flex-center">
        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView={'auto'}
          spaceBetween={20}
        >
          <SwiperSlide style={{ width: 'auto' }}>
            <div className="quicklink-containter">
              <img src={bog1Img} className="rounded-full" alt="bog1" />
              <small className="quicklink-text">A JOURNEY INTO <br/> GLITTERING SENSUALITY</small>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: 'auto' }}>
            <div className="quicklink-containter">
              <img src={bog2Img} className="rounded-full" alt="bog2" />
              <small className="quicklink-text">THE FRAGRANCE FINDER <br/> FOR EVERY MOOD</small>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: 'auto' }}>
            <div className="quicklink-containter">
              <img src={bog3Img} className="rounded-full" alt="bog3" />
              <small className="quicklink-text">DISCOVER LOVESHINE LIPSTICK</small>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: 'auto' }}>
            <div className="quicklink-containter">
              <img src={bog4Img} className="rounded-full" alt="bog4" />
              <small className="quicklink-text">YSL BEAUTY FRAGRANCES NOW <br/> IN A REFILLABLE DESIGN</small>
            </div>
          </SwiperSlide>
        </Swiper> 
      </div>
    </section>
  )
}

export default QuickLinks