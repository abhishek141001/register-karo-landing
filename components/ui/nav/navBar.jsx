'use client';
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Button } from "../button";
import { navItems,components } from "@/assets/data";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex justify-between items-center py-4 px-6 xl:px-20">
        {/* Logo */}
        <img src="logo.svg" alt="Company Logo" className="h-10" />

        {/* Hamburger Menu for Mobile */}
        <button
          className="block lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center">
            {navItems.map((item) =>
              item.id === 2 ? (
                <li
                  key={item.id}
                  className="relative group mx-4"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className="flex items-center hover:text-[#FFA229] transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {item.name}
                    <span className="ml-1">{isDropdownOpen ? <FaAngleUp/> : <FaAngleDown/>}</span>
                  </button>
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <ul className="absolute bg-white border border-gray-200 shadow-md mt-2 rounded-md w-60">
                      {components.map((component) => (
                        <li key={component.title} className="p-2 hover:bg-gray-100">
                          <a
                            href={component.href}
                            className="block text-gray-800 hover:text-[#FFA229]"
                          >
                            {component.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.id} className="mx-4">
                  <a
                    href={item.href}
                    className="hover:text-[#FFA229] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              )
            )}
            <li className="mx-4">
              <CiSearch size={24} className="cursor-pointer" aria-label="Search" />
            </li>
            <li>
              <Button className="bg-[#FFA229] text-white px-6 text-base font-semibold hover:bg-[#e0911f] transition-colors duration-200">
                Talk an Expert
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden">
          <ul className="flex flex-col items-center bg-white py-4 border-t border-gray-200">
            {navItems.map((item) =>
              item.id === 2 ? (
                <li key={item.id} className="w-full">
                  {/* Dropdown Toggle */}
                  <button
                    className="flex justify-center items-center w-full px-6 py-3 text-gray-800 hover:text-[#FFA229] transition-colors"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {item.name}
                    <span>{isDropdownOpen ? <FaAngleUp/> : <FaAngleDown/>}</span>
                  </button>
                  {isDropdownOpen && (
                    <ul className="bg-gray-50 flex flex-col items-center">
                      {components.map((component) => (
                        <li key={component.title} className="px-6 py-2 hover:bg-gray-100">
                          <a
                            href={component.href}
                            className="block text-gray-800 hover:text-[#FFA229]"
                          >
                            {component.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.id} className="py-2">
                  <a
                    href={item.href}
                    className="text-gray-800 hover:text-[#FFA229] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              )
            )}
            <div className="flex items-center justify-center mt-4">
              <CiSearch size={24} className="cursor-pointer mr-4" aria-label="Search" />
              <Button className="bg-[#FFA229] text-white hover:bg-[#e0911f] transition-colors duration-200">
                Talk to an Expert
              </Button>
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}
