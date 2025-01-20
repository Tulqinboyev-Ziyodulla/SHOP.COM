import Person1 from "../assets/person1.png";
import Person2 from "../assets/person2.png";
import Person3 from "../assets/person3.png";
import Person4 from "../assets/person4.png";

const Dress = () => {
  return (
    <section className="container px-4 sm:px-8 md:px-16 py-10">
      <div className="p-8 bg-[#F0F0F0] rounded-xl">
        <div className="flex flex-col sm:flex-row items-center sm:gap-8 mb-8">
          <div className="w-full sm:w-1/3 p-6 rounded-2xl bg-white text-black text-center sm:text-left">
            <span className="font-extrabold text-2xl sm:text-4xl leading-[32px] sm:leading-[48px]">Casual</span>
            <img src={Person1} alt="Casual" className="w-full sm:w-[400px] mt-4 mx-auto sm:mx-0" />
          </div>
          <div className="w-full sm:w-2/3 p-6 rounded-2xl bg-white text-black text-center sm:text-left">
            <span className="font-extrabold text-2xl sm:text-4xl leading-[32px] sm:leading-[48px]">Formal</span>
            <img src={Person2} alt="Formal" className="w-full sm:w-[480px] mt-4 sm:ml-[80px] mx-auto sm:mx-0" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:gap-8">
          <div className="w-full sm:w-2/3 p-6 rounded-2xl bg-white text-black text-center sm:text-left">
            <span className="font-extrabold text-2xl sm:text-4xl leading-[32px] sm:leading-[48px]">Party</span>
            <img src={Person3} alt="Party" className="w-full sm:w-[480px] mt-4 sm:ml-[80px] mx-auto sm:mx-0" />
          </div>
          <div className="w-full sm:w-1/3 p-6 rounded-2xl bg-white text-black text-center sm:text-left">
            <span className="font-extrabold text-2xl sm:text-4xl leading-[32px] sm:leading-[48px]">Gym</span>
            <img src={Person4} alt="Gym" className="w-full sm:w-[400px] mt-4 mx-auto sm:mx-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dress;
