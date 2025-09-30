import React from 'react'
import { useNavigate } from 'react-router-dom';
import ColorGradient from './ColorGradient';

import {dummyShowsData} from "../assets/assets"
import MovieCard from './MovieCard';

const FeatureSection = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 md:px-15 lg:px-24 xl:px-44 overflow-hidden">
      <div className="relative flex items-center justify-between mt-5 mb-5">
        <ColorGradient top="0" right="-80px" />
        <p className="text-xl font-semibold">Now Showing</p>
        <button
          onClick={() => navigate("/movies")}
          className="bg-white/10 rounded-2xl px-6 py-2">
          View all →
        </button>
      </div>
      <div>
<MovieCard movies={dummyShowsData} />
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => navigate("/movies")}
          className="bg-secondary mt-9 px-6 py-2 rounded-full my-3">
          Show More →
        </button>
      </div>
    </div>
  );
}

export default FeatureSection