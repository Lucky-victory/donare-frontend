import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { GlobeImg } from "../../../public";
import Image from "next/image";

const ThreeAnys = () => {
  return (
    <div className="relative w-full min-h-[70vh] lg:h-[90vh] max-w-[1350px] mx-auto flex flex-col gap-4 my-4">
      <div className="px-4 lg:px-6">

      <div className="w-full max-w-3xl mx-auto h-[150px] bg-black bg-opacity-30 border border-[#23293D] -mt-10 py-6 rounded-2xl flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-semibold text-center pt-4 text-[var(--primary-color)]">
          $128,234,600
        </h1>
        <p className="text-center text-lg lg:text-2xl text-white text-opacity-60">
          raised
        </p>
      </div>
      </div>
      <div className=" py-6
      
      ">

      <div className=" flex flex-col-reverse lg:flex-row justify-evenly items-center gap-4 w-full min-h-[400px] mt-8 lg:mt-8">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-start lg:justify-center px-6">
          <h1 className="text-xl lg:text-4xl font-semibold pt-4 text-white">
          Every Individual, Everywhere, Every Moment, Every Chain!
          </h1>
          <p className="text-white text-opacity-60 lg:text-lg pt-2">
          Designed to support community-driven initiatives, Donare enables trustworthy individuals to gather resources for pressing concerns and fund grants. Donare's reach isn't confined to a single blockchain; it's accessible to users across various EVM chains.
          </p>
          <button className="long-btn-trans py-3 px-8 mt-4 lg:mt-8 self-start flex items-center gap-2">
            <span className="uppercase">Learn More</span>
            <ChevronRightIcon className="h-5 w-5 text-[var(--primary-color-tint)]" />
          </button>
        </div>
        <div className="w-full  lg:w-1/2 h-full sm:max-w-[400px]">
          <Image 
            src={GlobeImg}
            alt=""
            className="  object-contain object-center w-full h-full"
          />
        </div>
      </div>
      </div>

    </div>
  );
};

export default ThreeAnys;
