import React, { useEffect, useState } from "react";
import TitleComponent from "../../components/admin/TitleComponent";
import { dummyBookingData } from "../../assets/assets";

const ListBookings = () => {
  const [bookings, setBookings] = useState([]);
  const getAllBookings = () => {
    setBookings(dummyBookingData);
  };
  useEffect(() => {
    getAllBookings();
  }, []);
  return (
    <div className="relative p-4 md:p-8 w-full bg-gray-950 min-h-screen text-white">
      <TitleComponent text1="List" text2="Shows" />
      <div>
        <table className="w-full mt-6 border-collapse">
          <thead>
            <tr className="bg-secondary/60 text-white text-left ">
              <th className="p-2 pl-5">User Name</th>
              <th className="p-2 pl-5">Movie Name</th>
              <th className="p-2 pl-5"> Show Time</th>
              <th className="p-2 pl-5">Seats</th>
              <th className="p-2 pl-5">Amount</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBookings;
