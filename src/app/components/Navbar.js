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
          <IoIosSearch size={24} className="cursor-pointer" />
        </div>

        <div className="text-2xl font-semibold">Avion</div>
        
        <div className="flex space-x-4 cursor-pointer">
          <HiOutlineShoppingCart size={24} />
          <FaRegUserCircle size={24} />
        </div>
      </nav>
      <div>
        <ul className="flex items-center justify-center space-x-5 md:space-x-10 py-4 text-sm md:text-base flex-wrap">
          <a
            className="hover:bg-[green] hover:text-[white]  border rounded-xl px-4 py-2 border-b-gray-500 font-serif cursor-pointer"
            href="/"
          >
            Home
          </a>
          <a
            className="hover:bg-[green] hover:text-[white]  border rounded-xl px-4 py-2 border-b-gray-500 font-serif cursor-pointer"
            href="/plantpot"
          >
            Plant pots
          </a>
          <a
            className="hover:bg-[green] hover:text-[white]  border rounded-xl px-4 py-2 border-b-gray-500 font-serif cursor-pointer"
            href="/ceramics"
          >
            Ceramics
          </a>
          <a
            className="hover:bg-[green] hover:text-[white]  border rounded-xl px-4 py-2 border-b-gray-500 font-serif cursor-pointer"
            href="/tables"
          >
            Tables
          </a>
          <a
            className="hover:bg-[green] hover:text-[white]  border rounded-xl px-4 py-2 border-b-gray-500 font-serif cursor-pointer"
            href="/chairs"
          >
            Chairs
          </a>
          <a
            className="hover:bg-[green] hover:text-[white]  border rounded-xl px-4 py-2 border-b-gray-500 font-serif cursor-pointer"
            href="/tableware"
          >
            Tableware
          </a>
          <a
            className="hover:bg-[green] hover:text-[white]  border rounded-xl px-4 py-2 border-b-gray-500 font-serif cursor-pointer"
            href="/cutlery"
          >
            Cutlery
          </a>
          <a
            className="hover:bg-[green] hover:text-[white]  border rounded-xl px-4 py-2 border-b-gray-500 font-serif cursor-pointer"
            href="/contact" 
          >
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
