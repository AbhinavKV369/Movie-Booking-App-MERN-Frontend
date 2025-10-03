import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from "../components/MovieCard"
import ColorGradient from '../components/ColorGradient'


const Movies = () => {
  return dummyShowsData.length > 0 ? (
   <div className='relative  mt-20 py-5 mx-5 md:mx-10 '>
    <ColorGradient top='0' right='0' />
    <ColorGradient left="0" top='150px' />
    <h1 className='text-xl ml-5 py-3 font-bold'>Now Showing</h1>
    <div>
    <MovieCard movies={dummyShowsData} />
    </div>
   </div>
  ) :(
    <div className='flex items-center justify-center h-screen '>
      <h1 className='text-2xl font-medium'>No movies available</h1>
    </div>
  )
}

export default Movies