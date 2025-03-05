import { fragrancesImg, makeupImg, parfumsImg, skincareImg } from "../utils"

const Discover = () => {
  return (
    <section id="discover" className="overflow-hidden h-screen common-padding">
      <div className="screen-max-width h-full flex-col">
        <h1 className="section-heading flex-center">DISCOVER BY CATEGORY</h1>

        <div className="flex items-center gap-2 mt-8">
          <div className="w-1/4 flex-col p-2">
            <img src={makeupImg} alt="makeup" />
            <div className="mt-6 mb-12 font-bold text-xl flex-center">MAKEUP</div>

            <a className="discover-now-button">
              DISCOVER NOW
            </a>
          </div>

          <div className="w-1/4 flex-col p-2">
            <img src={fragrancesImg} alt="fragrances" />
            <div className="mt-6 mb-12 font-bold text-xl flex-center">FRAGRANCES</div>
            
            <a className="discover-now-button">
              DISCOVER NOW
            </a>
          </div>

          <div className="w-1/4 flex-col p-2">
            <img src={parfumsImg} alt="vestiaire des parfums" />
            <div className="mt-6 mb-5 font-bold text-xl flex-center">LE VESTIAIRE <br/> DES PARFUMS</div>

            <a className="discover-now-button">
              DISCOVER NOW
            </a>
          </div>

          <div className="w-1/4 flex-col p-2">
            <img src={skincareImg} alt="skincare" />
            <div className="mt-6 mb-12 font-bold text-xl flex-center">SKINCARE</div>

            <a className="discover-now-button">
              DISCOVER NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discover