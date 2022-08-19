import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "../utility/theme";
import SignIn from "../pages/SignIn";
import About from "../pages/About";
import Upload from "../pages/Upload";
import Contact from "../pages/Contact";
import SignUp from "../pages/SignUp";
import HomePage from "../pages/HomePage";
import VideoDetails from "../pages/VideoDetails";

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
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                {/* <Route path="/"> */}
                <Route index element={<HomePage type="random"/>} />
                <Route path="/trends" element={<HomePage type="trends" />} />
                {/* <Route path="/trends" element={<HomePage type="trends" />} /> */}
                <Route
                  path="/subscription"
                  element={<HomePage type="subscription" />}
                />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="about" element={<About />} />
                <Route path="upload" element={<Upload />} />
                <Route path="contact" element={<Contact />} />
                <Route path="video">
                  <Route path=":id" element={<VideoDetails />} />
                </Route>
                {/* </Route> */}
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
