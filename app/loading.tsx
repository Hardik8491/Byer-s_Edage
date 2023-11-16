import Image from "next/image";
import React, { useEffect } from "react";

const loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <Image src="/img3.gif" alt="Loader" width={600} height={800} />
    </div>
  );
};

export default loading;
