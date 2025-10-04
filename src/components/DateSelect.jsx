import React, { useState } from "react";
import toast from "react-hot-toast";

import ColorGradient from "./ColorGradient";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DateSelect = ({ id = "", dateTime = [] }) => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate()
  const onBookHandler = () =>{
    if(!selected){
        return toast.error("Please Select a Date");
    }
    navigate(`/movies/${id}/${selected}`)
  }
  return (
    <div id="dateSelect" className="pt-30">
      <div className="relative flex flex-col gap-8 p-8 border border-gray-800 bg-[#0d0d0d]/90 backdrop-blur-xl rounded-3xl shadow-2xl">
        {/* Gradient decorations */}
        <ColorGradient top="-120px" left="-120px" />
        <ColorGradient top="-120px" right="0" />

        {/* Title + Checkout */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Choose Your Date
          </h2>
          <button onClick={onBookHandler} className="px-6 py-2 rounded-xl bg-red-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition">
            Book your Seats
          </button>
        </div>

        {/* Date Slider */}
        <div className="flex items-center gap-4">
          {/* Left Button */}
          <button className="p-3 rounded-full bg-gray-900 hover:bg-red-600/30 transition shadow">
            <ChevronLeft className="w-5 h-5 text-gray-300" />
          </button>

          {/* Dates */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 flex-1 px-2">
            {Object.keys(dateTime).map((date) => {
              const d = new Date(date);
              const day = d.toLocaleString("en-US", { weekday: "short" });
              const dayNum = d.getDate();
              const month = d.toLocaleString("en-US", { month: "short" });

              return (
                <button
                  key={date}
                  onClick={()=>setSelected(date)}
                  className={`flex flex-col items-center min-w-[80px] px-4 py-3 rounded-2xl transition-all duration-200
                    ${
                      selected === date
                        ? "bg-red-500 text-white shadow-lg scale-105"
                        : "bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}>
                  <span className="text-xs">{day}</span>
                  <span className="text-xl font-bold">{dayNum}</span>
                  <span className="text-xs">{month}</span>
                </button>
              );
            })}
          </div>

          {/* Right Button */}
          <button className="p-3 rounded-full bg-gray-900 hover:bg-red-600/30 transition shadow">
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
