import Image from "next/image";
import CoverImg from "/public/coverimg.png";
import Logo from "/public/Logo.png";

export default function Cover() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 h-fit -z-10">
        <Image
          className="object-cover"
          src={CoverImg}
          alt="cityscape"
          priority
        />
        <div className="absolute inset-0 w-2/3 bg-gradient-to-r from-[#0F375A] opacity-60"></div>
      </div>
      <div className="my-8 flex mx-36 w-auto flex-col w-full justify-start">
        <div className="flex justify-between items-center">
          <Image src={Logo} alt="company-logo" className="w-1/5 h-4/5" />
          <button className="font-poppins font-semibold text-xs tracking-wide border-2 border-[#17ABFF] p-3 px-10 text-[#13abff] rounded-md">
            ENQUIRE NOW
          </button>
        </div>
        <div className="mt-24 w-1/2">
          <p className="font-oswald w-4/5 leading-snug text-5xl uppercase mb-4">
            Harbour Lights de <span className="text-[#17abff]">GRESOGONO</span>
          </p>
          <p className="font-poppins font-semibold text-2xl">
            1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
          </p>
        </div>
        <div className="w-fit">
          <div className="mt-12 mb-2 p-2 border-l-[3px] bg-[rgba(17,24,39,0.4)] backdrop-blur-[5px] border-[#17abff]">
            <span className="text-slate-200 text-sm font-light font-poppins">
              Rental Returns of
              <span className="font-semibold"> UPTO 11%**</span>
            </span>
          </div>
          <div className="mt-2 p-2 pr-8 border-l-[3px] bg-[rgba(17,24,39,0.4)] backdrop-blur-[5px] border-[#17abff]">
            <span className="text-slate-200 font-light text-sm font-normal font-poppins">
              Capital Appreciation of
              <span className="font-semibold"> UPTO 32%**</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
