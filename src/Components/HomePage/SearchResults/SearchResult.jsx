import React from 'react'

const SearchResult = ({  images }) => {
  // console.log(image)

  if (!Array.isArray(images) || !images.length) {
    return null;
  }

  return (
    <div>
      {images.map((photo) => (
        <img key={photo.id} src={photo.src.medium} alt={photo.photographer} />
      ))}
    </div>
  );
}



export default SearchResult