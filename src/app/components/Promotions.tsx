import Image from "next/image";
import Area from "/public/area.png";
import Book from "/public/book.png";
import Handover from "/public/handover.png";
import Plan from "/public/plan.png";

// Array of promotion objects, each containing an image and text details

const promotions = [
  {
    img: Area,
    text1: "BOOK WITH",
    text2: "ONLY 20%",
  },
  {
    img: Book,
    text1: "PAYMENT PLAN",
    text2: "EASY 70/30",
  },
  {
    img: Handover,
    text1: "HANDOVER ON",
    text2: "Q2 2027",
  },
  {
    img: Plan,
    text1: "AREA STARTS FROM",
    text2: "20 SQMT",
  },
];

/**
 * Promotions component renders a (horizontally scrollable section for mobile) with promotional details.
 * Each promotion includes an image and two lines of text.
 *
 * @returns {JSX.Element} The promotions section of the homepage.
 */

export default function Promotions() {
  return (
    <div className="overflow-x-scroll bg-[#F4F9FF]">
      <div className="flex w-full p-8">
        {promotions.map((promotion, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer flex-1 min-w-[50%] md:min-w-[25%]"
            >
              <Image
                src={promotion.img}
                alt="promotion image"
                width={60}
                className="transition duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-lg"
              />
              <div className="transition flex flex-col items-center duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-xl">
                <p className="font-poppins mt-2 text-[#00357B]">
                  {promotion.text1}
                </p>
                <p className="font-oswald font-medium tracking-widest text-2xl text-[#00357B]">
                  {promotion.text2}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
