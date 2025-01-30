"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";

function Page() {
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    {
      image_src: "/img/n_800x.webp",
      title: "3 Piece Nesting Coffee Table",
      price: 1100,
    },
    {
      image_src: "/img/conte_center_table.webp",
      title: "Conte Center Table",
      price: 5000,
    },
    {
      image_src: "/img/WK_Seito_0017_tif_584372fb43.jpg",
      title: "Seito Wood Table | Walter Knoll",
      price: 800,
    },
    {
      image_src: "/img/brown-black-2-2.jpg",
      title: "Home Office Table",
      price: 400,
    },
    {
      image_src: "/img/qfbx.webp",
      title: "Edge Wooden Table",
      price: 900,
    },
    {
      image_src: "/img/dining-table].jpg",
      title: "Expandable Dining Table ",
      price: 600,
    },
    {
      image_src: "/img/ste.webp",
      title: "Steelcase - Tables",
      price: 500,
    },
    {
      image_src: "/img/data.jpg",
      title: "Study Tables",
      price: 1500,
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        <div className="flex items-center justify-center">
          <p className="text-[30px] font-serif">Tables</p>
        </div>
        <div className="grid grid-cols-4 gap-10 px-16 py-6">
          {data.map((item, index) => (
            <div key={index} className="">
              <img
                src={item.image_src}
                className="w-full h-[300px] cursor-pointer"
                onClick={() => setSelectedItem(item)}
              />
              <p className="text-[20px] font-serif items-center">{item.title}</p>
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
              <h2 className="text-[24px] font-bold mb-4">{selectedItem.title}</h2>
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
