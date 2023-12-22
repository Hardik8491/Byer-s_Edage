import Image from "next/image";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

export default function Coins({ coins }: { coins: any }) {
  return (
    <>
      <ul className="grid grid-cols-1 text-black mx-auto max-w-[1260px] pt-10    gap-4">
        {coins.map(
          (product: {
            id: any;
            iconUrl: any;
            images: { url: any }[];
            name: any;
            title: any;
            symbol:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | PromiseLikeOfReactNode
              | null
              | undefined;
            price:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | PromiseLikeOfReactNode
              | null
              | undefined;
          }) => (
            <li
              key={product?.id}
              className=" px-10    text-sm  gap-10 flex   flex-col border  items-center  shadow-md p-4"
            >
              <Image
                src={product.iconUrl || product.images[0].url}
                alt={product.name || product.title}
                width={50}
                height={50}
                priority
              />
              <h3>{product.name || product.title}</h3>
            </li>
          )
        )}
      </ul>
    </>
  );
}
