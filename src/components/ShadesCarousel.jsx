import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { shades } from "../constants";
import { useState } from 'react';
import { leftArrowImg, rightArrowImg } from '../utils';

const splideOptions = {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  focus: 'center',
  pagination: false,
}

const ShadesCarousel = ({ onSlideChange }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (splide) => {
    setActiveSlideIndex(splide.index)
    onSlideChange(splide.index)
  }

  return (
    <div className="h-full relative flex-center w-full">
      <Splide 
        hasTrack={false}
        options={splideOptions}
        onMove={handleSlideChange}     
      >
        <SplideTrack className="mb-2">
          {shades.map((shade, i) => (
            <SplideSlide key={shade.id} className="flex-center h-full">
              <div className="flex-center flex-col">
                <img 
                  src={shade.backgroundImg} 
                  alt={shade.colorName}
                  className={`${activeSlideIndex === i ? "w-11/12" : "w-10/12 mt-10"} cursor-pointer transition-all ease-in-out duration-200`}
                />
                {activeSlideIndex === i && (
                  <>
                    <p className="text-sm font-semibold cursor-pointer">MAKE ME BLUSH BOLD BLURRING BLUSH</p><div className="w-11/12 flex-center flex-col">
                      <small className="text-wrap text-center mt-4 text-xs text-gray-500">
                        An ultra-sensorial silky powder blush that blurs the look of pores. The waterproof and sweat proof formula ensures a 24h bright color flush.
                      </small>
                      <div className="mt-2 mb-2 w-full flex-center">
                        <span className="h-4 w-4 mr-2 border border-gray-400" style={{ backgroundColor: shade.color }}>
                        </span>
                        <p className="text-xs text-center">{shade.colorName}</p>
                      </div>
                      <div className="text-white bg-black w-[98%] font-semibold text-center pt-3 pb-4 text-sm mt-4 cursor-pointer">
                        DISCOVER
                      </div>
                    </div>
                  </>
                )}
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev flex-center">
            <div className='h-full ml-4 mr-5 flex items-center'>
              <img src={leftArrowImg} />
            </div>
          </button>
          <button className="splide__arrow splide__arrow--next">
          <div className='h-full ml-5 mr-4 flex items-center'>
              <img src={rightArrowImg} />
            </div>
          </button>
        </div>
      </Splide>
    </div>
  )
}

export default ShadesCarousel;