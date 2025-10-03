import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedShow = dummyShowsData.find((s) => s._id === id);
    if (selectedShow) {
      setShow({ movie: selectedShow, dateTime: dummyDateTimeData });
    } else {
      setShow(null);
    }
    setLoading(false);
  }, [id]);

  const formatRuntime = (mins) => {
    if (!mins) return "N/A";
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return `${hours}h ${minutes}m`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen font-medium text-xl">
        Loading...
      </div>
    );
  }

  if (!show) {
    return (
      <div className="flex items-center justify-center h-screen font-medium text-xl">
        Movie not found
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 lg:px-40 pt-30">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Poster */}
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className="max-md:mx-auto rounded-xl h-110 max-w-90 object-cover border-2 shadow-lg"
        />

        {/* Details */}
        <div className="md:ml-10 space-y-3">
          <p className="text-secondary font-medium uppercase tracking-wide">
            {show.movie.original_language}
          </p>
          <h1 className="font-bold text-4xl">{show.movie.title}</h1>
          <p className="text-lg">⭐ {show.movie.vote_average.toFixed(1)}</p>
          <p className="text-gray-700">{show.movie.overview}</p>
          <h2 className="font-medium">
            {formatRuntime(show.movie.runtime)} •{" "}
            {show.movie.genres.map((g) => g.name).join(" • ")}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
