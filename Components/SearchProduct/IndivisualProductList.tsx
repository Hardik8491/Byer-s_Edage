"use client";

import { usePathname } from "next/navigation";

import StarRatting from "@/Components/Stars/StarRatting";
import getProduct from "@/actions/useProducts";
import { useRouter } from "next/navigation";
import { CiStar } from "react-icons/ci";

import { disconnect } from "process";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShow, BiSolidStar } from "react-icons/bi";
import { FiStar } from "react-icons/fi";
import Img from "next/image";

interface ProductProps {
  id?: string;
  name?: string;
  description: string;
  images: string | null;
  imageurl?: string;
  price: number;
  rating?: {
    rate: number;
    count: number;
  };
}

const IndividualProduct: React.FC<ProductProps> = async ({
  id,
  images,
  price,
  rating,
  name,
  description,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const img = !!images?.length ? images[0]?.url : "";
  const offer = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
  const ratingCount = Math.floor(Math.random() * (20000 - 1 + 1)) + 1;

  let discount = parseInt((offer / 100) * price);
  let DiscPrice = price - discount;
  const rat = Math.floor(Math.random() * 4.5) + 1.2;
  return (
    <div
      className="relative h-full gap-4 flex border border-t border-l-0 border-r-0 py-6 "
      onClick={() => router.push(`/products/${id}`)}
    >
      <div className="bg-gray-100 relative w-[36rem] h">
        <div className="  absolute   items-start w-full flex justify-between ">
          {/* <div className="bg-[#DB4444] border-2 shadow-xl h-5 justify-center w-12 rounded-sm ml-2 mt-2  items-center text-center flex text-xs font-sans  border-[#DB4444] ">
            -{offer}%
          </div> */}
          <div className="fill-black w-full  text-black list-none  flex justify-between gap-2  m-4   ">
            <li className="p-1 rounded-full bg-white  border  ">
              <AiOutlineHeart
                onClick={() => router.push("/account/reviews")}
                style={{ cursor: "pointer" }}
              />
            </li>
            <li className="p-1 rounded-full bg-white border  ">
              <BiShow
                onClick={() => router.push(`/products/${id}`)}
                style={{ cursor: "pointer" }}
              />
            </li>
          </div>
        </div>
        <div className=" bg-gray-200 p-4 w-full h-full   flex items-center justify-center">
          <img
            src={img}
              // width={40}
              // height={40}
            
            className="w-full h-full object-contain " alt={""}          />
        </div>
      </div>
      <div className="flex mx-4 w-full flex-col items-start">
        <div className="text-lg font-thin flex items-center justify-between  w-full text-black mt px-2 ">
          <div className=" font-semibold text-base pt-1">{name}</div>
          <div className=" flex-col flex items-center  cursor-text text-xl font-semibold text-black  ">
            {" "}
            ${DiscPrice}{" "}
            <div className="flex items-center gap-2">
              <span className=" text-gray-500 font-light text-base line-through">
                ${price}
              </span>{" "}
              <span className=" text-[#388e3c] font-semibold text-xs ">
                {offer}% offer
              </span>{" "}
            </div>
          </div>
        </div>

        <div className=" cursor-text font-semibold flex items-center  gap-2 ">
          {" "}
          <div className="flex items-center justify-center text-sm gap-1 p-2  h-5 w-12 border-[#388e3c] bg-[#388e3c] rounded-sm ">
            <span className="text-white">{rat || 3.3}</span>{" "}
            <span className="">
              {/* h-5 w-12 border-[#388e3c] bg-[#388e3c] rounded-sm */}

              <BiSolidStar className="text-#FFAD33 h-4 w-4" fill="white" />
            </span>
            {/* <StarRatting /> */}
          </div>
          <span className="text-gray-400 text-sm">({ratingCount || 505})</span>
        </div>
        <div className="text-sm max-w-md pb-2">
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minus
          tempora possimus iusto nemo explicabo quo ea eaque! Fuga atque
          repellat dignissimos ad deleniti ipsa! Consectetur nihil, impedit
          necessitatibus neque quod eaque perspiciatis, aliquam aperiam sunt
          rerum sit molestiae natus quis autem perferendis, assumenda molestias.
          Veniam recusandae commodi officiis dignissimos saepe omnis, quisquam
          dolore eius! */}
          {description}
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
