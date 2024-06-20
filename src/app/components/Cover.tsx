import Image from "next/image";

import CoverImg from "public/coverimg.png";
import Logo from "public/Logo.png";
import MobileCoverImg from "public/coverimgmobile.png";

export default function Cover() {
  return (
    <div className="relative">
      <div>
        <div className="sm:hidden">
          <Image src={MobileCoverImg} alt="cityscape" priority />
        </div>
        <div className="hidden sm:block">
          <Image
            src={CoverImg}
            className="h-[584px] object-cover"
            alt="cityscape"
            priority
          />
        </div>
        <div className="inset-0 w-2/3 absolute bg-gradient-to-r from-[#0F375A] opacity-60"></div>
      </div>
      <div className="my-8 flex flex-col mx-4 gap-3 absolute sm:mx-36 top-0 w-auto justify-start ">
        <div className="flex mx-4 justify-between items-center">
          <Image
            src={Logo}
            alt="company-logo"
            className="w-1/3 sm:w-1/5 sm:h-4/5"
          />
          <button className="font-poppins font-semibold text-xs tracking-wide border-2 border-[#17ABFF] p-3 px-10 text-[#13abff] rounded-md transition duration-300 ease-in-out transform hover:bg-[#13abff] hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#13abff] focus:ring-opacity-50 active:bg-[#0f9ae0]">
            ENQUIRE NOW
          </button>
        </div>
        <div className="flex flex-col mx-4 gap-1 sm:flex-row sm:justify-between ">
          <div className="w-full sm:w-[60%]">
            <div className="mt-6 md:mt-24">
              <p className="font-oswald md:w-4/5 text-white font-normal tracking-wide leading-snug text-4xl md:text-5xl uppercase mb-2 md:mb-4">
                Harbour Lights de
                <span className="text-[#17abff]"> GRESOGONO</span>
              </p>
              <p className="font-poppins text-white w-5/6 font-semibold text-sm sm:text-2xl">
                1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
              </p>
            </div>
            <div className="w-3/4 md:w-2/3 flex flex-col gap-1 sm:gap-0 sm:w-fit">
              <div className="mt-4 md:mt-12 mb-2 pl-2 p-1 flex items-center  sm:p-2 border-l-[3px] bg-[rgba(17,24,39,0.4)] backdrop-blur-[5px] border-[#17abff]">
                <span className="text-slate-200 text-xs md:text-sm font-light font-poppins">
                  Rental Returns of
                  <span className="font-semibold"> UPTO 11%**</span>
                </span>
              </div>
              <div className="md:mt-2 pl-2 p-1 flex items-center sm:p-2 border-l-[3px] bg-[rgba(17,24,39,0.4)] backdrop-blur-[5px] border-[#17abff]">
                <span className="text-slate-200 font-light text-xs md:text-sm font-light font-poppins">
                  Capital Appreciation of
                  <span className="font-semibold"> UPTO 32%**</span>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[40%] flex justify-center sm:justify-end">
            <div className="sm:w-[70%] overflow-hidden">
              <div className="mt-6 md:mt-24 p-6 py-8 flex flex-col bg-[rgba(12,74,110,0.25)] gap-4 rounded-t-2xl border-b border-[#2b3541] backdrop-blur-[8px]">
                <p className="text-xs text-white font-light tracking-widest">
                  PRICING STARTS FROM
                </p>
                <p className="text-5xl font-medium text-white font-oswald">
                  $ 425,000
                </p>
                <p className="text-2xl font-normal text-white font-oswald tracking-wide">
                  AED 1.3 Million
                </p>
                <button className="p-4 px-6 text-white font-poppins font-semibold tracking-wider text-xs bg-sky-500 rounded transition duration-300 ease-in-out transform hover:bg-sky-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 active:bg-sky-700">
                  GET A PRESENTATION
                </button>
              </div>
              <div className="p-3 px-6 flex flex-col bg-[rgba(12,74,110,0.4)] gap-5 border border-[#3D4C5D] rounded-b-2xl backdrop-blur-[8px]">
                <p className="font-poppins text-[#98c5e8] font-extralight text-xs">
                  Get an Expert’s Presentation of Real Estate in Dubai for Life
                  and investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
