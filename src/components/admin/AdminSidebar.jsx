import React from "react";
import {
  LayoutDashboard,
  ListCheck,
  ListIcon,
  PlusCircle,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";


const AdminSidebar = () => {
  const user = {
    firstName: "Admin",
    lastName: "User",
    imageUrl: "https://via.placeholder.com/150",
  };

  const adminNavlinks = [
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Add Shows", path: "/admin/add-shows", icon: PlusCircle },
    { name: "List Shows", path: "/admin/list-shows", icon: ListIcon },
    { name: "List Bookings", path: "/admin/list-bookings", icon: ListCheck },
  ];

  return (
    <aside className="fixed top-0 left-0 z-40 w-[40%] md:w-64 h-full bg-gradient-to-b from-gray-900 to-gray-950 border-r border-gray-800 shadow-lg flex flex-col items-center">
    
      {/* Profile */}
      <div className="flex flex-col items-center gap-2 mt-8">
        <img
          src={user.imageUrl}
          alt="profile"
          className="h-20 w-20 rounded-full border-2 border-gray-700 object-cover"
        />
        <h2 className="text-lg font-semibold mt-2">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-400">Administrator</p>
      </div>

      {/* Nav Links */}
      <nav className="mt-10 w-full flex flex-col gap-2 px-4">
        {adminNavlinks.map((navLink, idx) => {
          const Icon = navLink.icon;
          return (
            <NavLink
              key={idx}
              to={navLink.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 
                 ${
                   isActive
                     ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg"
                     : "text-gray-400 hover:text-white hover:bg-gray-800/70"
                 }`
              }>
              <Icon size={20} />
              <span>{navLink.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <button className="mt-auto mb-8 flex items-center gap-2 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/70 transition">
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default AdminSidebar;
