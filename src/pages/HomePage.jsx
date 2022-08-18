import React from "react";

import BG001 from "../images/Newbg1.jpg";
import BG002 from "../images/Newbg2.jpg";
import styled from "styled-components";
import VideoCard from "./VideoCard";

const Container = styled.div`
  background-image: url(${BG001});
  background-position: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100vh;
  background-size: cover;
  padding: 10px;

  /* gap: 5px; */
`;



const HomePage = () => {
  return (
    <Container>
   
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
 
    </Container>
  );
};

export default HomePage;
