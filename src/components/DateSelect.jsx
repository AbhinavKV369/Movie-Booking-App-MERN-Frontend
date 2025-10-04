import React from "react";
import ColorGradient from "./ColorGradient";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DateSelect = ({ id, dateTime = [] }) => {
  return (
    <div id="dateSelect" className="pt-20">
      <div className="relative flex flex-col gap-10 p-8 border border-gray-800 bg-[#0f0f0f] rounded-3xl shadow-lg">
        {/* Gradient decorations */}
        <ColorGradient top="-120px" left="-120px" />
        <ColorGradient top="-120px" right="0" />

        {/* Title + Checkout */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">🎟️ Choose Your Date</h2>
          <button className="px-5 py-2 rounded-xl bg-secondary text-white font-semibold shadow-md hover:bg-secondary/80 transition">
            Proceed to Chekout
          </button>
        </div>

        {/* Date Slider */}
        <div className="flex items-center gap-4">
          {/* Left Button */}
          <button className="p-3 rounded-full bg-gray-800 hover:bg-primary/30 transition">
            <ChevronLeft className="w-5 h-5 text-gray-300" />
          </button>

          {/* Dates */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide flex-1 px-2">
            {Object.keys(dateTime).map((date) => {
              const d = new Date(date);
              const day = d.toLocaleString("en-US", { weekday: "short" });
              const dayNum = d.getDate();
              const month = d.toLocaleString("en-US", { month: "short" });

              return (
                <button
                  key={date}
                  className="flex flex-col items-center min-w-[80px] px-4 py-3 rounded-2xl bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-primary transition">
                  <span className="text-xs">{day}</span>
                  <span className="text-xl font-bold">{dayNum}</span>
                  <span className="text-xs">{month}</span>
                </button>
              );
            })}
          </div>

          {/* Right Button */}
          <button className="p-3 rounded-full bg-gray-800 hover:bg-primary/30 transition">
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
