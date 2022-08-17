import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./homePage.css";
import { red } from "@mui/material/colors";

function HomePage() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  const url = `https://imageapibysijey.mahi1233.repl.co/?q=${query}`;

  const geT = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setImages(data.images);
    console.log(data);
    setQuery("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    geT();
  };

  const onChange = (e) => {
    setQuery(e.target.value);
    setMessage(e.target.value)
  };

  // console.log(images);
  return (
    <div className="main-container">
      <section className="header">
        <div className="header-text">
          <h1 className="pc">Welcome to <span>Image Search</span></h1>
          <h1 className="mb">Welcome to<br/> <span>Image Search</span></h1>
          <p>Freely-usable images, Powered by creators worldwide.</p>
          <form onSubmit={onSubmit} className="searchbar">
            <TextField
              style={{ padding: "15px" }}
              className="searchbar-field"
              id="input-with-icon-textfield"
              placeholder="e.g. Nature"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={onChange}
              autoComplete="off"
              value={query}
              fullWidth
            />
            <input
              type="submit"
              value="Search"
              className="search-btn"
            />
          </form>
        </div>
      </section>

      {/*//todo: clicking the Search btn removes the search query text. uncomment to show search query text above the results to aid UX */}
      {/* <div className="query-txt">
        <span>Image Search:</span>
        <h2>{message}</h2>
      </div> */}

      <div className="cards">
        {images.map((image, i) => (
          <img
            src={image}
            key={i}
            alt="img"
          />
        ))}

      </div>
    </div>
  );
}

export default HomePage;



