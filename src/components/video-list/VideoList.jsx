import React, { useRef, useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListItems from "../list-items/ListItems";

import "./VideoList.scss";

const VideoList = () => {
  const videoListref = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const listRef = useRef();

  const handleArrowClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="container">
      <spand className="list-title">
        Continue To Watch Your Favourite Movie
      </spand>
      <div className="wrapper">
        <ArrowBackIosIcon
          className="slider-arrow left"
          onClick={() => handleArrowClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="movie-container" ref={listRef}>
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
        </div>
        <ArrowForwardIosIcon
          className="slider-arrow right"
          onClick={() => handleArrowClick("right")}
        />
      </div>
    </div>
  );
};

export default VideoList;
