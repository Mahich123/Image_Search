import React, {useState} from 'react'
// import unsplash from 'Search.js'
import unsplash from './Search'

const SearchResult = () => {
  const [image, setImage] = useState([])
  
  unsplash('hello', 
  (res) => {
    setImage(res.image)
  })

  return (
    <div>
      {
        image.map((i) => {
          <img src={i + "?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"} />
        })
      }
      </div>
  )
}

export default SearchResult