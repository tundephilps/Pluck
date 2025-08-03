import { useState } from "react";
import { FaBell, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import Overlay from "../../assets/Overlay.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed backdrop-blur-md bg-white/10 z-50 text-white lg:px-12 px-4 py-4 flex items-center justify-between shadow-md border-b border-white/10">
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" className="w-28 object-contain" />
      </div>

      {/* Mobile Only: Bell + Hamburger */}
      <div className="flex items-center gap-4 md:hidden">
        {/* Bell */}
        <div className="relative">
          <FaBell className="text-white text-xl" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-green-400 rounded-full"></span>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-xl focus:outline-none "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Center Nav Links (Desktop) */}
      <ul className="hidden md:flex gap-6 text-sm tracking-wide text-gray-200">
        <Link
          to="/Home"
          className="hover:text-white text-[#D1D5DB] cursor-pointer"
        >
          HOME
        </Link>
        <Link
          to="/Leaderboard"
          className="hover:text-white text-[#D1D5DB] cursor-pointer"
        >
          LEADERBOARD
        </Link>
        <Link
          to="/Tournament"
          className="hover:text-white text-[#D1D5DB] cursor-pointer"
        >
          TOURNAMENT
        </Link>
        <Link
          to="/Pricing"
          className="hover:text-white text-[#D1D5DB] cursor-pointer"
        >
          PRICING
        </Link>
      </ul>

      {/* Right Side (Desktop Only) */}
      <div className="hidden md:flex items-center gap-6 text-sm">
        {/* Balance */}
        <div className="text-right">
          <div className="text-gray-200">$500</div>
          <div className="text-xs text-gray-400">BALANCE</div>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src={Overlay}
            alt="Avatar"
            className="w-8 h-8 object-cover rounded-full"
          />
          <div>
            <div className="text-gray-100 font-medium">Alexander Wright</div>
            <div className="text-xs text-gray-400">LEVEL 42</div>
          </div>
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <FaBell className="text-white text-lg" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-green-400 rounded-full"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#111] border-t border-white/10 md:hidden py-6 z-40">
          <ul className="flex flex-col gap-4 text-center text-sm text-gray-200">
            <Link
              to="/Home"
              className="hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/Leaderboard"
              className="hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              LEADERBOARD
            </Link>
            <Link
              to="/Tournament"
              className="hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              TOURNAMENT
            </Link>
            <Link
              to="/Pricing"
              className="hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              PRICING
            </Link>
          </ul>

          {/* Profile Summary on Mobile */}
          <div className="mt-6 border-t border-white/10 pt-4 px-6 flex flex-col gap-4 items-center text-sm text-gray-200">
            <div className="text-center">
              <div>$500</div>
              <div className="text-xs text-gray-400">BALANCE</div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={Overlay}
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <div className="font-medium text-white">Alexander Wright</div>
                <div className="text-xs text-gray-400">LEVEL 42</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
