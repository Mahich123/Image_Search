import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import NavBar from "./Components/NavBar/NavBar";
import Genre from "./Components/HomePage/Genre/Genre";
import Contributors from "./Components/HomePage/Contributors/Contributors";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Genre />
        <Contributors />
      </Router>
    </div>
  );
}

export default App;
