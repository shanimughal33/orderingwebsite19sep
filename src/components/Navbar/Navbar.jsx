import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaHome, FaMobile } from "react-icons/fa";
import { MdMobileFriendly, MdPhone } from "react-icons/md";
import { FaMessage, FaPeopleGroup } from "react-icons/fa6";
import Header from "../header";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <FaHome size={25} className="mr-4 font-semibold" />, text: "Home" },
    { icon: <FaPeopleGroup size={25} className="mr-4 font-semibold" />, text: "About Us" },
    { icon: <FaMessage size={25} className="mr-4 font-semibold" />, text: "Feedback" },
  ];

  return (
    <div className="absolute top-0 left-0 z-20 w-full">
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm bg-transparent">
        {/* Left side */}
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="text-white cursor-pointer font-cursive">
            <AiOutlineMenu size={25} />
          </div>
          <h1 className="px-2 text-xl text-white sm:text-3xl lg:text-4xl">
            <span className="px-4 font-bold font-cursive">Foodies </span>
          </h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="p-2 text-white bg-black rounded-full">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>

        {/* Search Input */}
        <div className="bg-gray-200 rounded-full hidden md:flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="w-full p-2 bg-transparent focus:outline-none"
            type="text"
            placeholder="Search foods"
          />
        </div>

        {/* Sign Up Button (Mobile only) */}
        <div className="block ml-4 md:hidden">
          <Link to="/signup">
            <span className="px-5 py-2 rounded-md hover:scale-105 hover:shadow-xl btn-grad">
              Sign Up
            </span>
          </Link>
        </div>

        {/* Header (Mobile only) */}
        <div className="hidden md:block ">
          <Header />
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        {nav && (
          <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black/80"></div>
        )}

        {/* Side drawer menu */}
        <div
          className={nav
            ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute cursor-pointer right-4 top-4"
          />
          <h2 className="p-4 text-2xl">
            <span className="font-bold font-cursive">Foodies</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-2 text-gray-800">
              {menuItems.map(({ icon, text }, index) => (
                <li key={index} className="flex items-center w-1/2 p-4 mx-auto text-lg rounded-md cursor-pointer hover:text-white hover:bg-black">
                  {icon} 
                  <span className="whitespace-nowrap">{text}</span> {/* Forces text to stay on one line */}
                </li>
              ))}
            </ul>
            <div className="mt-4 ml-32">
              <Header />
            </div>
          </nav>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
