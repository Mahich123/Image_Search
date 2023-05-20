import React, { useContext, useEffect, useState } from 'react';
import { ImageContext } from '../../ImageContext';
import ResultSearch from './SearchSection/ResultSearch';
import Loader from '../../Loader/Loader';

function SearchResults() {
  const { query, images, updateImages } = useContext(ImageContext);
  const [selectedImg, setSelectedImg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const baseurl = `https://api.pexels.com/v1/search?query=${query}&per_page=90`;

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

  const openModal = (image) => {
    console.log('Image clicked:', image); // Added console log
    setSelectedImg(image);
    setModalOpen(true);
  };

  return (
    <div className='bg-[#EFEDED]'>
      <div className="slideImg w-[84vw] md:w-[85vw] m-auto">
        <img className='w-[93%] md:w-[96%]' src="../img/slideImg.png" alt="sliderImage" />
      </div>
      <div>
        <ResultSearch />
        <div className='container lg mx-[84%] is-main-container'>
          <div className='image-masonry'>
            <div className='columns-2 md:columns-3 lg:columns-4 mb-10'>
              {images.map(result => (
                <img
                  className="mb-4"
                  key={result.id}
                  src={result.src.large}
                  alt={result.alt}
                  onClick={() => openModal(result)}
                />
              ))}
            </div>
          </div>
          {/* modal */}
          {modalOpen && (
            <div className="modal">
              <img
                className="modal-image"
                src={selectedImg.src.large}
                alt={selectedImg.alt}
              />
              <button
                className="modal-close"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>
        <div className='px-32 pb-4 banner'>
          <img src="../img/banner.svg" alt="Gallery 14" className="gallery__img" />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
