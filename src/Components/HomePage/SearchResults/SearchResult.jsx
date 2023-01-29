import React from 'react'

const SearchResult = ({  images }) => {
  // console.log(image)

  if (!Array.isArray(images) || !images.length) {
    return null;
  }

  return (
    <div>
   {images.length > 0 && images.map((image, index) => (
  <img key={index} src={image.urls.small} alt={image.alt_description} />
))}
       
    </div>
  
  )
}



export default SearchResult