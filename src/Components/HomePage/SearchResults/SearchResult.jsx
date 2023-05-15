import React, { useContext, useEffect } from 'react';
import { ImageContext } from '../../ImageContext';
import ResultSearch from './SearchSection/ResultSearch';
import Loader from '../../Loader/Loader';


function SearchResults() {
  const {query, images, updateImages} = useContext(ImageContext);



  const baseurl = `https://api.pexels.com/v1/search?query=${query}&per_page=90`;


  
  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await fetch(baseurl, {
  //         headers: {
  //           Authorization: process.env.REACT_APP_API_KEY,
  //         }
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //       updateImages(data.photos);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchImages();
  // } , [baseurl, updateImages]);

  useEffect(() => {
    const fetchImages = async () => {
        try {
            let images;
            await fetch(baseurl, {
                headers: {
                    Authorization: process.env.REACT_APP_API_KEY,
                }
            })
                .then(res => res.json())
                .then((data) => images = data.photos);
            console.log(images)
            updateImages(images);
        } catch (error) {
            console.log(error);
        }
    };
    fetchImages();
}, [baseurl]);

  return (


  <div className='bg-[#EFEDED]'>
  <div className="slideImg w-[84vw] md:w-[85vw] m-auto">
    <img className='w-[93%] md:w-[96%]' src="../img/slideImg.png" alt="sliderImage" />
  </div>
  <div>

  <ResultSearch />
{/*   
  {images?.map((result) => {
  console.log(result.src.original); 
  return (

      <div key={result.id} className=''>

        <img src={result.src.medium} alt={result.photographer} />
      </div>

  );
})} */}

  {/* <div className='grid grid-cols-3'>
    {
      images?.map((result)=>{
        return (
          <img src={result.src.medium} alt={result.photographer} />
        )
      })
    }
  </div> */}


  <div className='image-masonry px-[8rem] pt-[1rem]'>
            { // show loader while fetching data
           
            <div className='columns-2 md:columns-3 lg:columns-4 mb-10'>
                {images.map(result => (
            <img className="mb-4" key={result.id} src={result.src.large} alt={result.alt} />
            ))}
            </div>
            }
        </div>



    </div>
  
  </div>
  );
  
}

export default SearchResults;



