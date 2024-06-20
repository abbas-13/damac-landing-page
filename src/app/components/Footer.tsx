/**
 * Footer component renders the footer section of the application.
 *
 * @returns {JSX.Element} Footer section containing copyright information.
 */
export default function Footer() {
  return (
    <footer className="w-full h-24 flex justify-center items-center bg-[#091D41]">
      <p className="text-center text-xs font-poppins font-light tracking-wide text-white">
        © DAMAC Copyright 2024 All rights reserved.
      </p>
    </footer>
  );
}
