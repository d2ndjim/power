import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div>
      <div className=" w-full mx-auto flex justify-center items-center h-screen bg-[#0F1015] ">
        <Image
          className="my-6 animate-pulse"
          src="/loading-icon.png"
          alt="/"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
