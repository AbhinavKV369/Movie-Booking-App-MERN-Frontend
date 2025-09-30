import { Ticket } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movies = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
      {movies.map((movie) => (
        <div
          key={movie._id || movie.id}
          className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300">
          {/* Poster */}
          <div
            onClick={() => navigate(`/movies/${movie._id}`)}
            className="relative flex flex-1 w-full aspect-[2/3] cursor-pointer overflow-hidden">
            <img
              src={movie.poster_path || movie.backdrop_path}
              alt={movie.title || "Movie Poster"}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition"></div>

            {/* Movie info on hover */}
            <div className="absolute bottom-0 p-4 w-full">
              <h3 className="text-white font-semibold text-base md:text-lg truncate">
                {movie.title}
              </h3>
              <p className="text-gray-300 text-xs mt-1 truncate">
                {movie.genres?.map((genre) => genre.name).join(" • ")}
              </p>
              <p className="text-yellow-4000 text-xs mt-1">
                ⭐ {movie.vote_average} ({movie.vote_count.toLocaleString(1)})
              </p>
            </div>
          </div>

          {/* Card Footer */}
          <div className="flex justify-center p-3">
            <button
              onClick={() => navigate(`/movies/${movie._id}`)}
              className="flex text-center gap-2 items-center justify-center w-full bg-secondary  py-2 rounded-xl font-medium hover:opacity-90 transition">
              <span ><Ticket/></span> Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
