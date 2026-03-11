import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <HashLink smooth to="/#home" className="cursor-pointer">
          <img
            src="https://adityauniversity.in/agec2026/images/au.f652eed91d8ba58a4968.webp"
            alt="Aditya University"
            className="h-14"
          />
        </HashLink>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-700 text-sm tracking-wide">
          <li><HashLink smooth to="/#home" className="hover:text-orange-500">HOME</HashLink></li>
          <li><HashLink smooth to="/#callForPapers" className="hover:text-orange-500">CALL FOR PAPERS</HashLink></li>
          <li><HashLink smooth to="/#submission" className="hover:text-orange-500 scroll-mt-24">SUBMISSIONS</HashLink></li>
          <li><HashLink smooth to="/#registrationFee" className="hover:text-orange-500">REGISTRATION</HashLink></li>
          <li><HashLink smooth to="/#registrationDates" className="hover:text-orange-500">DATES</HashLink></li>
          <li><HashLink smooth to="/#committee" className="hover:text-orange-500">COMMITTEE</HashLink></li>
          <li><HashLink smooth to="/#contact" className="hover:text-orange-500">CONTACT US</HashLink></li>
        </ul>
      </div>

      {/* Mobile / Tablet Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 font-semibold text-gray-700 text-sm tracking-wide bg-white shadow">
          <li><HashLink smooth to="/#home" onClick={()=>setIsOpen(false)} className="hover:text-orange-500">HOME</HashLink></li>
          <li><HashLink smooth to="/#callForPapers" onClick={()=>setIsOpen(false)} className="hover:text-orange-500">CALL FOR PAPERS</HashLink></li>
          <li><HashLink smooth to="/#submission" onClick={()=>setIsOpen(false)} className="hover:text-orange-500">SUBMISSIONS</HashLink></li>
          <li><HashLink smooth to="/#registrationFee" onClick={()=>setIsOpen(false)} className="hover:text-orange-500">REGISTRATION</HashLink></li>
          <li><HashLink smooth to="/#registrationDates" onClick={()=>setIsOpen(false)} className="hover:text-orange-500">DATES</HashLink></li>
          <li><HashLink smooth to="/#committee" onClick={()=>setIsOpen(false)} className="hover:text-orange-500">COMMITTEE</HashLink></li>
          <li><HashLink smooth to="/#contact" onClick={()=>setIsOpen(false)} className="hover:text-orange-500">CONTACT US</HashLink></li>
        </ul>
      )}
    </nav>
  );
}