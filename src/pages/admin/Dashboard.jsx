import React, { useEffect, useState } from "react";
import {
  ChartLineIcon,
  IndianRupeeIcon,
  PlayCircleIcon,
  UserIcon,
} from "lucide-react";
import { dummyDashboardData } from "../../assets/assets";
import ColorGradient from "../../components/ColorGradient"
import TitleComponent from "../../components/admin/TitleComponent";

const initialData = {
  totalBookings: 0,
  totalRevenue: 0,
  activeShows: [],
  totalUsers: 0,
};

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(initialData);

  const dashboardCards = [
    {
      title: "Total Bookings",
      value: dashboardData.totalBookings || "0",
      icon: ChartLineIcon,
    },
    {
      title: "Total Revenue",
      value: `₹${dashboardData.totalRevenue || "0"}`,
      icon: IndianRupeeIcon,
   
    },
    {
      title: "Active Shows",
      value: dashboardData.activeShows.length || "0",
      icon: PlayCircleIcon,
     
    },
    {
      title: "Total Users",
      value: dashboardData.totalUsers || "0",
      icon: UserIcon,
   
    },
  ];

  const fetchDashboardData = () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="relative p-4 md:p-8 w-full bg-gray-950 min-h-screen text-white">
      <ColorGradient right="0" top="10px" />
      <TitleComponent text1="Admin" text2="Dashboard" />

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {dashboardCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="relative bg-black/90 border-2 border-red-500/20 rounded-2xl shadow-xl p-6 flex flex-col items-start hover:scale-105 transition-transform duration-300">
              <div className={`p-3 rounded-xl bg-red-500 mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-400 text-sm">{card.title}</h3>
              <p className="text-2xl font-semibold mt-1">{card.value}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 hover:opacity-10 transition-opacity from-white to-transparent"></div>
            </div>
          );
        })}
      </div>

      {/* Active Shows Section */}
      <div className="mt-12 bg-black/80 rounded-2xl p-6 border-red-700/40 border-2">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <PlayCircleIcon className="w-5 h-5 text-red-400" />
          Active Shows
        </h2>
        {dashboardData.activeShows.length === 0 ? (
          <p className="text-gray-500">No active shows available.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4">
            {dashboardData.activeShows.map((show, i) => (
              <div
                key={i}
                className="pb-2 bg-white/10 rounded-xl hover:bg-gray-700 transition-colors">
                <img
                  src={show.movie.poster_path}
                  alt={show.movie.title}
                  className="h-80 w-full object-cover rounded-t-xl"
                />
                <div className=" mt-3 mx-2">
                  <h1 className="font-bold text-gray-300">{show.movie.title}</h1>
                  <p>Show Price: ₹{show.showPrice}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
