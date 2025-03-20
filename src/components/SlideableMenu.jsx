import { navList } from "../constants"

const SlideableMenu = () => {
  return (
    <div className="fixed top-14 w-full h-full z-30 bg-white top-shadow">
      {navList.map((nav, index) => (
        <div 
          key={index} 
          className={`pl-4 pt-3 pb-3.5 font-bold text-sm shadow-bottom ${
            index === 0 && 'border-t-[1.5px] border-gray-500/40'
          }`}
        >
          {nav}
        </div>
      ))}
    </div>
  )
}

export default SlideableMenu