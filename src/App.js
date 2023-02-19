import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import NavBar from "./Components/HomePage/NavBar/Navbar";
import Genre from "./Components/HomePage/Genre/Genre";
import Explore from "./Components/HomePage/Explore/Explore";
import Contributors from "./Components/HomePage/Contributors/Contributors2";
import Contact from "./Components/HomePage/Contact/Contact";
import Footer from "./Components/HomePage/Footer/Footer";
import ResultDesign from "./Components/HomePage/SearchResults/ResultDesign";




function App() {
  return (
    <div className="App overflow-hidden ">
      <Router>
       
        <Routes>
          <Route path="/" element={
            <>
             <NavBar color="#303b4c"  logo="../img/logo/is(8).png" textColor="white"/>
             <HomePage />
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
