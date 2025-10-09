import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import TitleComponent from "../../components/admin/TitleComponent";

const ListShows = () => {
  const [shows, setShows] = useState([]);

  const getShows = () => {
    try {
      setShows([
        {
          movie: dummyShowsData[0],
          showDateTime: "2025-06-30T02:00.002",
          showPrice: 90,
          occupiedSeats: {
            A1: "User1",
            A2: "User4",
            A3: "User3",
            A4: "User2",
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getShows();
  }, []);
  return (
    <div className="relative p-4 md:p-8 w-full bg-gray-950 min-h-screen text-white">
      <TitleComponent text1="List" text2="Shows" />
      <div>
        <table className="w-full mt-6 border-collapse">
          <thead>
            <tr className="bg-secondary/60 text-white text-left ">
              <th className="p-2 pl-5">Movie Name</th>
              <th className="p-2 pl-5">Show Time</th>
              <th className="p-2 pl-5"> Total Booking</th>
              <th className="p-2 pl-5">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {shows.map((show, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 pl-5">{show.movie.title}</td>
                <td className="p-2">{}</td>
                <td className="p-2">{Object.keys(show.occupiedSeats).length}</td>
                <td className="p-2">₹{Object.keys(show.occupiedSeats).length * show.showPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListShows;
