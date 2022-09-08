import {Link} from "react-router-dom";


const navBar = () => {
  return (
    <div className="bg-dark-blue w-full flex justify-center items-center h-20">
      <div className='w-4/5 flex items-center justify-between'>
        <Link to="/">
          <h3 className='text-white text-3xl font-bold'>
            APP
            <span className="text-prime-g">LOGO</span>
          </h3>
        </Link>
        <a href="https://github.com/Mahich123/Image_Search" target="_blank" rel="noreferrer" className='flex hover:bg-light-blue text-white hover:text-dark-blue py-2 px-4 rounded'>
          <span className='font-bold'>Let's Work</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 p-1 stroke-prime-g ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default navBar