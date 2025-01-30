"use client";
import React, { useState } from "react";

const data = [
  {
    id: 1,
    image_src: "/img/81.webp",
    title: "White Round (Premium Plastic)",
    price: "120",
  },
  {
    id: 2,
    image_src: "/img/01.webp",
    title: "Daintree Large Plant Pot – Dibor",
    price: "220",
  },
  {
    id: 3,
    image_src: "/img/1000x1000.webp",
    title: "Green & White Ceramic Scallop",
    price: "1420",
  },
  {
    id: 4,
    image_src: "/img/Coffea-arabica-Coffee-Plant-12x35cm-Gerben.webp",
    title: "Plant Pots | Hortology",
    price: "1820",
  },
  {
    id: 5,
    image_src: "/img/disc-modern-plant-pot-185336.webp",
    title: "Modern Plant Pot",
    price: "220",
  },
  {
    id: 6,
    image_src: "/img/spider.webp",
    title: "RAINBOW (Ceramic)",
    price: "1420",
  },
  {
    id: 7,
    image_src: "/img/8abc.webp",
    title: "Seylerra Plant Pot",
    price: "120",
  },
  {
    id: 8,
    image_src: "/img/12ad.webp",
    title: "Green Range Plant Pot",
    price: "1820",
  },
];

function PlantPot() {
  const [selectedItem, setSelectedItem] = useState(null);

  const FcloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <p className="text-[30px] font-serif">Plant Pot</p>
      </div>

      <div className="grid grid-cols-4 gap-10 px-16 py-6">
        {data.map((item, index) => (
          <div key={index}>
            <img
              src={item.image_src}
              className="w-full h-[300px] cursor-pointer hover:border"
              onClick={() => setSelectedItem(item)}
            />
            <p className="text-[20px] font-serif text-center">{item.title}</p>
            <p className="text-[18px] font-semibold text-center">
              ${item.price}
            </p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-[500px] text-center relative">
            <button
              className="absolute top-2 right-2 h-fit  font-bold text-[20px]"
              onClick={() => setSelectedItem(null)}
            >
              ❌
            </button>
            <h2 className="text-[24px] font-serif mb-4">
              {selectedItem.title}
            </h2>
            <img
              src={selectedItem.image_src}
              className="w-full h-[300px] rounded-lg mb-4"
            />
            <p className="text-[20px] font-serif mb-4">
              Price: ${selectedItem.price}
            </p>
            <button className="px-6 py-2 bg-[green] text-white rounded-lg hover:bg-green-800">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlantPot;
