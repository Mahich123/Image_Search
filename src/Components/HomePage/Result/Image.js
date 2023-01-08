import React, { useState, useEffect } from 'react';


const Image = () => {
  const [photos, setPhotos] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  const baseurl = "https://api.pexels.com/v1/search?query=nature";

  useEffect(() => {
    async function fetchData() {
     
        const response = await fetch(baseurl, {
          method: "GET",
          mode: "cors",
            headers: {
              Authorization: process.env.REACT_APP_API_KEY,
              "Content-Type": "application/json",
            }
      });
      const data = await response.json();
      setPhotos(data.photos);
      // setLoading(false);
      
    }
    fetchData();
  }, []);



  return (
    <div>
      {photos.map(photo => (
        <img width="30%" src={photo.src.large} alt={photo.alt} />
      ))}
    </div>
  );
}

export default Image;