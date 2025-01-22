import React from "react";
import versace from "../assets/versace.png";
import zara from "../assets/zara.png";
import gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import calvinClein from "../assets/calvin-clein.png";

const Brand: React.FC = () => {
  const brands = [
    { src: versace, alt: "Versace" },
    { src: zara, alt: "Zara" },
    { src: gucci, alt: "Gucci" },
    { src: prada, alt: "Prada" },
    { src: calvinClein, alt: "Calvin Klein" },
  ];

  return (
    <section className="container bg-black mb-[72px]">
      <div className="container py-[42px] px-[100px]">
        <ul className="flex items-center justify-between max-sm:flex-col max-sm:gap-[20px]">
          {brands.map((brand, index) => (
            <li key={index}>
              <img src={brand.src} alt={brand.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brand;
