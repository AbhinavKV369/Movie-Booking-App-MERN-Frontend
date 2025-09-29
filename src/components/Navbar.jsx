import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, SearchIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-3 md:px-9 py-5 shadow-md bg-black/50">
      {/* Logo */}
      <Link to="/" className="max-md:flex-1">
        <h1 className="font-bold text-2xl">
          <span className="text-secondary" >KNR </span> Film City
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 font-medium">
        <Link to="/" className="hover:text-secondary">
          Home
        </Link>
        <Link to="/movies" className="hover:text-secondary">
          Movies
        </Link>
        <Link to="/trailers" className="hover:text-secondary">
          Trailers
        </Link>
        <Link to="/releases" className="hover:text-secondary">
          Releases
        </Link>
        <Link to="/favourites" className="hover:text-secondary">
          Favorites
        </Link>
      </nav>

      {/* Search & Login */}
      <div className="flex items-center gap-6">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer hover:text-secondary" />
        <button className="hidden lg:flex md:flex px-4 py-2 rounded-lg bg-secondary text-white hover:opacity-90 transition">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
    <button className={`md:hidden w-8 h-8 ${menuOpen ? "hidden" : ""}`} onClick={() => setMenuOpen(true)}>
        <MenuIcon />
      </button>

      {/* Mobile Sidebar Menu (from left) */}
      {menuOpen && (
        <div className="fixed inset-0 z-5 bg-black/70 bg-opacity-40 md:hidden flex items-center">
          <div className="absolute top-0 left-0 w-full h-full text-white shadow-lg p-6 flex flex-col animate-slide-in">
            {/* Close Button */}
            <button
              className="self-end mb-6"
              onClick={() => setMenuOpen(false)}>
              <XIcon className="w-6 h-6" />
            </button>

            {/* Mobile Links */}
            <nav className="flex flex-col text-center gap-6 font-medium">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-secondary">
                Home
              </Link>
              <Link
                to="/movies"
                onClick={() => setMenuOpen(false)}
                className="hover:text-secondary">
                Movies
              </Link>
              <Link
                to="/trailers"
                onClick={() => setMenuOpen(false)}
                className="hover:text-secondary">
                Trailers
              </Link>
              <Link
                to="/releases"
                onClick={() => setMenuOpen(false)}
                className="hover:text-secondary">
                Releases
              </Link>
              <Link
                to="/favourites"
                onClick={() => setMenuOpen(false)}
                className="hover:text-secondary">
                Favorites
              </Link>
            </nav>

            {/* Mobile Login Button */}
            <button className="mt-6 px-4 py-2 rounded-lg bg-secondary text-white hover:opacity-90 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
