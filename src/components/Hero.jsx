import { heroVideo, smallHeroVideo } from '../utils'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  return (
    <section className='relative w-full h-screen overflow-hidden bg-black'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none'
        autoPlay
        muted
        playsInline={true}
        key={videoSrc}
        loop
      >
        <source src={videoSrc} type='video/mp4' />
      </video>
    </section>
  )
}

export default Hero