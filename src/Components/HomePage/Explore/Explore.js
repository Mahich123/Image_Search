import React, { useState, useEffect } from 'react';
import Loader from '../../Loader/Loader';


const Explore = () => {
	
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);  
		const [isError, setIsError] = useState(false)
		const [error, setError] = useState({})

    const baseurl = "https://api.pexels.com/v1/search?query=decoration&per_page=50";
  
    useEffect(() => {
			setIsLoading(true)
			setIsError(false)
			setError({})

			const controller = new AbortController()
			const { signal } = controller

      async function fetchData() {
       // fetch api
          const response = await fetch(baseurl, {
            method: "GET",
            mode: "cors",
              headers: {
                Authorization: process.env.REACT_APP_API_KEY,
                "Content-Type": "application/json",
              }
        }) // handle errors
				.catch(err => {
					setIsLoading(false)
					if ( signal.aborted) return
					setIsError(true)
					setError({ message: err.message })
		
				});
				// response
        const data = await response.json();
        setPhotos(data.photos);
        setIsLoading(false);
      }
      fetchData();
    }, [baseurl]);
  
		// Error Message
		if (isError) return (
			<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-4" role="alert">
				<strong class="font-bold">Opps!</strong> &nbsp;
				<span class="block sm:inline">Error: {error.message}</span>
			</div>
    )

  return (
    <div className='container lg mx-[84%] is-main-container'>
       <div className='flex items-center justify-between  mb-4'>
            <h2 className='text-[2rem]'>Explore</h2>
            <img alt='' className='h-[23px]' src='../img/explore/vector.png'/>
       </div>
	   

        {/* TODO: implemnt infinite scroll feature */}
        <div className='image-masonry'>
            { // show loader while fetching data
            isLoading ? <Loader /> : 
            <div className='columns-2 md:columns-3 lg:columns-4 mb-10 container'>
                {photos.map(photo => (
            <img className="mb-4" key={photo.id} src={photo.src.large} alt={photo.alt} />
            ))}
            </div>
            }
        </div>
       
       
    </div>
    )
}

export default Explore