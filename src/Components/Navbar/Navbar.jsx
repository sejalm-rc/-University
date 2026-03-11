// import logo from "../../assets/images/aditya-logo.png";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="https://adityauniversity.in/agec2026/images/au.f652eed91d8ba58a4968.webp" alt="Aditya University" className="h-14" />
        </div>

        {/* Menu */}
<ul className="hidden md:flex gap-8 font-semibold text-gray-700 text-sm tracking-wide">

  <li>
    <HashLink smooth to="/#home" className="cursor-pointer hover:text-orange-500">
      HOME
    </HashLink>
  </li>

  <li>
    <HashLink smooth to="/#callForPapers" className="cursor-pointer hover:text-orange-500">
      CALL FOR PAPERS
    </HashLink>
  </li>

  <li>
    <HashLink smooth to="/#submission" className="cursor-pointer hover:text-orange-500 scroll-mt-24">
      SUBMISSIONS
    </HashLink>
  </li>

  <li>
    <HashLink smooth to="/#registrationFee" className="cursor-pointer hover:text-orange-500">
      REGISTRATION
    </HashLink>
  </li>

  <li>
    <HashLink smooth to="/#registrationDates" className="cursor-pointer hover:text-orange-500">
      DATES
    </HashLink>
  </li>

  <li>
    <HashLink smooth to="/#committee" className="cursor-pointer hover:text-orange-500">
      COMMITTEE
    </HashLink>
  </li>

  <li>
    <HashLink smooth to="/#contact" className="cursor-pointer hover:text-orange-500">
      CONTACT US
    </HashLink>
  </li>

</ul>
      </div>
    </nav>
  );
}