import React from 'react'

const SearchResult = ({  image }) => {
  console.log(image)

  if (!Array.isArray(image) || !image.length) {
    return null;
  }

  return (
    <div>
      {image.map((r) => (
        <div key={r.id}>
          <img width="30%" src={r.src} alt={r.alt} />
        </div>
        
      ))}
       
    </div>
  
  )
}



export default SearchResult