import { Splide, SplideSlide } from "@splidejs/react-splide"
import { bog1Img, bog2Img, bog3Img, bog4Img } from "../utils"

const splideOptions = {
  perPage: 4,
  perMove: 4,
  pagination: false,
  arrows: false,
}

const QuickLinks = () => {
  return (
    <section id="quicklinks" className="overflow-hidden py-5">
      <div className="screen-max-width flex-center">
        <Splide options={splideOptions}>
          <SplideSlide className="lg:flex-center">
          <div className="w-[80%] quicklink-containter lg:ml-12">
            <div className="quicklink-text-container">
              <img src={bog1Img} className="rounded-full ml-1" alt="bog1"/>
              <small className="quicklink-text">A JOURNEY INTO GLITTERING SENSUALITY</small>
            </div>
          </div>
          </SplideSlide>
          <SplideSlide className="lg:flex-center">
            <div className="w-[90%] quicklink-containter">
              <div className="quicklink-text-container">
                <img src={bog2Img} className="rounded-full ml-1"/>
                <small className="quicklink-text">THE FRAGRANCE FINDER FOR EVERY MOOD</small>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className="lg:flex-center">
            <div className="w-[96%] quicklink-containter">
              <div className="quicklink-text-container">
                <img src={bog3Img} className="rounded-full"/>
                <small className="quicklink-text mr-1">DISCOVER LOVESHINE LIPSTICK</small>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className="lg:flex-center">
            <div className="w-[97%] quicklink-containter ml-3">
              <div className="quicklink-text-container">
                <img src={bog4Img} className="rounded-full ml-1"/>
                <small className="quicklink-text">YSL BEAUTY FRAGRANCES NOW IN A REFILLABLE DESIGN</small>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  )
}

export default QuickLinks