import logo from "../assets/SHOP.CO.svg";
import social1 from "../assets/social1.svg";
import social2 from "../assets/social2.svg";
import social3 from "../assets/social3.svg";
import social4 from "../assets/social4.svg";
import payment from "../assets/payments.svg";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Contact />
      <footer className="container mt-12 mb-24 px-4 sm:px-8">
        <div className="container">
          <ul className="flex flex-col lg:flex-row items-start justify-between mb-12 gap-8 lg:gap-0">
            <li className="w-full lg:w-[248px] text-center lg:text-left">
              <Link to="/">
                <img className="mb-6 mt-10 mx-auto lg:mx-0" src={logo} alt="Shop.co Logo" />
              </Link>
              <p className="font-normal text-sm leading-[22px] mb-5 lg:mb-8">
                We have clothes that suit your style and which you’re proud to wear. From women to men.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <img src={social1} alt="Social 1" className="w-8 h-8 rounded-full p-2 border bg-white" />
                <img src={social2} alt="Social 2" className="w-8 h-8 rounded-full p-2 border bg-white" />
                <img src={social3} alt="Social 3" className="w-8 h-8 rounded-full p-2 border bg-white" />
                <img src={social4} alt="Social 4" className="w-8 h-8 rounded-full p-2 border bg-white" />
              </div>
            </li>
            {[ 
              { title: "Company", links: ["About", "Features", "Works", "Career"] },
              { title: "Help", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
              { title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"] },
              { title: "Resources", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] }
            ].map((section, index) => (
              <li key={index} className="flex mt-10 flex-col gap-3 text-left sm:text-left">
                <strong className="font-medium text-base uppercase mb-4 lg:mb-5">{section.title}</strong>
                {section.links.map((link, idx) => (
                  <span key={idx} className="font-normal text-sm lg:text-base leading-[19px] text-[#606060]">
                    {link}
                  </span>
                ))}
              </li>
            ))}
          </ul>
          <hr />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 text-center lg:text-left">
            <span className="text-xs lg:text-sm">Shop.co © 2000-2023, All Rights Reserved</span>
            <img src={payment} alt="Payment Methods" className="w-[200px] lg:w-auto" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
