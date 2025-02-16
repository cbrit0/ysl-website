import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Highlights = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#highlights",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )
  }, [])

  return (
    <section 
        id="highlights" 
        className="w-screen overflow-hidden h-full common-padding bg-[url(/assets/images/highlightsBackground.webp)]"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-center">
          <h1 id="title" className="section-heading">OUR FRAGRANCE ICONS</h1>
        </div>
      </div>
    </section>
  )
}

export default Highlights