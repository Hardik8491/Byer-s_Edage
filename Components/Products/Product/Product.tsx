"use client";

import getProduct from "@/actions/useProducts";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShow, BiSolidStar } from "react-icons/bi";
import { FiStar } from "react-icons/fi";

const Product = ({ product }: { product: string }) => {

  return (
    <div className="relative h-full    w-[290px] transform transition-transform hover:translate-y-[-5px] hover:shadow-lg  ">
      <div className="bg-gray-200">
        <div className="  absolute  mt-1 items-start w-full flex justify-between ">
          <div className="bg-[#DB4444] border-2 shadow-xl h-5 justify-center w-12 rounded-sm ml-2 mt-2  items-center text-center flex text-xs font-sans  border-[#DB4444] ">
            -30%
          </div>
          <div className="fill-black text-black list-none  flex flex-col gap-2 mr-1 mt-1   ">
            <li className="p-2 rounded-full bg-white ">
              <AiOutlineHeart />
            </li>
            <li className="p-2 rounded-full bg-white ">
              <BiShow />
            </li>
          </div>
        </div>
        <div className="bg-gray-100 pt-10  flex items-center justify-center">
          <img
            src={product?.image || product.imageurl}
            height={150}
            width={150}
          />
        </div>
      </div>

      <div className="text-lg font-thin text-black mt px-2 ">
        <div className=" font-semibold text-base py-2">
          {product?.title || product.name}
        </div>
        <div className=" pb-2 cursor-text font-normal text-red-600  ">
          {" "}
          ${product?.price}{" "}
          <span className=" text-gray-500 line-through">$160</span>{" "}
        </div>
        <div className="pb-2 cursor-text font-semibold flex items-center  gap-2 ">
          {" "}
          <div className="flex items-center justify-center text-sm h-5 w-12 border-[#388e3c] bg-[#388e3c] rounded-sm">
            <span className="text-white    ">{product?.rating?.rate}</span>{" "}
            <span className="">
              <BiSolidStar className="text-#FFAD33 h-4 w-4" fill="white" />
            </span>
          </div>
          <span className="text-gray-400 text-sm">
            ({product?.rating?.count})
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
