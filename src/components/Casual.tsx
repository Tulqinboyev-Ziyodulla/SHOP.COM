import React from "react";
import Man from "../assets/man.png";
import Man2 from "../assets/man2.png";
import Girl from "../assets/girl.png";
import GymMan from "../assets/gym-man.png";

interface SectionData {
  title: string;
  imgSrc: string;
  imgAlt: string;
  isWide?: boolean;
}

const Casual: React.FC = () => {
  const sections: SectionData[] = [
    { title: "Casual", imgSrc: Man, imgAlt: "Casual Outfit", isWide: false },
    { title: "Formal", imgSrc: Man2, imgAlt: "Formal Outfit", isWide: true },
    { title: "Party", imgSrc: Girl, imgAlt: "Party Outfit", isWide: true },
    { title: "Gym", imgSrc: GymMan, imgAlt: "Gym Outfit", isWide: false },
  ];

  return (
    <section className="container px-4 sm:px-8 md:px-16 py-10">
      <div className="p-8 bg-[#F0F0F0] rounded-xl">
        <div className="flex flex-col sm:flex-row items-center sm:gap-8 mb-8">
          {sections.slice(0, 2).map((section, index) => (
            <div
              key={index}
              className={`w-full sm:${section.isWide ? "w-2/3" : "w-1/3"} p-6 rounded-2xl bg-white text-black text-center sm:text-left`}
            >
              <span className="font-extrabold text-2xl sm:text-4xl leading-[32px] sm:leading-[48px]">{section.title}</span>
              <img
                src={section.imgSrc}
                alt={section.imgAlt}
                className={`w-full sm:${section.isWide ? "w-[480px]" : "w-[400px]"} mt-4 mx-auto sm:mx-0`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:gap-8">
          {sections.slice(2).map((section, index) => (
            <div
              key={index}
              className={`w-full sm:${section.isWide ? "w-2/3" : "w-1/3"} p-6 rounded-2xl bg-white text-black text-center sm:text-left`}
            >
              <span className="font-extrabold text-2xl sm:text-4xl leading-[32px] sm:leading-[48px]">{section.title}</span>
              <img
                src={section.imgSrc}
                alt={section.imgAlt}
                className={`w-full sm:${section.isWide ? "w-[480px]" : "w-[400px]"} mt-4 mx-auto sm:mx-0`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Casual;
