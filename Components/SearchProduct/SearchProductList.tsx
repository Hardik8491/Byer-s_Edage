"use client";
import useProducts from "@/actions/useProducts";
import React, { SetStateAction, useEffect, useState } from "react";
import { Product as ProductProps } from "@/type";
import IndividualProduct from "./IndivisualProductList";
import { Star } from "lucide-react";
import { IoIosStar } from "react-icons/io";

import { usePathname } from 'next/navigation'
import router from "next/router";
// import QuerySearch from "../Query/QuerySearch";

const SearchProductList = () => {
  const { products } = useProducts();
  const pathname = usePathname()
  let newpath=pathname.replace("/","")

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getCoins = async () => {
      const response = await fetch("/api/coins");
      const coins = await response.json();
      setCoins(coins);
      // setCoins(coins.data.coins);
    };

    getCoins();
  }, []);

  return (
    <div className="bg-gray-100  h-screen py-2  w-full  flex gap-1 justify-between  ">
      <div className="flex p-2 border ml-2 text-black shadow-md bg-white  w-[350px]">
        <div className="flex flex-col w-full">
          <div className="w-full py-2">
            <span className="text-xl font-semibold b py-2 px-2">Filters</span>
          </div>
          <div className="flex flex-col px-2 border py-4 gap-2 text-sm  ">
            <p className="font-semibold text-xs text-black">CATEGORIES</p>
            <span className="text-sm text-black/70 font-normal"> Mobiles & Accessories</span>
            <p className="text-sm  px-2  font-medium ">Mobiles</p>
          </div>
          <div className="flex flex-col px-2 border py-4">
            <span className="text-base font-semibold">price</span>
            <span className="">
               
              <span className="flex items-center bg-slate-200 pt-4  ">
              <div className="h-2 w-2 p-2 rounded-full border-gray-800 border"/>
                <div className="w-full h-1 bg-red-600" />
                <div className="h-2 w-2 p-2 rounded-full border-gray-800  border "/>
              </span>
              <div className="flex items-center py-2 gap-2">
                <div className="flex flex-col border  px-1 w-full">min</div>
                <div className="text-black/75">to</div>
                <div className="flex flex-col border  px-1 w-full">60000+</div>
              </div>
            </span>
          </div>
          <div className="flex gap-2  px-2 border py-4">
            <input type="checkbox" name="" id="" />
            <span>Brand</span>
          </div>
          <div className="flex gap-2  px-2 border py-4">
            <input type="checkbox" name="" id="" />
            <span>star price</span>
          </div>
          <div className="flex flex-col px-2 border py-4">
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <span className="flex items-center">
                4 <IoIosStar className="w-3 h-3 mr-1" /> & above{" "}
              </span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <span className="flex items-center">
                3 <IoIosStar className="w-3 h-3 mr-1" /> & above{" "}
              </span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <span className="flex items-center">
                2<IoIosStar className="w-3 h-3 mr-1" /> & above{" "}
              </span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <span className="flex items-center">
                1 <IoIosStar className="w-3 h-3 mr-1" /> & above{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-black bg-white shadow-md px-2  border w-full mx-1 mr-2  ">
        <div className="px-4 py-10  ">
          <div className="text-md font-semibold  text-gray-600 ">
            <span className="pr-4">Home</span>
            <span>/</span>
            <span className="text-black px-4">{newpath}</span>
          </div>
        </div>

        <div className="border flex items-center border-gray-500 bg-red-100">
         {/* path of items */}
        </div>
        {/* product list */}
        <div className="grid grid-flow-row-dense h-full overflow-scroll   grid-cols-1  mt-2 mx-auto">
          {products &&
            products?.length &&
            products
              .slice(0, 8)
              .map((product: ProductProps, index) => (
                <IndividualProduct key={index} {...product} />
              ))}
        </div>
         {/* <QuerySearch getSearchResults={(results: SetStateAction<never[]>) => setCoins(results)} coins={coins} /> */}
      </div>
    </div>
  );
};

export default SearchProductList;
