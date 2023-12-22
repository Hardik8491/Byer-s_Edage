import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image } from "@/types";

interface GalleryTabProps {
  image: Image;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  image
}) => {
  return ( 
    <Tab
      className="relative  flex aspect-square cursor-pointer items-center justify-center rounded-md "
    >
      {({ selected }) => (
        <div className="">
          <span className="absolute bg-slate-100  h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <NextImage 
              fill 
              src={image.url} 
              alt="" 
              className=" object-center object-contain p-2" 
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent',
            )}
          />
        </div>
      )}
    </Tab>
  );
}
 
export default GalleryTab;