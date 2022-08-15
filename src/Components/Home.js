import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";

function Home() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

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
  };

  return (
    <Container>
      <Top>
        <h1>Welcome to Image search</h1>
        <form onSubmit={onSubmit}>
          <TextField
            id="standard-basic"
            label="e.g. Nature"
            variant="standard"
            onChange={onChange}
            autoComplete="off"
            value={query}
          />
          <input type="submit" value="search" />
        </form>
      </Top>

      <Box>
        {images.map((image, i) => (
          <img
            src={image}
            key={i}
            alt="img"
          />
        ))}

      </Box>
    </Container>
  );
}

export default Home;

const Container = styled.div`
    text-align: center;
    input[type="submit" i] {
        border: none;
        background: #230f85;
        color: white;
        padding: 1em 2em 1em 2em;
        border-radius: 8px;
        margin-left: 0.5em;
        margin-top: 1em;
        cursor: pointer;
    }
    input[type="submit" i]:hover{
      background: #3a23a8;
      border: 1px solid darkblue; 
      transition: all 200ms ease-out;
    }
    }
`;


const Top = styled.div`
    margin-top: 1.5em;
    TextField {
        margin-top: 5em;
    }`;

const Box = styled.div`
    img {
        margin: 1em;
        border-radius: 1em;
        height: 256px;
        width: 256px;
        object-fit: cover;
        object-position: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
}`;
