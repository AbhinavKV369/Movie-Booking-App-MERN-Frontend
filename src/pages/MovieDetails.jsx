import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets.js";
import ColorGradient from "../components/ColorGradient";
import {  Heart,PlayIcon, TicketIcon } from "lucide-react";
import DateSelect from "../components/DateSelect.jsx";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const selectedShow = dummyShowsData.find((s) => s._id === id);
    if (selectedShow) {
      setShow({ movie: selectedShow, dateTime: dummyDateTimeData });
    } else {
      setShow(null);
    }
  }, [id]);

  const formatRuntime = (mins) => {
    if (!mins) return "N/A";
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return `${hours}h ${minutes}m`;
  };

  if (!show) {
    return (
      <div className="flex items-center justify-center h-screen font-medium text-xl">
        Movie not found
      </div>
    );
  }

  return (
    <div className=" px-6 md:px-16 lg:px-40 pt-30">
      <div className="relative flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <ColorGradient />
        {/* Poster */}
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className="max-md:mx-auto rounded-xl h-110 max-w-90 object-cover border-1 shadow-lg"
        />

        {/* Details */}
        <div className="md:ml-10 space-y-3">
          <p className="text-secondary font-medium uppercase tracking-wide">
            {show.movie.original_language}
          </p>
          <h1 className="font-bold text-4xl">{show.movie.title}</h1>
          <p className="text-lg">⭐ {show.movie.vote_average.toFixed(1)}</p>
          <p className="text-gray-300">{show.movie.overview}</p>
          <h2 className="font-medium">
            {formatRuntime(show.movie.runtime)} •{" "}
            {show.movie.genres.map((g) => g.name).join(" • ")}
          </h2>
          <div className="flex flex-row space-x-3 mt-10">
            <button className="flex items-center justify-center bg-white/10 py-3 px-6 rounded-2xl">
              <span className="mr-2">
                <PlayIcon />
              </span>
              Watch Trailer
            </button>
            <a href="#dateSelect" className="flex items-center justify-center bg-secondary py-3 px-6 rounded-2xl">
              <span className="mr-2">
                <TicketIcon />
              </span>
              Buy Tickets
            </a>
            <button className="p-3 bg-white/20 rounded-full" ><Heart className=""/></button>
          </div>
        </div>
      </div>
      {/* Cast Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Top Cast</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {show.movie.casts.map((cast) => (
            <div
              key={cast.name}
              className="group flex flex-col items-center text-center cursor-pointer">
              {/* Profile Image */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg border-2 border-gray-700 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={cast.profile_path}
                  alt={cast.name}
                  loading="lazy"
                />
              </div>

              {/* Cast Details */}
              <div className="mt-3">
                <p className="text-sm font-semibold text-white truncate w-28">
                  {cast.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DateSelect id={id} dateTime={show.dateTime}/>
    </div>
  );
};

export default MovieDetails;
