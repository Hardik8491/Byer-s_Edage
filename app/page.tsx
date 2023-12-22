"use client";


import HomeBar from "@/Components/HomeBar/HomeBar";

export default function Home() {
  return (
    <main className="">
      <HomeBar />
    </main>
  );
}

// 'use client'

// import QuerySearch from "@/Components/Query/QuerySearch";
// import Coins from "@/Components/test/Coin";
// import SearchCoins from "@/Components/test/Searchbar";
// import { useState, useEffect, SetStateAction } from "react"

// export default function Home() {
//   const [coins, setCoins] = useState([]);

//   useEffect(() => {
//     const getCoins = async () => {
//       const response = await fetch('/api/coins');
//       const coins = await response.json();
//         setCoins(coins)
//       // setCoins(coins.data.coins);
//     }

//     getCoins();
//   }, []);

//   return (
//    <div className="text-center m-10">
//       <h1 className="font-bold text-6xl mt-14">Products</h1>
//       {/* <SearchCoins getSearchResults={(results: SetStateAction<never[]>) => setCoins(results)} /> */}
{
  /* <QuerySearch getSearchResults={(results: SetStateAction<never[]>) => setCoins(results)} />
//       <Coins coins={coins} /> */
}
//    </div>
//   )
// }
