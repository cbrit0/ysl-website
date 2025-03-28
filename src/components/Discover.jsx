import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { categories } from '../constants'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles.css'

const Discover = () => {
  return (
    <section id='discover' className='overflow-hidden h-auto common-padding'>
      <div className='screen-max-width h-full flex-col'>
        <h1 className='section-heading flex-center mb-8'>DISCOVER BY CATEGORY</h1>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '#custom-next',
            prevEl: '#custom-prev',
          }}
          pagination={{
            clickable: true,
            el: '#custom-pagination',
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
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className='flex-col'>
                <img src={category.image} alt={category.name} />
                <p
                  className={`mt-6 font-bold text-xl flex-center ${index === 2 ? 'mb-5' : 'mb-12'}`}
                  dangerouslySetInnerHTML={{ __html: category.title }}
                />
                <a className='discover-now-button'>
                  DISCOVER NOW
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div id='custom-pagination' className='custom-pagination' />

        <div className='custom-navigation'>
          <button id='custom-prev' className='custom-prev'>
            &#10094;
          </button>
          <button id='custom-next' className='custom-next'>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  )
}

export default Discover