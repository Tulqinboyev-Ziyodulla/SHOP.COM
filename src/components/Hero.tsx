const Hero = () => {
  return (
    <section className="container hero-section">
      <div className="w-full max-w-[1440px] mx-auto p-[98px] hero-bg max-sm:bg-none max-sm:px-4 max-sm:py-10">
        <div className="w-full max-w-[580px] mx-auto max-sm:w-full">
          <h1 className="font-bold text-[64px] leading-[64px] mb-[32px] max-sm:text-[28px] max-sm:leading-[36px] text-center sm:text-left">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-normal text-[16px] leading-[22px] mb-[32px] max-sm:text-[14px] max-sm:leading-[20px] text-center sm:text-left">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mb-[48px] rounded-[24px] text-white bg-black py-[10px] w-[210px] max-sm:w-full mx-auto sm:mx-0">
            Shop now
          </button>
          <ul className="flex flex-col sm:flex-row items-center gap-[32px] max-sm:gap-[16px] text-center sm:text-left">
            <li className="flex flex-col items-center border-b-[1px] sm:border-r-[1px] max-sm:border-none sm:items-start">
              <strong className="font-semibold text-[40px] leading-[54px] max-sm:text-[28px] max-sm:leading-[36px]">
                200+
              </strong>
              <span className="font-normal text-[16px] leading-[22px] max-sm:text-[14px] max-sm:leading-[20px]">
                International Brands
              </span>
            </li>
            <li className="flex flex-col items-center border-b-[1px] sm:border-r-[1px] max-sm:border-none sm:items-start">
              <strong className="font-semibold text-[40px] leading-[54px] max-sm:text-[28px] max-sm:leading-[36px]">
                2,000+
              </strong>
              <span className="font-normal text-[16px] leading-[22px] max-sm:text-[14px] max-sm:leading-[20px]">
                High-Quality Products
              </span>
            </li>
            <li className="flex flex-col items-center max-sm:items-center">
              <strong className="font-semibold text-[40px] leading-[54px] max-sm:text-[28px] max-sm:leading-[36px]">
                30,000+
              </strong>
              <span className="font-normal text-[16px] leading-[22px] max-sm:text-[14px] max-sm:leading-[20px]">
                Happy Customers
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
