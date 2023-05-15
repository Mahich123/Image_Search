import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    // query, setQuery
//   const [searchQuery, setSearchQuery] = useState('');
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const updateSearchQuery = (q) => {
    setQuery(q);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  return (
    <ImageContext.Provider
      value={{ query, updateSearchQuery, images, updateImages }}
    >
      {children}
    </ImageContext.Provider>
  );
};