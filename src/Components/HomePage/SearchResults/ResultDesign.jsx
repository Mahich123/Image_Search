import React from 'react'
import ResultSearch from './SearchSection/ResultSearch'

const ResultDesign = () => {
  return (
    <div className='bg-[#EFEDED]'>
      <div className="slideImg w-[84vw] md:w-[85vw] m-auto">
        <img className='w-[93%] md:w-[96%]' src="../img/slideImg.png" alt="sliderImage" />
      </div>

      <ResultSearch />
    </div>
  )
}

export default ResultDesign