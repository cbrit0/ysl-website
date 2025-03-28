import { View } from '@react-three/drei'
import ModelView from './ModelView'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Model = () => {
  useGSAP(() => {
    gsap.fromTo(
      '#heading',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#model',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section
      id='model'
      className="common-padding bg-[url('/assets/images/hero-banner.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className='flex flex-col md:flex-row justify-end'>
        <div className='w-full md:w-1/2 h-auto md:h-[90vh] p-4 md:p-45 flex-center order-1 md:order-2'>
          <div className='flex-col md:text-left text-center'>
            <h1 id='heading' className='text-3xl md:text-4xl font-bold mb-4'>
              New Collection. <br /> Timeless Style.
            </h1>
            <p id='body-text' className='mb-4'>
              Step into the future of luxury with the Opyum Sandals—crafted in
              patent leather, designed for the modern icon.
            </p>

            <div className='flex md:justify-start justify-center'>
              <a className='discover-now-button w-45'>DISCOVER</a>
            </div>
          </div>
        </div>

        <div className='w-full md:w-[70vh] h-[50vh] md:h-[90vh] overflow-hidden relative order-2 md:order-1'>
          <ModelView />

          <Canvas
            className='w-full h-full'
            style={{
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              overflow: 'hidden',
            }}
            eventSource={document.getElementById('root')}
          >
            <View.Port />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Model