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
    <section id="model" className="common-padding bg-[url('/assets/images/hero-banner.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-end">
        <div className="w-[70vh] h-[75vh] md:h-[90vh] overflow-hidden relative border">
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

        <div className="w-1/2 h-[75vh] md:h-[90vh] p-45 flex-center">
          <div className="flex-col">

            <h1 id="heading" className="text-4xl font-bold mb-4">New Collection. <br/> Timeless Style.</h1>
            <p id="body-text" className="mb-4">
              Step into the future of luxury with the Opyum Sandals—crafted in patent leather, designed for the modern icon.
            </p>

            <a className="discover-now-button w-40">DISCOVER</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model