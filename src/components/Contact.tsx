import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <section className="mt-20 sm:mt-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-black rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center sm:text-left w-full sm:w-[551px]">
              <h2 className="font-extrabold text-2xl sm:text-4xl leading-8 sm:leading-[45px] text-white">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h2>
            </div>
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <div className="relative">
                <TfiEmail className="absolute top-3.5 left-4 text-lg text-gray-500" />
                <input
                  type="text"
                  className="outline-none w-full sm:w-[349px] pl-[45px] py-3 rounded-2xl"
                  placeholder="Enter your email address"
                />
              </div>
              <button className="bg-white text-black w-full sm:w-[349px] py-3 rounded-2xl transition-all hover:bg-gray-100">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
