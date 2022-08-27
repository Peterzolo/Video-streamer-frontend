import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "../utility/theme";
import SignIn from "../pages/SignIn";
import About from "../pages/About";

import Contact from "../pages/Contact";
import SignUp from "../pages/SignUp";
import HomePage from "../pages/HomePage";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div`
  /* display: flex; */
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Container>
      <BrowserRouter>
        <Main>
          <HomePage />
          <Wrapper>
            <ToastContainer />
            <Routes></Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
