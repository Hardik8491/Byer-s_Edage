"use client";
import React, { useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import MyCarousel from "../test/MyCarousel";
const OurProduct = () => {
  // const itmes = new Array(8).fill(<Product product={""} />);
  const [offset, setOffset] = useState(0);
  return (
    <div className="px-[135px] py-10 ">
      <div className="flex items-center gap-2 ">
        <div className="bg-[#DB4444] border-2 h-12 w-5 rounded-md border-[#DB4444] " />
        <p className="text-[#DB4444] font-semibold text-base">Our Products</p>
      </div>
      <div className="flex justify-between py-4 ">
        <div className="flex items-center gap-10 text-black">
          <h1 className="text-3xl font-bold">Explore Our Products</h1>
        </div>
        <div className="cursor-pointer bg-transparent flex items-center gap-2 ">
          <div
            className="p-4 bg-gray-100 rounded-full"
            onClick={(e) => setOffset(offset - 100)}>
            <GoArrowLeft color="black" />
          </div>
          <div
            className="p-4 bg-gray-100 rounded-full "
            onClick={(e) => setOffset(offset + 100)}>
            <GoArrowRight color="black" />
          </div>
        </div>
      </div>
     <div>
     
     </div>
      <div>
      
      </div>

      <div className="cursor-pointer ring-offset-0 w-full flex justify-center mt-10 items-center">
        <button className=" h-14 w-64 border-1 rounded-md bg-[#DB4444]  ">
          View All Products
        </button>
      </div>
      <hr className="bg-gray-300 border-none mt-10 py-[0.4px]" />
    </div>
  );
};

export default OurProduct;
