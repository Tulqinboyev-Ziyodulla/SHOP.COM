import { useState } from "react";
import logo from "../assets/SHOP.CO.svg";
import { Link } from "react-router-dom";
import Sign from "./TopHeader";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoPersonCircleOutline, IoCartOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.length;

  return (
    <>
      <Sign />
      <header className="container py-3 mt-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between relative">
            <button
              className="lg:hidden text-2xl z-20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>

            <Link to="/">
              <img
                src={logo}
                alt="logo"
                width={400}
                className="max-sm:w-28"
              />
            </Link>

            <ul
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute top-3 left-0 w-full bg-white shadow-md z-10 p-4 rounded-lg lg:static lg:flex lg:items-center lg:gap-6 lg:shadow-none lg:bg-transparent transition-all duration-300`}
            >
              <li className="font-medium text-sm lg:text-base flex items-center gap-1">
                <p>Shop</p>
                <MdKeyboardArrowDown />
              </li>
              <li className="font-medium text-sm lg:text-base">On Sale</li>
              <li className="font-medium text-sm lg:text-base">New Arrivals</li>
              <li className="font-medium text-sm lg:text-base">Brands</li>
            </ul>

            <div className="hidden lg:block relative">
              <GoSearch className="absolute top-2 left-5 text-lg" />
              <input
                placeholder="Search for products..."
                type="text"
                className="pl-14 pr-14 outline-none w-96 bg-gray-200 rounded-3xl py-2"
              />
            </div>

            <div className="flex items-center gap-4 relative">
              <Link to="/cart" className="relative">
                <IoCartOutline className="text-2xl hover:text-blue-500" aria-label="Cart" />
                <span className="absolute -top-2 -right-2 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center bg-red-500">
                  {cartItemCount}
                </span>
              </Link>
              <Link to="/" className="relative">
                <IoPersonCircleOutline className="text-2xl hover:text-blue-500" aria-label="User Profile" />
              </Link>
            </div>
          </div>

          <div className="block lg:hidden mt-4">
            <div className="relative">
              <GoSearch className="absolute top-2 left-5 text-lg" />
              <input
                placeholder="Search for products..."
                type="text"
                className="pl-14 pr-14 outline-none w-full sm:w-[300px] md:w-[400px] lg:w-[500px] bg-gray-200 rounded-3xl py-2"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
