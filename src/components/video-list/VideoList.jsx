import React, { useRef, useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListItems from "../list-items/ListItems";

import "./VideoList.scss";

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-left: 50px;
`;
const Wrapper = styled.div``;
const MovieContainer = styled.div`
  /* display: flex;
  margin-left: 50px;
  width: max-content;
  padding: 10px; */
`;
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``

const VideoList = () => {
  const videoListref = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const handleArrowClick = (direction) => {
    setIsMoved(true);
    let distance = videoListref.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      videoListref.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      videoListref.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <Container>
      <Span>Keep watching your favourite movies</Span>
      <Wrapper className="wrapper">
        <ArrowBackIosIcon
          className="sliderArrow left"
          onClick={() => handleArrowClick("left")}
          style={{ display: !isMoved && "none" }}  
        />
        <MovieContainer className="movie-container" ref={videoListref}>
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
          <ListItems />
          <ListItems />
        </MovieContainer>
        <ArrowForwardIosIcon
          className="sliderArrow right"
          onClick={() => handleArrowClick("right")}
        />
      </Wrapper>
    </Container>
  );
};

export default VideoList;
