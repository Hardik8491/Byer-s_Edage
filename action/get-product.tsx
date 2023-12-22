import axios from 'axios'
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;


const getProduct = async (id: string)=> {

  
  const res=await axios.get(`${URL}/public/${id}`)
  return res.data;
};

export default getProduct;
