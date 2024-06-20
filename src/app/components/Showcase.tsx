import { useState } from "react";
import Carousel from "./Carousel";

/**
 * Showcase component displays buttons for toggling between EXTERIORS and INTERIORS
 * and renders a Carousel component accordingly.
 */
export default function Showcase() {
  const [activeButton, setActiveButton] = useState("EXTERIORS");

  /**
   * Returns the CSS classes based on whether the button is active or not.
   * @param {string} button - The button name ("EXTERIORS" or "INTERIORS").
   * @returns {string} - CSS classes based on button's active state.
   */
  const getButtonClasses = (button: string) => {
    return button === activeButton
      ? "bg-[#00357B] text-white cursor-pointer font-poppins font-semibold mr-4 mb-4 text-xs border-2 border-[#00357B] p-3 px-10 rounded-md tracking-wide"
      : "bg-white text-[#00357B] cursor-pointer font-poppins font-semibold mr-4 mb-4 text-xs border-2 border-[#00357B] p-3 px-10 rounded-md tracking-wide";
  };

  /**
   * Handles button click event to set the active button.
   * @param {string} button - The button name ("EXTERIORS" or "INTERIORS").
   */
  const handleClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="w-full md:w-4/5 h-full flex flex-col">
        {/* Button group for selecting between EXTERIORS and INTERIORS */}
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
        {/* Display the Carousel component */}
        <div className="w-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
