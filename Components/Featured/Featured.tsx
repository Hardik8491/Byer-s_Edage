// import React from "react";
// import { AiOutlineArrowUp } from "react-icons/ai";
// import { GoArrowLeft } from "react-icons/go";
// import Image from 'next/image'

// const Featured = () => {
//   return (
//     <div>
//       <div className="px-[135px] py-10 ">
//         <div className="flex items-center gap-2 ">
//           <div className="bg-[#DB4444] border-2 h-12 w-5 rounded-md border-[#DB4444] " />
//           <p className="text-[#DB4444] font-semibold text-base">Featured</p>
//         </div>
//         <div className="flex justify-between py-4 ">
//           <div className="flex items-center gap-10 text-black">
//             <h1 className="text-3xl font-bold">New Arrival</h1>
//           </div>
//         </div>
//         <div className="flex gap-4 border  justify-center ">
//           <div className="h-full  ">
//             <img src="p1.png" className="bg-black  " alt="" />
//           </div>
//           <div className="flex flex-col gap-2  justify-between">
//             {/* <img src="p2.png" alt="" /> */}
//             <Image  src="/p2.png" alt="Picture of the author" width={500} height={500} />
//             <div className="flex flex-row gap-10 w-full ">
//               <img src="p3.png" className="bg-black" alt="" />
//               <img src="p4.png" className="bg-black" alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="flex  list-none items-center justify-center gap-16 my-20 text-black">
//           <li className="cursor-pointer   flex flex-col p-4 items-center justify-center ">
//             <img src="del.png" alt="" />
//             <span className="text-lg font-popins font-semibold  ">
//               FREE AND FAST DELIVERY
//             </span>
//             <p className="text-xs font-normal">
//               Free delivery for all orders over $140
//             </p>
//           </li>
//           <li className="cursor-pointer   flex flex-col p-4 items-center justify-center ">
//             <img src="call.png" alt="" />
//             <span className="text-lg font-popins font-semibold  ">
//               24/7 CUSTOMBER SERVICE{" "}
//             </span>
//             <p className="text-xs font-normal">
//               Friendly 24/7 customber support
//             </p>
//           </li>
//           <li className="cursor-pointer   flex flex-col p-4 items-center justify-center ">
//             <img src="ver.png" alt="" />
//             <span className="text-lg font-popins font-semibold  ">
//               MONEY BACK GUARANTEE
//             </span>
//             <p className="text-xs font-normal">
//               We return money within 30 days
//             </p>
//           </li>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;


import React from 'react'

