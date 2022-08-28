import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import BG003 from "../images/movie-bg001.jpg";
import HomePage from "../pages/HomePage";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
