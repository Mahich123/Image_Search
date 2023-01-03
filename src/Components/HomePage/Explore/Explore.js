import React from 'react'
import explore from './explore.json'

const Explore = () => {
  return (
    <div>
       <div className='flex items-center justify-between px-[6rem]'>
            <h1 className='text-[2rem]'>Explore</h1>
            <img className='h-[23px]' src='../img/explore/vector.png'/>
       </div>
        <div className='grid grid-cols-3 gap-3 pt-[2rem] p-[6rem]'>
            {explore.map((post, index) => {
                return (
                    <img className='h-[50vh]' key ={index} src= {post.img}/>
                )
            })}
        </div>
    </div>
)
}

export default Explore