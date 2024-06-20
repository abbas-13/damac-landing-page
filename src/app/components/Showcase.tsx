import Image from "next/image";

import ShowCase1 from "/public/showcase1.png";
import ShowCase2 from "/public/showcase2.png";
import ShowCase3 from "/public/showcase3.png";
import ShowCase4 from "/public/showcase4.png";

/**
 * Showcase component renders a section with a grid layout to showcase different images.
 * Each image is displayed with a hover effect that enlarges the image slightly.
 *
 * @returns {JSX.Element} The showcase section of the homepage.
 */

export default function Showcase() {
  return (
    <div className="bg-[#F4F9FF] p-8 md:p-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {[ShowCase1, ShowCase2, ShowCase3, ShowCase4].map((img, index) => (
          <div
            key={index}
            className="overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Image src={img} alt={`Showcase ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
