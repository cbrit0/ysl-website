import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { footerLinks, footerNav } from "../constants"
import { faFacebookSquare, faPinterest, faXTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <section className="flex-center flex-col bg-black text-white border-t border-white">
      <div className="flex justify-center w-[65%] h-auto my-6">
        <div className="flex justify-center w-2/3 text-xs mb-6">
          {footerNav.map((link, index) => (
            <div key={index} className="flex flex-col w-1/4 px-[10px] gap-[10px]">
              <p className="font-semibold hover:cursor-pointer hover:underline">{link.title}</p>

              {link.links.map((item, index) => (
                <p key={index} className="hover:cursor-pointer hover:underline">{item}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="w-1/3 px-[10px]">
          <div className="flex flex-col h-1/2 ">
            <p className="font-semibold text-sm mb-6">CONTACT US</p>

            <p className="text-xs">For any questions, please contact us via our <em className="hover:cursor-pointer hover:underline">contact form</em></p>
          </div>

          <div className="h-1/2">
            <p className="font-semibold text-sm">FOLLOW US</p>

            <div className="flex w-full text-white justify-between text-3xl">
              <FontAwesomeIcon icon={faFacebookSquare} className="cursor-pointer" />
              <FontAwesomeIcon icon={faXTwitter} className="cursor-pointer" />
              <FontAwesomeIcon icon={faPinterest} className="cursor-pointer" />
              <FontAwesomeIcon icon={faInstagram} className="cursor-pointer" />
              <FontAwesomeIcon icon={faYoutube} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between border-white border-t w-[65%] py-4 px-4 mb-10">
        <p className="text-[10px]">© 2024 YSL BEAUTY</p>

        <div className="flex-center text-[10px]">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex items-center">
              <p className="hover:cursor-pointer hover:underline">{link}</p>
              {index !== 4 && <span className="mx-2">•</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer