import React from "react";
import styled from "styled-components";
import LOGO from "../images/Video-logo.jpg";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";

import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  /* height: 700px; */
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: bold;
  color: #d46b08;
  font-size: 20px;
`;
const Img = styled.img`
  height: 42px;
  margin-right: 5px;
  border-radius: 20px;
`;
const SideItem = styled.div`
  background-color: #bfbfbf;
  padding: 6px;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #434343;
`;

const Hr = styled.hr`
  color: #f5f5f5;
  font-weight: 600;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to="/" style={{ textDecoration: "none", color: "red" }}>
            <Img src={LOGO} />
            V-Hubz
          </Link>
        </Logo>

        <Link
          to="/trend"
          style={{
            textDecoration: "none",
            color: "#262626",
            cursor: "pointer",
          }}
        >
          <SideItem>
            <ExploreOutlinedIcon />
            Explore
          </SideItem>
        </Link>

        <Link
          to="/sub"
          style={{
            textDecoration: "none",
            color: "#262626",
            cursor: "pointer",
          }}
        >
          <SideItem>
            <SubscriptionsOutlinedIcon />
            Subscription
          </SideItem>
        </Link>

        <SideItem>
          <LibraryMusicOutlinedIcon />
          Library
        </SideItem>
        <Hr />
        <SideItem>
          <LibraryMusicOutlinedIcon />
          Music
        </SideItem>
        <SideItem>
          <SportsBasketballOutlinedIcon />
          Sports
        </SideItem>
        <SideItem>
          <SportsEsportsOutlinedIcon />
          Gaming
        </SideItem>
        <Hr />
        <SideItem>
          <MovieOutlinedIcon />
          Movies
        </SideItem>
        <SideItem>
          <LiveTvOutlinedIcon />
          Live
        </SideItem>
        <SideItem>
          <ArticleOutlinedIcon />
          News
        </SideItem>
        <Hr />
        <SideItem>
          <SettingsOutlinedIcon />
          Settings
        </SideItem>
        <SideItem
          onClick={() => setDarkMode(!darkMode)}
          style={{ cursor: "pointer", borderRadius: "10px" }}
        >
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </SideItem>
      </Wrapper>
    </Container>
  );
};

export default Menu;
