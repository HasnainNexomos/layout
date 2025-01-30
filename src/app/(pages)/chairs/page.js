"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";

function Page() {
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    {
      image_src: "/img/chair1.webp",
      title: "Garden Chairs Set",
      price: 2176,
    },
    {
      image_src: "/img/chair2.webp",
      title: "Cane Chair",
      price: 1276,
    },
    {
      image_src: "/img/chair3.jpg",
      title: "Gaming Chair",
      price: 1800,
    },
    {
      image_src: "/img/chair4.jpg",
      title: "Brown Stylish Plastic Chair",
      price: 900,
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        <div className="flex items-center justify-center">
          <p className="text-[30px] font-serif">Chairs</p>
        </div>
        <div className="grid grid-cols-4 gap-10 px-16 py-6">
          {data.map((item, index) => (
            <div key={index} className="">
              <img
                src={item.image_src}
                className="w-full h-[300px] cursor-pointer hover:border"
                onClick={() => setSelectedItem(item)}
              />
              <p className="text-[20px] font-serif items-center">
                {item.title}
              </p>
              <p className="text-[18px] font-semibold items-center">
                ${item.price}
              </p>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-[500px] text-center relative">
              <button
                className="absolute top-2 right-2 text-black font-bold text-[20px]"
                onClick={() => setSelectedItem(null)}
              >
                ❌
              </button>
              <h2 className="text-[24px] font-bold mb-4">
                {selectedItem.title}
              </h2>
              <img
                src={selectedItem.image_src}
                className="w-full h-[300px] rounded-lg mb-4"
              />
              <p className="text-[20px] font-semibold mb-4">
                Price: ${selectedItem.price}
              </p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Page;
