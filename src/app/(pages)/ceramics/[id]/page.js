"use client";

import { useEffect, useState } from "react";
import { usePathname, useParams } from "next/navigation";
// const searchParams = useParams();

// const param = searchParams.get('id')

const data = [
  {
    id: 1,
    image_src: "/img/n_large.webp",
    title: "Ceramic Handmade Pottery",
    price: 1300,
    deciription:
      "Ceramic pots can be a good choice for plants because they can help maintain optimal soil moisture and promote healthy growth. Here are some benefits of ceramic pots: ",
  },
  {
    id: 2,
    image_src: "/img/1616.webp",
    title: "Ceramics Are the Coolest",
    price: 1620,
    deciription:
      "Ceramic pots can be a good choice for plants because they can help maintain optimal soil moisture and promote healthy growth. Here are some benefits of ceramic pots: ",
  },
  {
    id: 3,
    image_src: "/img/center.jpg",
    title: "Mansfield Ceramics",
    price: 1000,
    deciription:
      "Ceramic pots can be a good choice for plants because they can help maintain optimal soil moisture and promote healthy growth. Here are some benefits of ceramic pots: ",
  },
  {
    id: 4,
    image_src: "/img/Out.png",
    title: "Moroccan Ceramics & Pottery",
    price: 1220,
    deciription:
      "Ceramic pots can be a good choice for plants because they can help maintain optimal soil moisture and promote healthy growth. Here are some benefits of ceramic pots: ",
  },
  {
    id: 5,
    image_src: "/img/1024x.webp",
    title: "Signature Style – Soul Ceramics",
    price: 1230,
    deciription:
      "Ceramic pots can be a good choice for plants because they can help maintain optimal soil moisture and promote healthy growth. Here are some benefits of ceramic pots: ",
  },
  {
    id: 6,
    image_src: "/img/side_B.webp",
    title: "Ceramic art | Cerámica Wiki",
    price: 1420,
    deciription:
      "Ceramic pots can be a good choice for plants because they can help maintain optimal soil moisture and promote healthy growth. Here are some benefits of ceramic pots: ",
  },
  {
    id: 7,
    image_src: "/img/_XT39854.jpg",
    title: "Laima Ceramics",
    price: 1260,
    deciription:
      "Ceramic pots can be a good choice for plants because they can help maintain optimal soil moisture and promote healthy growth. Here are some benefits of ceramic pots: ",
  },
  {
    id: 8,
    image_src: "/img/exq.avif",
    title: "Exquisite Handmade Ceramic",
    price: 1400,
    deciription:
      "Ceramic pots can be a good choice for plants because they can help maintain optimal soil moisture and promote healthy growth. Here are some benefits of ceramic pots: ",
  },
];

const DisplayFilteredItem = () => {
  const pathname = usePathname();
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const id = pathname.split("/").pop();
    const item = data.find((item) => item.id === parseInt(id, 10));
    setSelectedItem(item);
  }, [pathname]);

  if (!selectedItem) {
    return (
      <div className="flex items-center justify-center py-24 font-serif text-[72px]">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <p className="text-[30px] font-serif mb-5">Buy Now</p>
      <img
        src={selectedItem.image_src}
        alt={selectedItem.title}
        className="w-[300px] h-[300px] rounded-xl"
      />
      <h1 className="text-[30px] font-serif mt-5">{selectedItem.title}</h1>
      <p className="text-[20px] font-serif">${selectedItem.price}</p>
      <p className="text-[20px] font-semibold text-center px-[40%]">
        {selectedItem.deciription}
      </p>
      {/* <p>{selectedItem.id}</p> */}
      <p>{id}</p>
    </div>
  );
};

export default DisplayFilteredItem;
