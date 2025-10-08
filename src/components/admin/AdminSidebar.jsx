import React from "react";
import { LayoutDashboard, ListCheck, ListIcon, PlusCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const user = {
    firstName: "Admin",
    lastName: "User",
    imageUrl: "https://via.placeholder.com/150", // placeholder image
  };

  const adminNavlinks = [
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Add Shows", path: "/admin/add-shows", icon: PlusCircle },
    { name: "List Shows", path: "/admin/list-shows", icon: ListIcon },
    { name: "List Bookings", path: "/admin/list-bookings", icon: ListCheck },
  ];

  return (
    <div className="fixed bg-[#0f0f0f] text-white h-full w-64 p-6 flex flex-col items-center shadow-lg">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-2 mt-6">
        <img
          src={user.imageUrl}
          alt="profile"
          className="h-24 w-24 rounded-full border-2 border-gray-600 object-cover"
        />
        <h2 className="text-lg font-semibold mt-2">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-400">Administrator</p>
      </div>

      {/* Nav Links */}
      <div className="mt-10 w-full flex flex-col gap-3">
        {adminNavlinks.map((navLink, idx) => {
          const Icon = navLink.icon;
          return (
            <NavLink
              key={idx}
              to={navLink.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 
                ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "hover:bg-gray-800 text-gray-300"
                }`
              }>
              <Icon size={20} />
              <span>{navLink.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
