"use client";
import React, { useState } from "react";
import Banner from "../Banner/Banner";
import ProductList from "../ProductList/ProductList";
import Categories from "../ProductList/Categories/Categories";
import BestProduct from "../Products/Best Selling Products/BestProduct";
import ItemBanner from "../ItemBanner/ItemBanner";
import OurProduct from "../OverProduct/OurProduct";
import Featured from "../Featured/Featured";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useRouter } from "next/navigation";
import ShallingProduct from "../Products/Best Selling Products/ShallingProduct";
import Cart from "@/app/Cart/page";

const HomeBar = () => {
  const router = useRouter();
  const categories = [
    {
      label: "Men`s Fashion",
      value: "/",
    },
    {
      label: "Electronics",
      value: "/",
    },
    {
      label: "Home & Lifestyle",
      value: "/",
    },
    {
      label: "Medicine",
      value: "/",
    },
    {
      label: "Baby`s & Toy",
      value: "/",
    },
    {
      label: "Groceries & Pets",
      value: "/",
    },
    {
      label: "Health & Beauty",
      value: "/",
    },
  ];



  return (
    <div className=" overflow-hidden">
      {/* <div className="flex items-center  flex-row  text-black px-[135px] w-full h-fit">
        <div className="flex flex-col gap-4 mt-4 w-1/6 mr-4   ">
          {categories.map((items:any,index:any)=>(
           <div onClick={()=>router.push(items.value)} className="hover:bg-red-500 hover:text-white px-2 py-2 rounded-md">
            {items.label}
         </div>

          )) }
         
        </div>


        
        <div className=" flex items-center mx-auto  z-1 text-gray-700 border-l-2 border-gray-300 pl-20 w-5/6 h-80">
          <Banner />
        </div>
      </div> */}

     
       
   
      <div className="flex items-center  flex-row  text-black  w-full px-4 h-fit">
        <Banner />
      </div>
      <ShallingProduct />
      <ProductList />
      <Categories />
      <BestProduct />

      <ItemBanner />
      <OurProduct />
      <Featured />

      <div>
        <div className=" flex bg-gray-200 ml-[1740px] w-10 rounded-full justify-center  m-4 h-10 items-center ">
          <AiOutlineArrowUp color="black" />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomeBar;
