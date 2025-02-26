import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaAngleDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <nav>
        <div className="flex px-4 sm:px-8 lg:px-40 py-3 justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col mt-[-6px] hover:cursor-pointer">
              <h2 className="text-custom-blue font-bold font-mono w-32 text-2xl">
                accredian
              </h2>
              <p className="text-[10px] mt-[-8px] opacity-60 ml-1">
                Credentials that matter
              </p>
            </div>
            <div className="hidden lg:block">
              <Button className="bg-custom-blue hover:bg-blue-600">
                Courses <FaAngleDown />
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <ul className="flex gap-4 items-center">
              <li className="hover:cursor-pointer font-medium text-gray-700 hover:text-custom-blue transition-colors">Refer & earn</li>
              <li className="hover:cursor-pointer font-medium text-gray-700 hover:text-custom-blue transition-colors">Resource</li>
              <li className="font-medium text-gray-700">About Us</li>
              <li className="hover:cursor-pointer">
                <Button className="bg-slate-200 text-slate-700 hover:bg-slate-300">Login</Button>
              </li>
              <li className="hover:cursor-pointer">
                <Button className="bg-custom-blue hover:bg-blue-600">Try for free</Button>
              </li>
            </ul>
          </div>
          <div className="lg:hidden flex items-center gap-2">
            
            <Button className="bg-custom-blue hover:bg-blue-600 text-sm">
              Explore
            </Button>
            
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? (
                <IoMdClose className="text-2xl" />
              ) : (
                <RxHamburgerMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu Slide-in */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu}>
                <IoMdClose className="text-2xl" />
              </button>
            </div>
            <div className="p-4">
              <Button className="bg-custom-blue hover:bg-blue-600 w-full mb-6 flex items-center justify-center">
                Courses <FaAngleDown className="ml-2" />
              </Button>
              <ul className="flex flex-col gap-6">
                <li className="hover:cursor-pointer font-medium text-gray-700 hover:text-custom-blue transition-colors">Refer & earn</li>
                <li className="hover:cursor-pointer font-medium text-gray-700 hover:text-custom-blue transition-colors">Resource</li>
                <li className="font-medium text-gray-700">About Us</li>
                <li className="hover:cursor-pointer">
                  <Button className="bg-slate-200 text-slate-700 w-full hover:bg-slate-300">Login</Button>
                </li>
                <li className="hover:cursor-pointer">
                  <Button className="bg-custom-blue hover:bg-blue-600 w-full">Try for free</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;