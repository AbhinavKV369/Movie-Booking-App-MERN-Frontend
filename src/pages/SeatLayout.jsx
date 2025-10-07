import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import ColorGradient from "../components/ColorGradient";
import { TimerIcon } from "lucide-react";
import isoTimeFormat from "../library/isoTimeFormat";
import toast from "react-hot-toast";

const SeatLayout = () => {
  const groupRows = [
    ["A", "B"],
    ["C", "D"],
    ["E", "F"],
    ["G", "H"],
    ["I", "J"],
  ];

  const { id, date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();

  const getShow = () => {
    const show = dummyShowsData.find((show) => id === show._id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  };

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast.error("Please select time first");
    }
    if (!selectedSeats.includes(seatId) && selectedSeats.length >= 4) {
      return toast.error("Your can only select 4 seats");
    }
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  const renderSeats = (row, count = 9) => {
    return (
      <div key={row} className="flex flex-1 gap-2 mt-2">
        <div className="flex flex-1 text-sm flex-wrap items-center justify-center gap-1">
          {Array.from({ length: count }, (_, i) => {
            const seatId = `${row}${i + 1}`;
            return (
              <button
                key={seatId}
                onClick={() => {
                  handleSeatClick(seatId);
                }}
                className={`h-8 w-8 rounded border border-secondary cursor-pointer ${
                  selectedSeats.includes(seatId) && "bg-secondary text-white"
                }`}>
                {seatId}
              </button>
            );
          })}
        </div>
      </div>
    );
    
  };
  useEffect(() => {
    getShow();
  }, []);

  return show ? (
    <div className="mt-28 flex flex-col md:flex-row items-start gap-8 mx-8 md:mx-20 text-white relative">
      <ColorGradient top="0" />
      <ColorGradient top="50%" right="0" />

      {/* Left Timing Box */}
      <div className="bg-black/40 rounded-2xl shadow-xl w-full md:w-72 p-5 backdrop-blur-sm border border-gray-700">
        <h1 className="font-semibold text-lg text-center text-gray-100 mb-5 tracking-wide">
          Available Timings
        </h1>
        <div className="space-y-3">
          {show.dateTime[date].map((item) => (
            <button
              onClick={() => setSelectedTime(item.time)}
              key={item.time}
              className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg transition duration-300 ${
                selectedTime === item.time
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 hover:bg-red-600/60 text-gray-300"
              }`}>
              <TimerIcon className="h-5 w-5" />
              <span className="text-sm font-medium">
                {isoTimeFormat(item.time)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Seat Section */}
      <div className="flex flex-col  items-center w-full backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-gray-800">
        <h1 className="font-semibold text-xl md:text-2xl tracking-wide text-center mb-6 text-gray-100">
          Select your seats
        </h1>
        <svg
          className="w-full h-8"
          viewBox="0 0 500 100"
          preserveAspectRatio="none">
          <path
            d="M0,80 Q250,0 500,80"
            fill="transparent"
            stroke="#b91c1c"
            strokeWidth="20"
          />
        </svg>
        <p> Screen Side</p>
        <div className="mt-20 flex flex-col items-center">
          {groupRows[0].map((row) => renderSeats(row))}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-11">
          {groupRows.slice(1).map((group, idx) => (
            <div key={idx}> {group.map((row) => renderSeats(row))}</div>
          ))}
        </div>
        <button className="p-2 bg-secondary/90 font-medium rounded-lg hover:scale-95 transition duration-300 mt-20 ">
          Proceed to Payment<span className="font-bold text-xl"> →</span>
        </button>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen text-gray-300">
      <h1 className="text-2xl font-medium">No Shows Available</h1>
    </div>
  );
};

export default SeatLayout;
