import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [, setLoading] = useState(true);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ecommarce-admin.vercel.app/api/16042d1c-ac49-4509-bd47-c1a73317a783/products/public");
         
        const data = response.json();
        setProducts(await data);
  
      } catch (error) {
        console.error(error);

        // Handle the error, show a message, or take appropriate action.
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products };
};

export default useProducts;