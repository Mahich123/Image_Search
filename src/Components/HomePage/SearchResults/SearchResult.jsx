import React, { useContext, useEffect } from 'react';
import { ImageContext } from '../../ImageContext';


function SearchResults() {
  const {query, images, updateImages} = useContext(ImageContext);



  const baseurl = `https://api.pexels.com/v1/search?query=${query}&per_page=90`;


  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(baseurl, {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          }
        });
        const data = await response.json();
        console.log(data);
        updateImages(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  } , [baseurl, updateImages]);

  return (
    <div>
      {images?.map((result) => (
        <div key={result.id}>
          <img src={result.src.medium} alt={result.photographer} />
        </div>
      ))}
    </div>
  );
  
}

export default SearchResults;