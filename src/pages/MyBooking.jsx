import React, { useEffect, useState } from "react";
import { dummyBookingData } from "../assets/assets";
import ColorGradient from "../components/ColorGradient";

const MyBooking = () => {
  const [bookingData,setBookingData] = useState([]);

  const getMyBookingData = () =>{
    setBookingData(dummyBookingData);
  }

  useEffect(()=>{
    getMyBookingData();
  },[]);

  return (
    <div className="relative flex flex-col mt-30 mb-20 px-10 md:px-20 text-white min-h-screen">
      {/* Background gradients */}
      <ColorGradient />
      <ColorGradient top="50%" right="0" />

      {/* Header */}
      <h1 className="font-bold mb-6 text-2xl tracking-wide text-white/90 ">
      My Bookings
      </h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookingData.map((data, index) => {
          const movie = data.show.movie;

          const dateObj = new Date(data.show.showDateTime);
          const date = dateObj.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
          const time = dateObj.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });

          return (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
              {/* Movie Poster */}
              <div className="relative w-full h-100 overflow-hidden">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Dark overlay */}
                <div className="absolute bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Card content */}
              <div className="p-4 flex flex-col gap-3">
                <h2 className="text-lg font-semibold tracking-wide">
                  {movie.title}
                </h2>

                <p className="text-sm text-gray-300 line-clamp-2">
                  {movie.overview}
                </p>

                <div className="mt-1 text-sm text-gray-300 space-y-1">
                  <p>📅 {date}</p>
                  <p>🕒 {time}</p>
                  <p>💺 {data.bookedSeats.join(", ")}</p>
                  <p>💰 ₹{data.amount}</p>
                </div>

                {/* Status Badge */}
                <div className="mt-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                      data.isPaid
                        ? "bg-green-500/20 text-green-400 border border-green-600"
                        : "bg-red-500/20 text-red-400 border border-red-600 hover:bg-red-500/50 hover:text-white"
                    }`}>
                    {data.isPaid ? (
                      "Paid"
                    ) : (
                      <button className="">Pay Now</button>
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyBooking;
