import React, { useState, useContext, useEffect } from 'react';
import { ImageContext } from '../../../ImageContext';
import { useNavigate } from 'react-router-dom';

const tags = [
  'MINIMAL', 'NATURE', 'COLORFUL', 'ABSTRACT', 'FOOD', 'INTERIOR'
]

const ResultSearch = () => {

  const [inputValue, setInputValue] = useState('');
  const { query, updateSearchQuery } = useContext(ImageContext);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(inputValue) {
      updateSearchQuery(inputValue);
      setInputValue(''); // Clear the input value
    }
    
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

    const handleChange = (e) => {
      setInputValue(e.target.value);
  };
 
 useEffect(() => {
    // Check if the current route is "/search" and if the query is empty
    // If true, navigate to the root route
    if (window.location.pathname === '/search' && !query) {
      navigate('/');
    }
  }, [query, navigate]);

 

  return (
    <div className='flex flex-col justify-center items-center mr-[0.5rem]'>
      <div className="bg-[#C5C5C5] px-[0.8rem] py-[0.5rem] rounded xl:rounded-lg flex flex-row items-center justify-between">
        <form onSubmit={handleSubmit}>
        <input 
          className='rounded w-[40vw] h-[3vh] p-[2px] pl-[5px] xl:w-[27vw] xl:h-[4.5vh] xl:pl-[8px] text-[0.7rem] focus:outline-none' 
          type="text" 
          placeholder='Search....'
          value={inputValue}
          onChange={handleChange}
          
          />
        </form>
        <div className='bg-[#748F99] w-[2rem] xl:w-[3rem] h-[1.5rem] xl:h-[2.5rem] ml-[0.8rem] rounded flex justify-center cursor-pointer' onClick={handleButtonClick}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-[3vw] xl:w-6/12 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
        </div>
      </div>

      <div>
  <ul className='flex overflow-x-auto py-4 gap-x-4'>
    {tags.map((t) => {
      return (
        <li key={t} className='bg-[#DDDDDD] text-xs px-2 py-1 rounded-lg cursor-pointer whitespace-nowrap'>
          {t}
        </li>
      );
    })}
  </ul>
</div>

    </div>
  )
}

export default ResultSearch