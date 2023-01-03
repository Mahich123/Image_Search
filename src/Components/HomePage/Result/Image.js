import React, { useState, useEffect } from 'react';

const Image = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
     
        const response = await fetch(`https://api.pexels.com/v1/search?query=nature`, {
            headers: {
              Authorization: process.env.REACT_APP_API_KEY
            }
      });
      const data = await response.json();
      setPhotos(data.photos);
    }
    fetchData();
  }, []);

  return (
    <div>
      {photos.map(photo => (
        <img src={photo.src.medium} alt={photo.alt} />
      ))}
    </div>
  );
}

export default Image;