import React from "react";

import BG001 from "../images/Newbg1.jpg";
import BG002 from "../images/Newbg2.jpg";
import styled from "styled-components";
import VideoCard from "./VideoCard";

const Container = styled.div`
  background-image: url(${BG001});
  background-position: center;
  background-size: cover;

`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-left: 5px;
`

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Wrapper>
    </Container>
  );
};

export default HomePage;
