"use client";
import Navbar from "@/app/components/Navbar";
import { useState } from "react";

export default function ServicesCard() {
  const [data, setData] = useState([]);

  
  async function fetchTotalReactPackages() {
    try {
      const response = await fetch("https://api.restful-api.dev/objects");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  
  function handleItemClick(id) {
    alert(`The ID of the clicked item is: ${id}`);
  }

  return (
    <div>
      <Navbar />
      <button onClick={fetchTotalReactPackages}>Click Me</button>
      <div>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div 
              key={index} 
              onClick={() => handleItemClick(item.id)} 
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}
