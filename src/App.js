import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import NavBar from "./Components/HomePage/NavBar/Navbar";
import Genre from "./Components/HomePage/Genre/Genre";
import Contributors from "./Components/HomePage/Contributors/Contributors2";
import Contact from "./Components/HomePage/Contact/Contact";
import Footer from "./Components/HomePage/Fotter/Footer";

function App() {
  return (
    <div className="App overflow-hidden ">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Genre />
        <Contributors />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
