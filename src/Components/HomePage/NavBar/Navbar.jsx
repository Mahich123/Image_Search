import {Link} from "react-router-dom";


const NavBar = ({color, textColor , logo}) => {

  const styles = {
    background: color,
    color: textColor
  }
  return (
    <div className="w-full ts:w-[114vw] md:w-[111vw]  lg:w-[100vw] flex justify-center items-center h-20" style={styles}>
      <div className='w-4/5 md:w-[82%] lg:w-[81%] flex items-center justify-between'>
        <Link to="/">
          {/* <h3 className='text-white text-3xl font-bold'>
            APP
            <span className="text-prime-g">LOGO</span>
          </h3> */}
          {/* <img className="w-[30%] lg:w-[33%]" src="../img/logo/is(2).png" alt=""/> */}
          <img className="w-[30%] ms:w-[46%] ts:w-[16%] md:w-[20%] lg:w-[20%]" src={logo} alt=""/>
        </Link>
        <a href="https://github.com/Mahich123/Image_Search" target="_blank" rel="noreferrer" className='flex ms:w-[19rem] w-[13rem] lg:w-[10rem] text-white hover:text-dark-blue  rounded'>
          <span className='font-bold' style={styles}>Let's Work</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 p-1 stroke-prime-g ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default NavBar