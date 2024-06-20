import { useState } from "react";
import Carousel from "./Carousel";

export default function Showcase() {
  const [activeButton, setActiveButton] = useState("EXTERIORS");

  const getButtonClasses = (button: string) => {
    return button === activeButton
      ? "bg-[#00357B] text-white cursor-pointer font-poppins font-semibold mr-4 mb-4 text-xs border-2 border-[#00357B] p-3 px-10 rounded-md tracking-wide"
      : "bg-white text-[#00357B] cursor-pointer font-poppins font-semibold mr-4 mb-4 text-xs border-2 border-[#00357B] p-3 px-10 rounded-md tracking-wide";
  };

  const handleClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="w-full md:w-4/5 h-full flex flex-col">
        <div className="w-full flex justify-end">
          <button
            className={getButtonClasses("EXTERIORS")}
            onClick={() => handleClick("EXTERIORS")}
          >
            EXTERIORS
          </button>
          <div
            className={getButtonClasses("INTERIORS")}
            onClick={() => handleClick("INTERIORS")}
          >
            INTERIORS
          </div>
        </div>
        <div className="w-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
