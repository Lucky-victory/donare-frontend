import { HeroBg,TransactImg } from "../../../public";
import Image from "next/image";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-[#0C0F19]">
      <div className="relative w-full h-[87vh] max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 px-6">
        {/* put HeroBg In an overlay div in background, full width and height */}
        <div className="mx-auto max-w-[800px] h-[800px] absolute top-0 left-[50%] translate-x-[-50%]">
          <Image 
            src={TransactImg}
            alt="Hero Background"
            className="object-cover object-center opacity-5 w-full"
          />
        </div>
        {/* main div with hero text and CTAs */}
        <div className="-mt-6 w-full h-full flex flex-col justify-center items-center text-center z-10 lg:max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold text-white">
            <span className="text-[var(--primary-color)]"> Empower Innovative </span>  Initiatives through Blockchain Crowdfunding
          </h1>
          <p className="text-white text-opacity-60 text-lg md:text-xl text-center pt-4 ">
            {" "}
            Harness the power of technology to enable community-driven decision-making and secure funding for your initiatives.
          </p>

          <button
            onClick={() => router.push("campaigns/create-campaign")}
            className="long-btn py-3 px-10 mt-8 flex items-center gap-2"
          >
            <span className="text-black uppercase">Get Funding</span>
            <RocketLaunchIcon className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
