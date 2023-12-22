// import React from "react";

// const ProductPage = () => {
//   return (
//     <div className="bg-white text-gray-700 ">
//       <div className="mx-[135px] ">
//         <div className="py-12">
//           <span>About / Gaming / Items</span>
//         </div>

//         <div className="bg-gray-100 border border-black h-full w-full">
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


import Gallery from "@/Components/gallery";
import Info from "@/Components/info";
import Container from "@/Components/ui/container";
import ProductList from "@/Components/ui/product-list";

import getProduct from "@/action/get-product";
import getProducts from "@/action/get-products";

interface ProductPageProps {
  params: {
    productId: string;
  },
}

const ProductPage: React.FC<ProductPageProps> = async ({ 
  params
 }) => {
  const product = await getProduct(params.productId);

  
  // const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({ 
    categoryId: product?.category?.id
  });
  


  if (!product) {
    return null;
  }

  
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-md font-semibold font-serif text-gray-600 mb-10">
  <span className="pr-4">
    Account 
  </span>
  <span>
    /
  </span>
  <span className="px-4">
    {product.category.name}
  </span>
  <span>
    /
  </span>

  <span className="text-black px-4">
    {product.name}
  </span>
</div>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
           <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} /> 
        </div>
      </Container>
    </div>  
  )
}

export default ProductPage;