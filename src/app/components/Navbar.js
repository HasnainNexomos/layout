"use client";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
    
      <nav className="flex items-center justify-between px-5 py-4">
    
        <div>
          <IoIosSearch size={24} />
        </div>

        <div className="text-2xl font-semibold">Avion</div>

        <div className="flex space-x-4">
          <HiOutlineShoppingCart size={24} />
          <FaRegUserCircle size={24} />
        </div>
      </nav>

 
      <div>
        <ul className="flex items-center justify-center space-x-5 md:space-x-10 py-4 text-sm md:text-base flex-wrap">
          <li className="hover:underline cursor-pointer">Plant pots</li>
          <li className="hover:underline cursor-pointer">Ceramics</li>
          <li className="hover:underline cursor-pointer">Tables</li>
          <li className="hover:underline cursor-pointer">Chairs</li>
          <li className="hover:underline cursor-pointer">Crockery</li>
          <li className="hover:underline cursor-pointer">Tableware</li>
          <li className="hover:underline cursor-pointer">Cutlery</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
