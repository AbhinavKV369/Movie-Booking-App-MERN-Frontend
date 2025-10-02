import React, { useState } from "react";
import ReactPlayer from "react-player";
import { dummyTrailers } from "../assets/assets";
import ColorGradient from "./ColorGradient";

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="relative px-6 md:px-12 lg:px-20 xl:px-36 overflow-hidden">
      <ColorGradient top="0" right="0" />
      <h1 id="trailers" className="text-xl font-bold mt-6">
        Trailers
      </h1>
  
      {/* Main Player (Responsive) */}
      <div className="relative w-full pt-[56.25%] mt-4">
        <ReactPlayer
          src={currentTrailer.videoUrl}
          controls
          className="absolute top-0 left-0"
          width="100%"
          height="100%"
        />
      </div>

      {/* Trailer Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded-lg overflow-hidden border-2 transition 
              ${
                currentTrailer.videoUrl === trailer.videoUrl
                  ? "border-red-500"
                  : "border-transparent hover:border-gray-400"
              }`}
            onClick={() => setCurrentTrailer(trailer)}>
            <img
              loading="lazy"
              src={trailer.image}
              alt={`Trailer ${index + 1}`}
              className="w-full h-28 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
