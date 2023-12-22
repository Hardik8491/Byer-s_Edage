import { NextResponse } from "next/server";

async function fetchProducts() {
    const response = await fetch('http://localhost:3001/api/16042d1c-ac49-4509-bd47-c1a73317a783/products/public', {
        "method": "GET",
        "headers": {
            // 'X-RapidAPI-Key': '23d6312e0fmsh2fb3926ac169d6dp1b7c3cjsnb61b88fdd83a',
            // 'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }

        })
        
        const products = await response.json();
       
        return products;
        
}

export async function GET(request: { url: string | URL; }) {
    const products = await fetchProducts();
   
    const { searchParams } = new URL(request.url);

    const query = searchParams.get('query');
   
 

    const filteredProducts = products.filter((product: { title: string;  }) => {
   
     
        return product.name.toLowerCase().includes(query.toLowerCase())
        //  || coin.symbol.toLowerCase().includes(query.toLowerCase())
        // return product.title.toLowerCase().includes(query.toLowerCase())


        
    })
    
        
    return NextResponse.json(filteredProducts);
}