import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import HomePage from './Components/HomePage/HomePage';
import NavBar from "./Components/HomePage/NavBar/Navbar";
import Genre from "./Components/HomePage/Genre/Genre";
import Explore from "./Components/HomePage/Explore/Explore";
import Contributors from "./Components/HomePage/Contributors/Contributors2";
import Contact from "./Components/HomePage/Contact/Contact";
import Footer from "./Components/HomePage/Footer/Footer";
import ResultDesign from "./Components/HomePage/SearchResults/ResultDesign";
import SearchResult from "./Components/HomePage/SearchResults/SearchResult";




function App() {

  const [images, setImages] = useState([]);

  const handleSearch = (query) => {
    setImages([]);
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;
    fetch(url, { headers: { Authorization: process.env.REACT_APP_API_KEY } })
      .then((response) => response.json())
      .then((data) => setImages(data.photos))
      .catch((error) => console.error(error));
  };

  
  return (
    <div className="App overflow-hidden ">
      <Router>
       
        <Routes>
          <Route path="/" element={
            <>
             <NavBar color="#303b4c"  logo="../img/logo/is(8).png" textColor="white"/>
             <HomePage onSearch={handleSearch}/>
             <Genre />
            <Explore />
            <Contributors />
            <Contact />
            </>
          } />

           <Route exact path="/resultdesign" element={
            <>
             <NavBar color="#EFEDED" logo="../img/logo/is(10).png" textColor="black"/>
             <ResultDesign />
            </>
          } />

          <Route exact path="/result/:query" element={
            <>
              <SearchResult results={images} />
            </>
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
