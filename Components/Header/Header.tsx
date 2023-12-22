// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { MdMenu } from "react-icons/md";
// import React, { SetStateAction, useEffect, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { BiUser } from "react-icons/bi";
// import { AiOutlineHeart } from "react-icons/ai";
// import { PiShoppingCartLight } from "react-icons/pi";
// import Link from "next/link";
// import ProfileCard from "../Profile/ProfileCard";
// import { useSession } from "next-auth/react";
// import CategorySelect from "../Category/Category";
// import { MenuIcon } from "lucide-react";
// import { CiHeart } from "react-icons/ci";
// import Cart from "@/app/Cart/page";
// import QuerySearch from "../Query/QuerySearch";

// const Header = () => {
//   const allCategories = ["Category 1", "Category 2", "Category 3"];
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [path, setPath] = useState(false);
//   const [currTab, setCurrTab] = useState("Home");
//   const pathname = usePathname();
//   const [signIn, setSignIn] = useState(false);
//   const { data: session, status } = useSession();
//   const [profileTab, setProfileTab] = useState(false);
//   const [login, setLogin] = useState(false);

//   const handleCategorySelect = (category: any) => {
//     // Do something with the selected category, e.g., filter content
//     console.log("Selected category:", category);
//     setSelectedCategory(category);
//   };

//   const [isCartOpen, setCartOpen] = useState(false);

//   const handleCartToggle = () => {
//     setCartOpen(!isCartOpen);
//   };

//   const menus = [
//     { label: "Home", value: "/Home" },
//     { label: "Products", value: "/Home" },
//     { label: "Categories", value: "/Home" },
//     { label: "Page", value: "/Home" },
//     { label: "Campaign", value: "/Home" },
//     { label: "Offer", value: "/Home" },
//     { label: "Blog", value: "/Home" },
//     { label: "Review", value: "/Home" },
//     { label: "About", value: "/Home" },
//     { label: "Contact", value: "/Contact" },
//     // { label: "SignUp", value: "/Register" },
//   ];
//   const [coins, setCoins] = useState([]);

//   useEffect(() => {
//     const getCoins = async () => {
//       const response = await fetch("/api/coins");
//       const coins = await response.json();
//       setCoins(coins);
//       // setCoins(coins.data.coins);
//     };

//     getCoins();
//   }, []);

//   const profileToggle = () => {
//     setProfileTab(!profileTab);
//   };

//   const handleLogin = () => {
//     setLogin(!login);
//   };

//   useEffect(() => {
//     // Check if the session is active
//     if (status === "authenticated") {
//       // If session is active, set signIn to true
//       setSignIn(true);
//     } else {
//       // If session is not active, set signIn to false
//       setSignIn(false);
//     }
//   }, [session, status]);

//   const router = useRouter();

//   return (
//     <div className="text-black px-[10px] sm:px-[10px] md:px-[20px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] pt-4 sm:pt-[20px] sm:mb-1 font-normal mb-2 text-lg cursor-pointer">
//       {/* <button onClick={handleCartToggle}>Toggle Cart</button> */}

//       {/* <Cart isOpen={isCartOpen} onClose={handleCartToggle} /> */}
//       <div className="flex mb-3 list-none items-center lg:gap-10 justify-between ">
//         <div className=" flex flex-1 gap-2 items-center text-lg sm:text-2xl font-bold whitespace-nowrap">
//           <div className="sm:hidden p-1  rounded-md border-red-500 shadow-sm active:bg-red-700 bg-red-500 ">
//             <MenuIcon className="  w-4 h-4" />
//           </div>
//           <div
//             className=" text-xl text-[#DB4444] sm:text-2xl font-bold whitespace-nowrap  "
//             onClick={() => router.push("/")}
//           >
//             Buyer’s Edge
//           </div>
//         </div>
//         {/* Search Input */}
//         <QuerySearch getSearchResults={(results: SetStateAction<never[]>) => setCoins(results)} coins={coins} />

