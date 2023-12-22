"use client";

import StarRatting from "@/Components/Stars/StarRatting";
import getProduct from "@/actions/useProducts";
import { useRouter } from "next/navigation";
import { CiStar } from "react-icons/ci";

import { disconnect } from "process";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShow, BiSolidStar } from "react-icons/bi";
import { FiStar } from "react-icons/fi";

interface ProductProps {
  id?: string;
  name?: string;
  images: string | null;
  imageurl?: string;
  price: number;
  rating?: {
    rate: number;
    count: number;
  };
}

const Product: React.FC<ProductProps> = async ({
  id,
  images,
  price,
  rating,
  name,
}) => {


  const router = useRouter();

  const img = !!images?.length ? images[0]?.url : "";
  const offer = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
  const ratingCount = Math.floor(Math.random() * (20000 - 1 + 1)) + 1;

  let discount = parseInt((offer / 100) * price);
  let DiscPrice = price - discount;

  return (
    <div
      className="relative overflow-hidden shadow-sm rounded-md h-full w-full sm:w-[230px] transform transition-transform hover:translate-y-[-5px] hover:shadow-lg"
      onClick={() => router.push(`/products/${id}`)}
    >
      <div className="bg-gray-200 ">
        <div className="absolute mt-1 items-start w-full flex justify-between">
          <div className="bg-[#DB4444] border-2 shadow-xl h-5 justify-center w-12 rounded-sm ml-2 mt-2 items-center text-center flex text-xs font-sans border-[#DB4444]">
            -{offer}%
          </div>

          <div className="fill-black text-black list-none flex flex-col gap-2 mr-1 mt-1 ">
            <li className="p-1 rounded-full bg-white">
              <AiOutlineHeart
                onClick={() => router.push("/account/reviews")}
                style={{ cursor: "pointer" }}
              />
            </li>

            <li className="p-1 rounded-full bg-white">
              <BiShow
                onClick={() => router.push(`/products/${id}`)}
                style={{ cursor: "pointer" }}
              />
            </li>
          </div>
        </div>

        <div className="bg-gray-100 py-10 flex items-center justify-center">
          <img
            src={img}
            height={150}
            width={150}
            className="w-40 h-40 object-contain object-center"
          />
        </div>
      </div>

      <div className="text-lg font-thin text-black mt px-2">
        <div className="font-semibold text-base py-2">{name}</div>

        <div className="pb-2 cursor-text font-normal text-red-600">
          ${DiscPrice}{" "}
          <span className="text-gray-500 line-through">{price}</span>{" "}
        </div>

        <div className="pb-2 cursor-text font-semibold flex items-center gap-2">
          <div className="flex items-center justify-center text-sm">
            <StarRatting />
          </div>

          <span className="text-gray-400 text-sm">({ratingCount || 505})</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
