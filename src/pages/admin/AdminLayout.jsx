import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-black/40 text-white">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminNavbar />
        <main className="flex-1  bg-black/40 overflow-y-auto md:ml-[20%] ml-[40%] mt-16 px-6 py-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
