import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <HashLink smooth to="/#home">
          <img
            src="https://adityauniversity.in/agec2026/images/au.f652eed91d8ba58a4968.webp"
            alt="Aditya University"
            className="h-14"
          />
        </HashLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-700 text-sm tracking-wide">

          <li>
            <HashLink smooth to="/#home" className="hover:text-orange-500">
              HOME
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#callForPapers" className="hover:text-orange-500">
              CALL FOR PAPERS
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#submission" className="hover:text-orange-500">
              SUBMISSIONS
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#registrationFee" className="hover:text-orange-500">
              REGISTRATION
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#registrationDates" className="hover:text-orange-500">
              DATES
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#committee" className="hover:text-orange-500">
              COMMITTEE
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#contact" className="hover:text-orange-500">
              CONTACT US
            </HashLink>
          </li>

        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 pb-6 font-semibold text-gray-700 text-sm bg-white shadow">

          <li>
            <HashLink smooth to="/#home" onClick={()=>setMenuOpen(false)}>
              HOME
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#callForPapers" onClick={()=>setMenuOpen(false)}>
              CALL FOR PAPERS
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#submission" onClick={()=>setMenuOpen(false)}>
              SUBMISSIONS
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#registrationFee" onClick={()=>setMenuOpen(false)}>
              REGISTRATION
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#registrationDates" onClick={()=>setMenuOpen(false)}>
              DATES
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#committee" onClick={()=>setMenuOpen(false)}>
              COMMITTEE
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#contact" onClick={()=>setMenuOpen(false)}>
              CONTACT US
            </HashLink>
          </li>

        </ul>
      )}

    </nav>
  );
}