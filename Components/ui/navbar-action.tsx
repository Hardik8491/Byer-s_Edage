"use client";

import React, { useEffect, useState } from "react";
import Button from "./button";
import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {
  const [isMounted,setIsMounted]=useState(false);
  useEffect(()=>{
    setIsMounted(true);
  },[]);

  if(!isMounted){
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className=" flex items-center bg-black px-4 py-2 rounded-full">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium ">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
