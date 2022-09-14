import React from 'react'

const Contributors = () => {
  return (
    <div className='bg-[#303B4C] p-[60px] lg:p-[13rem] flex flex-col items-center overflow-hidden'>
    <div className='flex flex-col lg:flex lg:items-center lg:justify-evenly items-center'>
      <p className='font-epi text-[#748F99] text-[16px] '>Team Effort</p>
      <h2 className='font-epi text-white text-[25px] lg:text-[29px]'>Our Contributors</h2>
    </div>

        {/* Contributor 2 */}
        <div className=' items-center lg:flex lg:flex-row lg:items-center lg:gap-[8.5rem] lg:pt-[29px] pt-[1.5rem]'>
      <div className="flex items-center flex-col lg:flex-row">
        <img className='rounded-full w-[4rem] lg:w-[3rem] ' src='https://cdn.discordapp.com/avatars/718086011145551924/3022dc39dd0b46893cfd7b27eb80933e.webp?size=512'/>
        <h3 className='text-[#748F99] font-epi lg:pl-[12px] text-[16px] contName pt-[6px]'>MAHI CHOWDHURY</h3>
      </div>  
        <p className='text-white font-epi work text-[14px]'><span className='text-[#748F99] font-epi contspan'>Contribution:</span> Frontend, UI, UX</p>
         <div className='flex justify-center'>
          <button className='rounded-full  px-4 py-2 text-[12px] mt-[0.3rem] text-white border-2 border-white bg-transparent hover:bg-[#748F99] '>
            <a href='https://github.com/Mahich123'>
              Github
            </a>
          </button>
         </div>
    </div>

    {/* for horizontal line */}
    <div className='lg:w-[49rem] lg:h-px lg:bg-white lg:m-[1.5rem]'></div>

      {/* Contributor 2 */}
      <div className=' items-center lg:flex lg:flex-row lg:items-center lg:gap-40 lg:pt-[29px] pt-[1.5rem]'>
      <div className="flex items-center flex-col lg:flex-row">
        <img className='rounded-full w-[4rem] lg:w-[3rem] ' src='https://avatars.githubusercontent.com/u/80583308?v=4'/>
        <h3 className='text-[#748F99] font-epi lg:pl-[12px] text-[16px] contName pt-[6px]'>SIJEY PRAVEEN</h3>
      </div>  
        <p className='text-white font-epi work text-[14px]'><span className='text-[#748F99] font-epi contspan'>Contribution:</span> Frontend, UI, UX</p>
         <div className='flex justify-center'>
          <button className='rounded-full  px-4 py-2 text-[12px] mt-[0.3rem] text-white border-2 border-white bg-transparent hover:bg-[#748F99] '>
            <a href='https://github.com/cj-praveen'>
              Github
            </a>
          </button>
         </div>
    </div>

    {/* for horizontal line */}
    <div className='lg:w-[49rem] lg:h-px lg:bg-white lg:m-[1.5rem]'></div>

          {/* Contributor 3 */}
          <div className=' items-center lg:flex lg:flex-row lg:items-center lg:gap-[9.5rem] lg:pt-[29px] pt-[1.5rem]'>
      <div className="flex items-center flex-col lg:flex-row">
        <img className='rounded-full w-[4rem] lg:w-[3rem] ' src='https://avatars.githubusercontent.com/u/63477791?v=4'/>
        <h3 className='text-[#748F99] font-epi lg:pl-[12px] text-[16px] contName pt-[6px]'>SAM TAKAHASHI</h3>
      </div>  
        <p className='text-white font-epi work text-[14px]'><span className='text-[#748F99] font-epi contspan'>Contribution:</span> Frontend, UI, UX</p>
         <div className='flex justify-center'>
          <button className='rounded-full  px-4 py-2 text-[12px] mt-[0.3rem] text-white border-2 border-white bg-transparent hover:bg-[#748F99] '>
            <a href='https://github.com/Sam-Takahashi'>
              Github
            </a>
          </button>
         </div>
    </div>

    {/* for horizontal line */}
    <div className='lg:w-[49rem] lg:h-px lg:bg-white lg:m-[1.5rem]'></div>
  </div>
  )
}

export default Contributors