import ShadesCarousel from "./ShadesCarousel"

const Shades = () => {
  return (
    <section id="shades" className="overflow-hidden h-[90vh] common-padding bg-amber-100">
      <div className="screen-max-width h-full flex-col">
        <div className="w-full flex-center flex-col">
          <h1 id="title" className="section-heading">COUTURE-INSPIRED SHADES</h1>
        </div>
        
        <ShadesCarousel />
      </div>
    </section>
  )
}

export default Shades