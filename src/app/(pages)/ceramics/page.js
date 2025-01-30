"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";

function Page() {
  const [selectedItem, setSelectedItem] = useState(null);
  const data = [
    {
      id: 1,
      image_src: "/img/n_large.webp",
      title: "Ceramic Handmade Pottery",
      price: 1300,
    },
    {
      id: 2,
      image_src: "/img/1616.webp",
      title: "Ceramics Are the Coolest",
      price: 1620,
    },
    {
      id: 3,
      image_src: "/img/center.jpg",
      title: "Mansfield Ceramics",
      price: 1000,
    },
    {
      id: 4,
      image_src: "/img/Out.png",
      title: "Moroccan Ceramics & Pottery",
      price: 1220,
    },
    {
      id: 5,
      image_src: "/img/1024x.webp",
      title: "Signature Style – Soul Ceramics",
      price: 1230,
    },
    {
      id: 6,
      image_src: "/img/side_B.webp",
      title: "Ceramic art | Cerámica Wiki",
      price: 1420,
    },
    {
      id: 7,
      image_src: "/img/_XT39854.jpg",
      title: "Laima Ceramics",
      price: 1260,
    },
    {
      id: 8,
      image_src: "/img/exq.avif",
      title: "Exquisite Handmade Ceramic",
      price: 1400,
    },
  ];

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="flex items-center justify-center">
          <p className="text-[30px] font-serif">Ceramics</p>
        </div>
        <div className="grid grid-cols-4 gap-10 px-16 py-6">
          {data.map((item, index) => (
            <a key={item.id} href={`/ceramics/${item.id}`}>
              <div className="">
                <img
                  src={item.image_src}
                  className="w-full h-[300px] cursor-pointer rounded-xl"
                  onClick={() => handleImageClick(item)}
                />
                <p className="text-[20px] font-serif items-center cursor-pointer hover:underline">
                  {item.title}
                </p>
                <p className="text-[18px] font-semibold">${item.price}</p>
              </div>
            </a>
          ))}
        </div>

        {selectedItem && <Index selectedItem={selectedItem} />}
      </div>
    </>
  );
}

export default Page;
