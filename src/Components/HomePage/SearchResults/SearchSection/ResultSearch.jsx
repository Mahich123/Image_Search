import React from 'react'

const ResultSearch = () => {
  return (
    <div className='flex flex-col justify-center items-center mr-[0.5rem]'>
      <div className="bg-[#C5C5C5] px-[0.8rem] py-[0.5rem] rounded xl:rounded-lg flex flex-row items-center justify-between">
        <input className='rounded w-[40vw]  h-[3vh] xl:w-[27vw] xl:h-[4.5vh] xl:pl-[0.5rem] text-[0.7rem] focus:outline-none' type="text" placeholder='Search....'/>
        <div className='bg-[#748F99] w-[2rem] xl:w-[3rem] h-[1.5rem] xl:h-[2.5rem] ml-[0.8rem] rounded flex justify-center cursor-pointer'>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-[3vw] xl:w-6/12 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
        </div>
      </div>

      <div className="genre flex flex-row">
          <div className='bg-[#DDDDDD] m-2 px-[0.7rem] py-[0.5rem] rounded-lg cursor-pointer'>MINIMAL</div>
          <div className='bg-[#DDDDDD] m-2 px-[0.7rem] py-[0.5rem] rounded-lg cursor-pointer'>NATURE</div>
          <div className='bg-[#DDDDDD] m-2 px-[0.7rem] py-[0.5rem] rounded-lg cursor-pointer'>COLORFUL</div>
          <div className='bg-[#DDDDDD] m-2 px-[0.7rem] py-[0.5rem] rounded-lg cursor-pointer'>ABSTRACT</div>
          <div className='bg-[#DDDDDD] m-2 px-[0.7rem] py-[0.5rem] rounded-lg cursor-pointer'>FOOD</div>
          <div className='bg-[#DDDDDD] m-2 px-[0.7rem] py-[0.5rem] rounded-lg cursor-pointer'>INTERIOR</div>
        </div>
    </div>
  )
}

export default ResultSearch