import "./hero.css";
import React from 'react';

const hero = () => {
  return (
    <div className="hero bg-slate-900 h-screen">      
      <section className="gallery">
        <div className="red w-full">
          <div className="headers">
            <h1 className="font-bold text-white drop-shadow-sm">Image Search</h1>
            <h5 className="text-base text-white drop-shadow-sm">Freely-usaable images, Powered by creators worldwide</h5>
          </div>
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> */}
          <div className="mb-3 xl:w-96">
            <form className="input-group relative flex items-stretch w-full mb-4">
              <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              <button className="btn px-6 ml-2 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-800 hover:shadow-lg focus:bg-cyan-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-900 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
          <figure className="gallery__item gallery__item--1">
          {/* <img src="https://source.unsplash.com/random/?beautiful,woman" alt="Gallery 01" className="gallery__img" /> */}
          <img src="../img/1.webp" alt="Gallery 01" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--2">
          {/* <img src="https://source.unsplash.com/random/?gradient,game" alt="Gallery 02" className="gallery__img" /> */}
          <img src="../img/2.webp" alt="Gallery 02" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--3 pos-mb">
          {/* <img src="https://source.unsplash.com/random/?supercar,background" alt="Gallery 03" className="gallery__img" /> */}
          <img src="../img/3.webp" alt="Gallery 03" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--4">
          {/* <img src="https://source.unsplash.com/random/?interior,minimal" alt="Gallery 04" className="gallery__img" /> */}
          <img src="../img/4.webp" alt="Gallery 04" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--5 neg-mb">
          {/* <img src="https://source.unsplash.com/random/?dog,minimal" alt="Gallery 05" className="gallery__img" /> */}
          <img src="../img/5.webp" alt="Gallery 05" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--6 neg-mt">
          {/* <img src="https://source.unsplash.com/random/?cyberpunk,sunglasses" alt="Gallery 06" className="gallery__img" /> */}
          <img src="../img/6.webp" alt="Gallery 06" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--7">
          {/* <img src="https://source.unsplash.com/random/?portrait,woman,model" alt="Gallery 07" className="gallery__img" /> */}
          <img src="../img/7.webp" alt="Gallery 07" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--8">
          {/* <img src="https://source.unsplash.com/random/?city,building" alt="Gallery 08" className="gallery__img" /> */}
          <img src="../img/8.webp" alt="Gallery 08" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--9">
          {/* <img src="https://source.unsplash.com/random/?tower,building" alt="Gallery 09" className="gallery__img" /> */}
          <img src="../img/9.webp" alt="Gallery 09" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--10">
          {/* <img src="https://source.unsplash.com/random/?cyberpunks" alt="Gallery 10" className="gallery__img" /> */}
          <img src="../img/10.webp" alt="Gallery 10" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--11 neg-mr">
          {/* <img src="https://source.unsplash.com/random/?japan" alt="Gallery 11" className="gallery__img" /> */}
          <img src="../img/11.webp" alt="Gallery 11" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--12">
          {/* <img src="https://source.unsplash.com/random/?cyberpunk" alt="Gallery 12" className="gallery__img" /> */}
          <img src="../img/12.webp" alt="Gallery 12" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--13">
          {/* <img src="https://source.unsplash.com/random/?man,cool,jacket" alt="Gallery 13" className="gallery__img" /> */}
          <img src="../img/13.webp" alt="Gallery 13" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--14">
          {/* <img src="https://source.unsplash.com/random/?hellcat,bmw" alt="Gallery 14" className="gallery__img" /> */}
          <img src="../img/14.webp" alt="Gallery 14" className="gallery__img" />
          </figure>
          {/*  */}
          <figure className="gallery__item gallery__item--15">
          {/* <img src="https://source.unsplash.com/random/?architecture" alt="Gallery 15" className="gallery__img" /> */}
          <img src="../img/16.webp" alt="Gallery 15" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--16">
          {/* <img src="https://source.unsplash.com/random/?neon" alt="Gallery 16" className="gallery__img" /> */}
          <img src="../img/15.webp" alt="Gallery 16" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--17">
          {/* <img src="https://source.unsplash.com/random/?cool,smoke-background" alt="Gallery 17" className="gallery__img" /> */}
          <img src="../img/17.webp" alt="Gallery 17" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--18">
          {/* <img src="https://source.unsplash.com/random/?3d,wallpapar" alt="Gallery 18" className="gallery__img" /> */}
          <img src="../img/19.webp" alt="Gallery 18" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--19">
          {/* <img src="https://source.unsplash.com/random/?pc-setup" alt="Gallery 19" className="gallery__img" /> */}
          <img src="../img/18.webp" alt="Gallery 19" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--20">
          {/* <img src="https://source.unsplash.com/random/?fantasy,landscape" alt="Gallery 20" className="gallery__img" /> */}
          <img src="../img/20.webp" alt="Gallery 20" className="gallery__img" />
          </figure>
        </section>
    </div>
  )
}

export default hero