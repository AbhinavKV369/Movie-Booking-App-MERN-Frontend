import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='relative flex flex-col items-start justify-center gap-4 bg-[url("./assets/banner.webp")] bg-cover bg-center h-screen '>
        <div className="absolute h-screen top-0 w-full left-0 flex flex-col items-start justify-center bg-black/60">
          <div className="font-semibold text-4xl tracking-wide mt-30 ml-6 mr-[10%] p-3 rounded-2xl max-w-[600px]">
            <h1 className=" min-w-[10px]">
              <span className="text-secondary text-5xl font-extrabold">
                LOKAH
              </span>
              <p> Chapter-1 CHANDRA</p>
            </h1>
            <p className="text-lg my-3">
              Chandra (played by Kalyani Priyadarshan) is a mysterious woman
              with an enigmatic past who arrives in Bengaluru. Scroll.She moves into an apartment complex where two
              young men, Sunny (Naslen) and Venu, live.Sunny becomes intrigued by Chandra’s odd behavior — her
              nocturnal habits, strange visitors, and guarded secrets.
            </p>
            <button
              onClick={() => navigate("/movies")}
              className="bg-red-500 text-lg font-bold py-2 px-5 rounded-full my-2 cursor-pointer">
              Explore Movies <span className="font-extrabold">→</span>
            </button>
          </div>
        </div>
      </div>
      <p className="h-1 w-full bg-secondary animate-bounce transition-all"></p>
    </>
  );
}

export default HeroSection