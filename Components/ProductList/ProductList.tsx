"use client";
import React, { useEffect, useState } from "react";
import Times from "../Timex/Times";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Product from "../Products/Product/Product";

import useProducts from "@/actions/useProducts";

const ProductList = async () => {
  const { products } = useProducts();

  const [index, setIndex] = useState(4);

  const handleMore = () => {
    if (index < 20) {
      setIndex(index + 9);
    } else {
      setIndex(4);
    }
  };

  return (
    <div className="px-[135px] py-10 ">
      <div className="flex items-center gap-2 ">
        <div className="bg-[#DB4444] border-2 h-12 w-5 rounded-md border-[#DB4444] " />
        <p className="text-[#DB4444] font-semibold text-base">Today's</p>
      </div>

      <div className="flex justify-between py-4 ">
        <div className="flex items-center gap-10 text-black">
          <h1 className="text-3xl font-bold">Flash Sales</h1>
          <div>
            <Times />{" "}
          </div>
        </div>
        <div className="cursor-pointer bg-transparent flex items-center gap-2 ">
          <div className="p-4 bg-gray-100 rounded-full">
            <GoArrowLeft color="black" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full ">
            <GoArrowRight color="black" />
          </div>
        </div>
      </div>
      <div className=" grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  mt-2 mx-auto">
        {products &&
          products?.length &&
          products
            .slice(0, index)
            .map((product) => <Product key={product?.id} product={product} />)}
      </div>
      <div className="cursor-pointer ring-offset-0 w-full flex justify-center mt-10 items-center">
        {index <= 20 ? (
          <button
            onClick={handleMore}
            className=" h-14 w-64 border-1 rounded-md bg-[#DB4444]  ">
            View All Products
          </button>
        ) : (
          <button
            onClick={handleMore}
            className=" h-14 w-64 border-1 rounded-md bg-[#DB4444]  ">
            View Less Products
          </button>
        )}
      </div>
      <hr className="bg-gray-300 border-none mt-10 py-[0.4px]" />
    </div>
  );
};

export default ProductList;
