import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import BG003 from "../images/movie-bg001.jpg";
import HomePage from "../pages/HomePage";
import VideoScreen from "../pages/video-screen/VideoScreen";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/video" element={<VideoScreen/>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
