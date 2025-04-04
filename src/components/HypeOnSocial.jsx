import VideoCarousel from './VideoCarousel'

const HypeOnSocial = () => {
  return (
    <section id='hype-on-social' className='overflow-hidden h-3/4 common-padding'>
      <div className='screen-max-width h-full flex-col'>
        <div className='w-full flex-center flex-col'>
          <h1 id='title' className='section-heading'>HYPE ON SOCIAL</h1>
          <p className='md:mt-4 font-medium'>SPOT IT. TRY IT. OWN IT.</p>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default HypeOnSocial