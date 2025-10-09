import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <header className="hidden md:flex fixed top-0 left-64 right-0 z-30 h-16 items-center justify-between px-8 bg-black/60 backdrop-blur-md border-b border-gray-800 shadow-sm">
      <Link to="/admin">
        <h1 className="font-bold text-2xl tracking-wide">
          <span className="text-red-500">KNR</span> Film City
        </h1>
      </Link>

      <div className="hidden md:flex items-center gap-4 text-gray-300">
        <p className="text-sm">Welcome, Admin</p>
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-white font-semibold">
          A
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
