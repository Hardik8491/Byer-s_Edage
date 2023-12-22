import Link from "next/link";
import React from "react";
import LanguageSelector from "./languages";

const TopHeader = () => {
  return (
    <div className="bg-black md:flex flex-col hidden   md:flex-row w-full justify-around h-[48px] items-center md:items-center">
      <div className="flex flex-col  md:flex-row md:items-center">
        <h1 className="font-thin  text-center md:text-left md:mr-4">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
        <Link href="Products/shall">
          <span className="mt-2 md:mt-0 font-semibold hover:underline sine-text cursor-pointer">
            ShopNow
          </span>
        </Link>
      </div>
      <div className="mt-4 md:mt-0 hidden md:flex">
        <LanguageSelector />
      </div>
    </div>
  );
};

export default TopHeader;