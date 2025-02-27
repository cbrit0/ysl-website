import { bog1Img, bog2Img, bog3Img, bog4Img } from "../utils"

const QuickLinks = () => {
  return (
    <section id="quicklinks" className="overflow-hidden py-5">
      <div className="screen-max-width flex-center">
        <div className="w-[22%] quicklink-containter">
          <div className="mt-1 mb-1 flex-center">
            <img 
              src={bog1Img} 
              className="rounded-full ml-1"
              alt=""
            />
            <small className="font-bold ml-2 text-sm">A JOURNEY INTO GLITTERING SENSUALITY</small>
          </div>
        </div>
        <div className="w-[25%] quicklink-containter">
          <div className="mt-1 mb-1 flex-center">
            <img src={bog2Img} className="rounded-full ml-1"/>
            <small className="font-bold ml-2 text-sm">THE FRAGRANCE FINDER FOR EVERY MOOD</small>
          </div>
        </div>
        <div className="w-[24%] quicklink-containter">
          <div className="mt-1 mb-1 flex-center">
            <img src={bog3Img} className="rounded-full ml-1"/>
            <small className="font-bold ml-2 text-sm mr-1">DISCOVER LOVESHINE LIPSTICK</small>
          </div>
        </div>
        <div className="w-[25%] quicklink-containter">
          <div className="mt-1 mb-1 flex-center">
            <img src={bog4Img} className="rounded-full ml-1"/>
            <small className="font-bold ml-2 text-sm">YSL BEAUTY FRAGRANCES NOW IN A REFILLABLE DESIGN</small>
          </div>
        </div>

      </div>
    </section>
  )
}

export default QuickLinks