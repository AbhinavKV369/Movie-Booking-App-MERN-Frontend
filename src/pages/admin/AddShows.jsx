import React, { useEffect, useState } from "react";
import TitleComponent from "../../components/admin/TitleComponent";
import ColorGradient from "../../components/ColorGradient";
import { dummyShowsData } from "../../assets/assets";

const AddShows = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState("");
  const [showPrice, setShowPrice] = useState("");

  useEffect(() => {
    setNowPlaying(dummyShowsData);
  }, []);

  return (
    <div className="relative p-4 md:p-8 w-full bg-black/40 min-h-screen text-white">
      <ColorGradient />
      <TitleComponent text1="Add" text2="Shows" />

      {/* Now Playing Section */}
      <p className="mt-6 text-lg font-semibold mx-2">Now Playing Movies</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-2">
        {dummyShowsData.map((movie) => (
          <div
            key={movie._id}
            className="bg-zinc-900 cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-amber-400 transition-all hover:scale-105">
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <p className="p-2 text-sm font-medium truncate text-center">
              {movie.title}
            </p>
          </div>
        ))}
      </div>

      {/* Add Show Form */}
      <div className="mt-10 bg-zinc-800/70 p-6 rounded-xl border border-amber-400/40 backdrop-blur-md">
        <h3 className="text-lg font-semibold mb-4">
          Add Show for: <span className="text-amber-400">Selected Movie</span>
        </h3>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="datetime-local"
            className="bg-zinc-900 text-white p-3 rounded-md border border-zinc-700 w-full focus:outline-none focus:border-amber-400"
          />
          <input
            type="number"
            placeholder="Enter ticket price"
            className="bg-zinc-900 text-white p-3 rounded-md border border-zinc-700 w-full focus:outline-none focus:border-amber-400"
          />
          <button className="bg-amber-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-amber-400 transition">
            Add Show
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddShows;

