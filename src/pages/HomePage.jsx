import React from "react";

import BG001 from "../images/Newbg1.jpg";
import BG002 from "../images/Newbg2.jpg";
import styled from "styled-components";
import VideoCard from "./VideoCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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
`;

const Video = styled.div``;

const HomePage = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchRandomVideos = async () => {
      const response = await axios.get(`/video/${type}`);
      setVideos(response.data.result);
    };

    fetchRandomVideos();
  }, [type]);

  return (
    <Container>
      <Wrapper>
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default HomePage;
