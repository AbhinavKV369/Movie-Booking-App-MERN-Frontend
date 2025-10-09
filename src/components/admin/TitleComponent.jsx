import React from 'react'

const TitleComponent = ({text1,text2}) => {
  return (
    <div>
        <h1 className='text-2xl font-bold'><span className='px-2 text-red-600'>{text1}</span>{text2}</h1>
    </div>
  )
}

export default TitleComponent