//         <div className="flex items-center  gap-8 justify-between  sm:gap-0 md:gap-4 lg:gap-10">
//           <li>
//             <CiHeart className="w-6 h-6 font-thin sm:w-7 sm:h-7" />
//           </li>
//           <li className="relative z-0">
//             <span className="absolute z-10 bg-red-500 rounded-full text-xs font-sans flex items-center justify-center  w-4 h-4 mt-1 left-4 -top-2 text-white cursor-pointer ">
//               5
//             </span>
//             <PiShoppingCartLight
//               className=" w-5 h-5 sm:w-7 sm:h-7"
//               onClick={handleCartToggle}
//             />
//           </li>
//           {signIn ? (
//             <li className="relative flex  flex-col items-center ">
//               <button onClick={profileToggle}>
//                 <BiUser
//                   className={`w-6 h-6 sm:w-8 sm:h-8 ${
//                     profileTab
//                       ? " relative bg-red-500 rounded-full p-1 text-white"
//                       : ""
//                   }`}
//                   // className=""

//                   // onClick={() => router.push("/profile")}
//                 />
//               </button>
//               {profileTab ? (
//                 <div className="absolute mt-10 flex  justify-center z-10  bg-gray-900/40 rounded backdrop-blur-[40px]   mr-48 border-none w-60  h-60 ">
//                   <div className="mt-4">
//                     <ProfileCard />
//                   </div>
//                 </div>
//               ) : (
//                 <div></div>
//               )}
//             </li>
//           ) : (
//             <div className=" flex flex-col items-center">
//               <BiUser
//                 className=" w-7 h-7 sm:w-8 sm:h-8  relative  rounded-full p-1 text-black"
//                 onClick={handleLogin}
//               />
//               {login ? (
//                 <div className="absolute mt-8 flex text-md rounded-sm   flex-col items-center justify-center z-10  shadow-sm   border-none    ">
//                   <div
//                     className="w-0 h-0
//   border-l-8 border-l-transparent
//   border-b-8 border-b-[#DB4444]
//   border-r-8 border-r-transparent"
//                   />
//                   <div className="px-10 rounded-md text-white text-sm py-2 bg-[#DB4444]">
//                     <h1
//                       onClick={() => {
//                         router.push("/Register");
//                       }}
//                     >
//                       LOGIN{" "}
//                     </h1>
//                   </div>
//                 </div>
//               ) : (
//                 <div></div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
// <div className="mx-0">
//   <div className=" flex sm:hidden px-1 py-1 bg-black/5 text-black justify-between items-center rounded-md border shadow ">
//     {/* Search Input */}

//     <input
//       type="text"
//       placeholder="Search for Products"
//       name="search"
//       id="search"
//       className="flex-grow bg-transparent p-1 py-2 text-sm outline-none"
//     />

//     {/* Category Select and Search Button */}

//     <div className="flex gap-4 text-sm  items-center">
//       {/* Category Select */}

//       <div className="bg-transparent">
//         <CategorySelect
//           categories={allCategories}
//           onSelect={handleCategorySelect}
//         />
//       </div>

//       {/* Search Button */}

//       <button
//         type="button"
//         className=" p-[10px]  rounded-md border-red-500 shadow-sm active:bg-red-800 bg-red-500"
//       >
//         <FiSearch className="text-white" />
//       </button>
//     </div>
//   </div>
// </div>
//       <div className=" hidden  flex-col md:flex-row items-center mt-2 justify-between w-full gap-10 text-xl">
//         <div className="px-4 py-2  text-white flex  gap-4 items-center justify-between whitespace-nowrap  bg-red-500 border text-sm rounded-md">
//           <span>All Categories</span>

//           <span>
//             <MdMenu />
//           </span>
//         </div>

