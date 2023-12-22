// import { NextResponse } from "next/server";

// async function fetchCoins() {
//   try {
//     const response = await fetch(
//       "https://ecommarce-admin.vercel.app/api/16042d1c-ac49-4509-bd47-c1a73317a783/products/public",
//       {
//         method: "GET",
//         headers: {
//           // 'X-RapidAPI-Key': '23d6312e0fmsh2fb3926ac169d6dp1b7c3cjsnb61b88fdd83a',
//           // 'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//         },
//       }
//     );
      
//     if (!response.ok) {
//       throw new Error(`Failed to fetch coins. Status: ${response.status}`);
//     }
     
//     const coins = await response.json();
//     console.log(coins);
    
//     return coins;
//   } catch (error) {
//     console.log("error")
//     console.error("Error fetching coins:", error);
//     throw error; // Re-throw the error to let the calling code handle it
//   }
// }

// export async function GET() {
//   try {
//     const coins = await fetchCoins();
//     return NextResponse.json(coins);
//   } catch (error) {
//     console.error("Error processing request:", error);
//     return NextResponse.error();
//   }
// }
