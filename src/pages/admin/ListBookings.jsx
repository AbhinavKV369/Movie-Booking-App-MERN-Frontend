import React, { useEffect, useState } from "react";
import TitleComponent from "../../components/admin/TitleComponent";
import { dummyBookingData } from "../../assets/assets";
import formatDateTime from "../../library/formatDateTime";

const ListBookings = () => {
  const [bookings, setBookings] = useState([]);

  const getAllBookings = () => {
    setBookings(dummyBookingData);
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  return (
    <div className="relative p-4 md:p-8 w-full bg-black/40 min-h-screen text-white">
      <TitleComponent text1="List" text2="Bookings" />

      <div className="overflow-x-auto">
        <table className="w-full mt-6 border-collapse">
          <thead>
            <tr className="bg-secondary/60 text-white text-left">
              <th className="p-2 pl-5">User Name</th>
              <th className="p-2 pl-5">Movie Name</th>
              <th className="p-2 pl-5">Show Time</th>
              <th className="p-2 pl-5">Seats</th>
              <th className="p-2 pl-5">Amount</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-secondary/20 transition">
                <td className="p-2 pl-5 font-medium">{booking.user.name}</td>
                <td className="p-2">{booking.show.movie.title}</td>
                <td className="p-2">
                  {formatDateTime(booking.show.showDateTime)}
                </td>
                <td className="p-2">{booking.bookedSeats.join(", ")}</td>
                <td className="p-2 text-green-400 font-semibold">
                  ₹{booking.amount}
                </td>
              </tr>
            ))}

            {bookings.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-gray-400 py-6 italic">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBookings;