//         <div className="px-2 flex m-0 text-black/70 items-center justify-between  w-full   font-semibold text-sm">
//           {menus.map((menu, index) => (
//             <Link
//               href={menu.value}
//               key={index}
//               className={`${
//                 currTab == menu.label
//                   ? "border-b-2 text-red-500 border-red-600"
//                   : ""
//               }`}
//               onClick={() => setCurrTab(menu.label)}
//             >
//               {" "}
//               {menu.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { PiShoppingCartLight } from "react-icons/pi";
import Link from "next/link";
import ProfileCard from "../Profile/ProfileCard";
import { useSession } from "next-auth/react";

const Header = () => {
  const menus = [
    { label: "Home", value: "/Home" },
    { label: "Contact", value: "/Home" },
    { label: "About", value: "/Home" },
    { label: "SignUp", value: "/Register" },
  ];
  const [currTab, setCurrTab] = useState("Home");
  const [signIn, setSignIn] = useState(true);
  const [profileTab, setProfileTab] = useState(false);
  const profileToggle = () => {
    setProfileTab(!profileTab);
  };

  const router = useRouter();
  return (
    <div className="text-black mb-4  px-[10px] sm:px-[10px] md:px-[20px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] pt-4 sm:pt-[20px] w-full  font-normal  text-base cursor-pointer">
      <div className="flex w-full items-center  gap-10  list-none justify-between ">
        <div
          className="text-2xl   font-bold whitespace-nowrap items-center "
          onClick={() => router.push("/")}
        >
          Buyer`s Edge
        </div>
        <div className="w-full items-center flex justify-center">
       
            <div className=" w-full hidden lg:flex  justify-between items-center gap-2 bg-black/5 p-2 rounded  ">
              <input
                type="text"
                placeholder="What are you looking for?"
                name=""
                id=""
                className="bg-gray-100 outline-none"
              />

              <FiSearch className="opacity-70" />
            </div>
       
        </div>

        {/* <div className=" font-medium text-lg flex lg:text-base  items-center justify-between gap-4 lg:gap-4 xl:gap-10">
          {menus.map((menu, index) => (
            <Link
              href={menu.value}
              key={index}
              className={`${
                currTab == menu.label ? "border-b-2  border-gray-600 " : ""
              }`}
              onClick={() => setCurrTab(menu.label)}
            >
              {" "}
              {menu.label}
            </Link>
          ))}
        </div> */}
        <div className="flex  items-center justify-between  gap-1 sm:gap-2  md:gap-4 lg:gap-6 xl:gap-10">
         
          <li>
            <AiOutlineHeart className="w-7 h-7" />
          </li>
          <li className="relative z-0">
            <span className="absolute z-10 bg-red-500 rounded-full text-xs font-sans flex items-center justify-center  w-4 h-4 mt-1 left-4 -top-2 text-white cursor-pointer ">
              5
            </span>
            <PiShoppingCartLight
              className="w-7 h-7"
              onClick={() => router.push("/Cart")}
            />
          </li>
          {signIn ? (
            <li className="relative flex  flex-col items-center ">
              <button onClick={profileToggle}>
                <BiUser
                  className={`w-8 h-8 ${
                    profileTab
                      ? " relative bg-red-500 rounded-full p-1 text-white"
                      : ""
                  }`}
                  // className=""

                  // onClick={() => router.push("/profile")}
                />
              </button>
              {profileTab ? (
                <div className="absolute mt-10 flex  justify-center z-10  bg-gray-900/40 rounded backdrop-blur-[40px]   mr-48 border-none w-60  h-60 ">
                  <div className="mt-4">
                    <ProfileCard />
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </li>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className=" w-full flex my-2 lg:hidden   justify-between items-center gap-2 bg-black/5 p-2 rounded  ">
              <input
                type="text"
                placeholder="What are you looking for?"
                name=""
                id=""
                className="bg-gray-100 outline-none"
              />

              <FiSearch className="opacity-70" />
            </div>
    </div>
  );
};

export default Header;
