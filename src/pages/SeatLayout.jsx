import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import ColorGradient from '../components/ColorGradient';
import { TimerIcon } from 'lucide-react';
import isoTimeFormat from '../library/isoTimeFormat';

const SeatLayout = () => {
  const {id,date} = useParams();
  const [selectedSeats,setSelectedSeats] = useState([]);
  const [selectedTime,setSelectedTime] = useState(null);
  const [show,setShow] = useState(null);

  const navigate = useNavigate();

  const getShow = () =>{
    const show = dummyShowsData.find((show)=> id === show._id);
    if(show){
      setShow({
        movie: show,
        dateTime:dummyDateTimeData
      });
    }
  }

  useEffect(()=>{
    getShow();
  },[]);

  return show ? (
    <div className="mt-30 flex flex-col md:flex-row items-center gap-6 mx-20 ">
      <ColorGradient top="0" />
      <ColorGradient top="50%" right="0" />
      <div className="bg-gray-800/70 h-69 w-60 rounded-xl">
        <h1 className="font-bold text-md text-center py-5 ">
          Available Timings
        </h1>
        <div className='space-y-3 p-3'>
          {show.dateTime[date].map((item) => (
            <button
            onClick={()=>setSelectedTime(item.time)}
              key={item.time}
              className={`flex items-center gap-2  px-2 px- w-max rounded-r-md cursor-pointer transition ${
                selectedTime === item.time
                  ? "bg-secondary text-white"
                  : "hover:bg-secondary/30"
              }`}>
              <TimerIcon className='h-6 w-6'/>
              {isoTimeFormat(item.time)} 
            </button>
          ))}
        </div>
      </div>
      <div className="bg-black/40 w-full p-2 rounded-3xl">
        <h1 className="font-bold text-xl md:text-2xl tracking-wide px-20 my-5 text-center">
          Select your seats
        </h1>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen ">
      <h1 className="text-2xl font-medium">No Shows available</h1>
    </div>
  );
}

export default SeatLayout