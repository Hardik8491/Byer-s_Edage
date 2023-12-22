import { NextResponse } from "next/server";

async function fetchCoins() {
    const response = await fetch('http://localhost:3001/api/16042d1c-ac49-4509-bd47-c1a73317a783/products/public', {
        "method": "GET",
        "headers": {
            // 'X-RapidAPI-Key': '23d6312e0fmsh2fb3926ac169d6dp1b7c3cjsnb61b88fdd83a',
            // 'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }

        })
        
        const coins = await response.json();
      
        return coins;



}

export async function GET(request:any) {
    const coins = await fetchCoins();
    return NextResponse.json(coins);
}