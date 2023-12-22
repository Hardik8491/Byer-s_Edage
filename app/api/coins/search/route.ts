import { NextRequest, NextResponse } from "next/server";

interface ProductsResponse {
  products: Product[];
}

interface Product {
  id: string;
  title: string;
  // Add other properties as needed
}

async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
      "https://ecommarce-admin.vercel.app/api/16042d1c-ac49-4509-bd47-c1a73317a783/products/public",
      {
        method: "GET",
        headers: {
          // 'X-RapidAPI-Key': '23d6312e0fmsh2fb3926ac169d6dp1b7c3cjsnb61b88fdd83a',
          // 'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }

    const { products } = (await response.json()) as ProductsResponse;

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error to let the calling code handle it
  }
}

export async function GET(request: NextRequest): Promise<any> {
  try {
    const products = await fetchProducts();
    const { searchParams } = new URL(request.url);

    const query = searchParams.get("query") ?? "";

    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });

    return NextResponse.json({ filteredProducts });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.error();
  }
}
