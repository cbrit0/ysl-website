import VideoCarousel from "./VideoCarousel"

const HypeOnSocial = () => {
  return (
    <section id="hype-on-social" className="overflow-hidden h-screen common-padding bg-amber-100">
      <div className="screen-max-width h-full flex-col">
        <div className="w-full flex-center flex-col">
          <h1 id="title" className="section-heading">HYPE ON SOCIAL</h1>
          <p className="mt-4 font-medium">SPOT IT. TRY IT. OWN IT.</p>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default HypeOnSocial