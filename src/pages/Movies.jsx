import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from "../components/MovieCard"
const Movies = () => {
  return dummyShowsData.length > 0 ? (
   <div className='mt-20 py-5 mx-5 md:mx-10 '>
    <h1 className='text-xl ml-5 my-5 font-bold'>Now Showing</h1>
    <div>
    <MovieCard movies={dummyShowsData} />
    </div>
   </div>
  ) :(
    <div></div>
  )
}

export default Movies