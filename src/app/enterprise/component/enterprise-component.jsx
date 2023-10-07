"use client"

import React from "react";
import Navigation from "../../components/navigation";


export default function EnterpriseComponent() {
  return (
    <div className="text-default bg-[#0F1015] h-screen bg-small-circle lg:bg-big-circle bg-no-repeat bg-cover bg-center">
      <Navigation />
      <div className="flex flex-col items-center">
        <h6 className="text-custom-blue text-center text-[18px] lg:[text-20px] mt-[100px] font-medium">
          PAI ENTERPRISE
        </h6>
        <h1 className="w-max text-center text-[43px] lg:text-6xl tracking-[24px]  lg:tracking-[1em] px-12 md:px-8 mt-4 -mr-[24px] lg:-mr-[1em]">
          COMING SOON
        </h1>
      </div>
    </div>
  );
}
