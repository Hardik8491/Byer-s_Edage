// @ts-nocheck
import NoResult from "./no-result";
import ProductCard from "./product-card";
import Product from "../Products/Product/Product";


interface productListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<productListProps> = ({ title, items }) => {

  return (
    <div className="space-y-4 text-black">
       <div className="flex items-center gap-2 ">
        <div className="bg-[#DB4444] border-2 h-12 w-5 rounded-md border-[#DB4444] " />
        <p className="text-[#DB4444] font-semibold text-base">{title}</p>
      </div>
      {/* <h3 className="font-bold text-xl">{title}</h3> */}

      {items?.length === 0 && <NoResult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {items?.map((items,index) => (
          //   <div key={items.id}>{items.name}</div>
          // <ProductCard key={items.id} data={items} />
          <Product key={index} {...items} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
