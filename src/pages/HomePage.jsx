import React from "react";
import BG001 from "../images/Newbg1.jpg";
import BG002 from "../images/Newbg2.jpg";
import BG003 from "../images/movie-bg001.jpg";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchAllVideosFailure,
  fetchAllVideosRequest,
  fetchAllVideosSucess,
} from "../redux/slice/videoSlice";
import Navbar from "../components/Navbar";
import VideoList from "../components/video-list/VideoList";
import FeaturedPage from "../components/featured/FeaturePage";

const Container = styled.div`
  background-image: url(${BG003});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  width: 100%;
`;

const HomePage = () => {
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
  }, []);

  return (
    <Container>
      <FeaturedPage type="series" />
      <VideoList />
    </Container>
  );
};

export default HomePage;
