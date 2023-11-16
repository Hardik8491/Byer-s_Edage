// import React from "react";
// import Image from "next/image";


// const CategoriesProduct = () => {
//   const categories = [
//     {
//       icon: "/phone.svg",
//       label: "phone",
//     },
//     {
//       icon: "/Computer.svg",
//       label: "Computers",
//     },
//     {
//       icon: "/SmartWatch.png",
//       label: "SmartWatch",
//     },
//     {
//       icon: "/Camera.svg",
//       label: "Camera",
//     },
//     {
//       icon: "/HeadPhone.svg",
//       label: "HeadPhones",
//     },
//     {
//       icon: "/GamePad.svg",
//       label: "Gaming",
//     },
//   ];

//   return (
//     <div className="flex  items-center justify-around gap-1.5">
//       {categories.map((category) => (
//         <div
//           className="text-black btn-1 slide-btn  w-60 h-60 shadow-md flex flex-col border p-10 items-center justify-center gap-4 transform transition-transform hover:translate-y-[-5px] hover:shadow-lg hover:bg-red-500" // Added hover:bg-red-500 for red background on hover
//           key={category.label}>
//           <Image src={category.icon} alt={"img"} width={60} height={60} />
//           <p>{category.label}</p>
//         </div>
//       ))}

//       <hr className="bg-gray-300 shadow border-none mt-10 py-[0.5px]" />
//     </div>
//     // <button className="btn-1 slide-btn text-black w-60 h-60 shadow-md flex flex-col border p-10 items-center justify-center gap-4 transform transition-transform hover:translate-y-[-5px] hover:shadow-lg ">Button 1</button>
//   );
// };

// export default CategoriesProduct;
