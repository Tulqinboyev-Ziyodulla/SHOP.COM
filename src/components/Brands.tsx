import versace from "../assets/versace.png"
import zara from "../assets/zara.png"
import gucci from "../assets/gucci.png"
import prada from "../assets/prada.png"
import calvinClein from "../assets/calvin-clein.png"


const Brands = () => {
  return (
    <section className=" container bg-black mb-[72px]">
      <div className="container py-[42px] px-[100px]">
        <ul className="flex items-center justify-between max-sm:flex-col max-sm:gap-[20px]">
          <li>
            <img src={versace} alt="" />
          </li>
          <li>
            <img src={zara} alt="" />
          </li>
          <li>
            <img src={gucci} alt="" />
          </li>
          <li>
            <img src={prada} alt="" />
          </li>
          <li>
            <img src={calvinClein} alt="" />
          </li>
        </ul>
      </div>
    </section>
  )
}


export default Brands