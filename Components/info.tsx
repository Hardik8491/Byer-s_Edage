"use client";

import { ShoppingCart } from "lucide-react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdStarOutline } from "react-icons/io";

import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { useState } from "react";
import Image from "next/image";
import { generateRandomStarRating } from "@/lib/utils";
import StarRating from "./Stars/StarRatting";

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {

  
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  }


    const [count, setCount] = useState(1);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
    const [rating, setRating] = useState(0);
 



  return ( 
    <div className="text-black ml-4 text-base">
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="flex items-center gap-2 text-xs">
         <StarRating/>
        <span className="text-gray-500">(150 Reviews)</span>
        <span>|</span>
        <span className="text-xs text-[#00FF66]">In Stock</span>
      </div>
      <div className="mt-2 flex items-end justify-between text-base text-black">
        <p className="text-xl font-thin text-gray-800 py-2">
          <Currency value={data?.price} />
        </p>
      </div>
      <div className="text-xs max-w-md">
        <span>
          PlayStation % Controller Skin High quality vinl with ari channel adhesive fir bubble free install & mess free removal PRessire
        </span>
      </div>

      <div className="my-4 max-w-md border border-gray-400 "/>

      <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
            <div className="flex items-center gap-2 py- text-xs font-semibold">
            <div className="h-4 w-4 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
            <div className="h-4 w-4 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
            </div>
        
            </div>
         

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>

            <div className="flex items-center gap-2 py-4 text-xs font-semibold">
                <div className=" h-6 w-6 border-gray-400 border flex items-center gap-2 justify-center p-2 rounded-md " >S</div>
                <div className=" h-6 w-6 border-gray-400 border flex bg-[#DB4444] text-white items-center gap-2 justify-center p-2 rounded-md" >M</div>
                <div className=" h-6 w-6 border-gray-400 border flex items-center gap-2 justify-center p-2 rounded-md" >L</div>
                <div className=" h-6 w-6 border-gray-400 border flex items-center gap-2 justify-center p-2 rounded-md" >XL</div>
                <div className=" h-6 w-6 border-gray-400 border flex items-center gap-2 justify-center p-2 rounded-md" >2XL</div>
            </div>
{/*             
            {data?.size?.value} */}
          </div>
        </div>
       
      </div>
      <div className="flex items-center gap-4 w-full py-4   ">
       {/* counter button */}

       <div className=" flex items-center justify-between  border-gray-500  h-8 w-28  rounded-sm  ">
       <button  className=" h-8 w-8 border-gray-500  border-r-0 border rounded-l-sm active:bg-[#DB4444] active:border-[#DB4444] active:text-white " onClick={increment}>+</button>
       <button className=" text-base h-8 w-16 font-bold  border border-gray-500">{count}</button>
       <button  className=" h-8  w-8  border border-l-0 border-gray-500 rounded-r-sm active:bg-[#DB4444] active:border-[#DB4444] active:text-white"  onClick={decrement}>-</button>
       </div>
       <div>
         <button className="bg-[#DB4444] border-[#DB4444] h-8 w-32  rounded-sm text-white  ">
          Buy Now
         </button>
       </div>
       <div className="border border-gray-500 p-2 rounded-sm ">
       <span className="">
        <AiOutlineHeart className=""/>
       </span>
       </div>
      </div>

      <div className="border border-gray-400 py-4 flex flex-col gap-4 max-w-xs shadow-sm rounded-sm ">
      <div className="flex items-center gap-4 px-2">
          <span>
            <Image src="/icon-delivery.jpg" width={40} height={40} alt={"img"} ></Image>
          </span>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold">Free Delivery</span>
          <span className="text-[10px] font-semibold underline">Enter your postal code for Delivery Availability</span>

          </div>

        </div>

        <div className=" border border-gray-400 "></div>

        

        <div className="flex items-center gap-4 px-2 ">
          <span>
          <Image src="/Icon-return.jpg" width={40} height={40} alt={"img"} ></Image>
          </span>
        <div className="flex flex-col gap-1 ">
          <span className="text-sm font-bold">Return Delivery</span>
          <span className="text-[10px] font-semibold ">Free 30 Days Delivery Returns. <span className="underline">Details</span></span>

          </div>

        </div>
            
      </div>
      {/* <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div> */}
    </div>
  );
}
 
export default Info;

