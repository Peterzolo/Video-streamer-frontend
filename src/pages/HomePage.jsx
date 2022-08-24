import React from "react";

import BG001 from "../images/Newbg1.jpg";
import BG002 from "../images/Newbg2.jpg";
import styled from "styled-components";
import VideoCard from "./VideoCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchAllVideosFailure,
  fetchAllVideosRequest,
  fetchAllVideosSucess,
} from "../redux/slice/videoSlice";

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
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchVideos = async () => {
      dispatch(fetchAllVideosRequest());
      try {
        const response = await axios.get(`/video/fetch-all`);
        dispatch(fetchAllVideosSucess());
        setVideos(response.data.result);
      } catch (error) {
        dispatch(fetchAllVideosFailure());
      }
    };
    fetchVideos();
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