const Featured = () => {
  return (
    <div>

   
    <div className="w-[1170px] px-[135px] h-[768px] flex-col justify-start items-start  gap-[60px] inline-flex">
    <div className="flex-col justify-start items-start gap-5 flex">
        <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-5 h-10 relative">
                <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded"></div>
            </div>
            <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Featured</div>
        </div>
        <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">New Arrival</div>
    </div>
    <div className="justify-start items-start gap-[30px] inline-flex">
        <div className="w-[570px] h-[600px] relative bg-black rounded">
            <img className="w-[511px] h-[511px] left-[29px] top-[89px] absolute" src="playstation_large .png" />
            <div className="left-[32px] top-[446px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="text-neutral-50 text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">PlayStation 5</div>
                    <div className="w-[242px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">Black and White version of the PS5 coming out on sale.</div>
                </div>
                <div className="flex-col justify-start items-start flex">
                    <div className="text-white text-base font-medium font-['Poppins'] leading-normal">Shop Now</div>
                    <div className="w-[81px] h-[0px] relative opacity-50">
                        <div className="w-[81px] h-[0px] left-0 top-0 absolute border border-white"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-col justify-start items-center gap-8 inline-flex">
            <div className="w-[570px] h-[284px] relative bg-stone-950 rounded">
                <img className="w-[432px] h-[286px]  top-0 absolute origin-top-left " src="human.png" />
                <div className="left-[24px] top-[138px] absolute flex-col justify-start items-start gap-4 inline-flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <div className="text-neutral-50 text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">Women’s Collections</div>
                        <div className="w-[255px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">Featured woman collections that give you another vibe.</div>
                    </div>
                    <div className="flex-col justify-start items-start flex">
                        <div className="text-white text-base font-medium font-['Poppins'] leading-normal">Shop Now</div>
                        <div className="w-[81px] h-[0px] relative opacity-50">
                            <div className="w-[81px] h-[0px] left-0 top-0 absolute border border-white"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-center items-center gap-[30px] inline-flex">
                <div className="w-[270px] h-[284px] relative bg-black rounded">
                    <div className="w-[210px] h-[222px] px-2.5 pb-px left-[30px] top-[31px] absolute flex-col justify-center items-center inline-flex">
                        <img className="w-[190px] h-[221px]" src="spiker.png" />
                    </div>
                    <div className="left-[24px] top-[175px] absolute flex-col justify-start items-start gap-2 inline-flex">
                        <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="text-neutral-50 text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">Speakers</div>
                            <div className="w-[191px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">Amazon wireless speakers</div>
                        </div>
                        <div className="flex-col justify-start items-start flex">
                            <div className="text-white text-base font-medium font-['Poppins'] leading-normal">Shop Now</div>
                            <div className="w-[81px] h-[0px] relative opacity-50">
                                <div className="w-[81px] h-[0px] left-0 top-0 absolute border border-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[270px] h-[284px] relative bg-black rounded">
                    <div className="h-[222px] pl-1 pr-[5px] pt-2 pb-[11px] left-[30px] top-[30px] absolute flex-col justify-center items-center inline-flex">
                        <img className="w-[201px] h-[203px]" src="p3.png" />
                    </div>
                    <div className="left-[24px] top-[175px] absolute flex-col justify-start items-start gap-2 inline-flex">
                        <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="text-neutral-50 text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">Perfume</div>
                            <div className="w-[191px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">GUCCI INTENSE OUD EDP</div>
                        </div>
                        <div className="flex-col justify-start items-start flex">
                            <div className="text-white text-base font-medium font-['Poppins'] leading-normal">Shop Now</div>
                            <div className="w-[81px] h-[0px] relative opacity-50">
                                <div className="w-[81px] h-[0px] left-0 top-0 absolute border border-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div> 
      {/* <div className="flex  list-none items-center justify-center gap-16 my-20 text-black">
          <li className="cursor-pointer   flex flex-col p-4 items-center justify-center ">
            <img src="del.png" alt="" />
            <span className="text-lg font-popins font-semibold  ">
              FREE AND FAST DELIVERY
            </span>
            <p className="text-xs font-normal">
              Free delivery for all orders over $140
            </p>
          </li>
          <li className="cursor-pointer   flex flex-col p-4 items-center justify-center ">
            <img src="call.png" alt="" />
            <span className="text-lg font-popins font-semibold  ">
              24/7 CUSTOMBER SERVICE{" "}
            </span>
            <p className="text-xs font-normal">
              Friendly 24/7 customber support
            </p>
          </li>
          <li className="cursor-pointer   flex flex-col p-4 items-center justify-center ">
            <img src="ver.png" alt="" />
            <span className="text-lg font-popins font-semibold  ">
              MONEY BACK GUARANTEE
            </span>
            <p className="text-xs font-normal">
              We return money within 30 days
            </p>
          </li>
        </div> */}
     </div>
     <div className="flex  list-none items-center justify-center gap-16 my-20 text-black">
          <li className="cursor-pointer   flex flex-col p-4 items-center justify-center ">
            <img src="del.png" alt="" />
            <span className="text-lg font-popins font-semibold  ">
              FREE AND FAST DELIVERY
            </span>
            <p className="text-xs font-normal">
              Free delivery for all orders over $140
            </p>
          </li>
          <li className="cursor-pointer   flex flex-col p-4 items-center justify-center ">
            <img src="call.png" alt="" />
            <span className="text-lg font-popins font-semibold  ">
              24/7 CUSTOMBER SERVICE{" "}
            </span>
            <p className="text-xs font-normal">
              Friendly 24/7 customber support
            </p>
          </li>
          <li className="cursor-pointer   flex flex-col p-4 items-center justify-center ">
            <img src="ver.png" alt="" />
            <span className="text-lg font-popins font-semibold  ">
              MONEY BACK GUARANTEE
            </span>
            <p className="text-xs font-normal">
              We return money within 30 days
            </p>
          </li>
        </div>
</div>
  )
}

export default Featured
