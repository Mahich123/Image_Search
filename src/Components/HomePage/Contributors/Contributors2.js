import React from 'react'
import { useState, useEffect } from 'react'
// import axios from 'axios';

const Contributors2 = () => {
    
  const [data, setData] = useState([]);
  const getUser = async() => {
    const res = await fetch('https://api.github.com/repos/Mahich123/Image_Search/contributors')
    setData(await res.json())
  }
    
  useEffect(() => {
    getUser()
  },[])

  return (
    <div className='h-[100vh] bg-[#303B4C] p-[60px] lg:p-[0] lg:pt-[13rem] flex flex-col items-center overflow-hidden'>
    <div className='flex flex-col lg:flex lg:items-center lg:justify-evenly items-center'>
      <p className='font-epi text-[#748F99] text-[16px] '>Team Effort</p>
      <h2 className='font-epi text-white text-[25px] lg:text-[29px] '>Our Contributors</h2>
    </div>

    {
        data.map((elem) => {
            return (
               <>
                 <div className=' items-center lg:w-[80vw] lg:flex lg:flex-row lg:items-center lg:justify-between lg:pt-[29px] pt-[1.5rem]'>
                    <div className="flex items-center flex-col lg:flex-row">
                        <img className='rounded-full w-[4rem] lg:w-[3rem] ' src={elem.avatar_url} />
                        <h3 className='text-[#748F99] font-epi lg:pl-[12px] text-[16px] contName pt-[6px]'>{elem.login}</h3>
                    </div>
                    <p className='text-white font-epi work text-[14px] lg:w-[26vw]'><span className='text-[#748F99] font-epi contspan'>Contribution:</span> Frontend, UI, UX</p>
                        <div className='flex justify-center'>
                            <button className='hrline rounded-full  px-4 py-2 text-[12px]  mt-[0.3rem] text-white border-2 border-white bg-transparent hover:bg-[#748F99] '>
                                <a href={elem.html_url}>
                                    Github
                                </a>
                            </button>
                        </div>
                    </div><div className='lg:w-[80%] lg:h-px lg:bg-white lg:m-[1.5rem]'></div>
                </>
            )
        })
    }

    
    

    
  </div>

  )
}

export default Contributors2