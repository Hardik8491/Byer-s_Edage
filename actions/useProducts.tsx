import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);

      } catch (error:any) {
        // setError(error);
    
      }
      finally{
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products };
};

export default useProducts;
