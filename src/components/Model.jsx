import { View } from "@react-three/drei"
import ModelView from "./ModelView"
import { Canvas } from "@react-three/fiber"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Model = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#heading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#model",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )
  }, [])

  return (
    <section id="model" className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading text-center">
          DISCOVER OUR NEW ARRIVAL
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView />

            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden'
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model