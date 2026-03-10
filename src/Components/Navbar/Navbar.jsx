// import logo from "../../assets/images/aditya-logo.png";

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
          <li className="cursor-pointer hover:text-orange-500">HOME</li>
          <li className="cursor-pointer hover:text-orange-500">CALL FOR PAPERS</li>
          <li className="cursor-pointer hover:text-orange-500">SUBMISSIONS</li>
          <li className="cursor-pointer hover:text-orange-500">REGISTRATION</li>
          <li className="cursor-pointer hover:text-orange-500">DATES</li>
          <li className="cursor-pointer hover:text-orange-500">COMMITTEE</li>
          <li className="cursor-pointer hover:text-orange-500">CONTACT US</li>
        </ul>
      </div>
    </nav>
  );
}