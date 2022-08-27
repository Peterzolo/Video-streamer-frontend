import React, { useState } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import HomeIcon from "@mui/icons-material/Home";
import MovieLogo from "../images/movie-logo.png";
import AvatarLogo from "../images/avatar.jpg";
import { useSelector } from "react-redux";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import "../components/Style.scss";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 999;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);
  /* position: sticky; */
  position: fixed;
  width: 100%;
  top: 0;
`;

const Left = styled.div``;
const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 3px;
  border-radius: 20px;
  object-fit: cover;
  cursor: pointer;
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Navlink = styled.div`
  margin-left: 10px;
  color: #d9d9d9;
  font-weight: 400;
  cursor: pointer;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  text-align: center;
  border-radius: 20px;
  background-color: #434343;
  border: none;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin-right: 10px;
  object-fit: cover;
  cursor: pointer;
`;
const UserName = styled.p`
  color: #ffe7ba;
  font-weight: 300;
`;
const Profile = styled.div`
  /* display: none; */
`;
const Setting = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
`;
const Logout = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
`;

const Option = styled.div`
  /* &:hover {
  display: flex;
} */
`;
// const Logout = styled.img``;

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  // const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSearch = () => {};

  return (
    <Container className={isScrolled ? "navbar scrolled" : "navbar"}>
      <Left>
        <Logo src={MovieLogo} />
      </Left>
      <Middle>
        <Navlink>
          <HomeIcon />
          Home
        </Navlink>
        <Navlink>About</Navlink>
        <Navlink>Contact</Navlink>
        <Navlink>List</Navlink>
        <Navlink>Movie</Navlink>
        <Navlink>Trending</Navlink>
      </Middle>
      <Search>
        <SearchOutlinedIcon style={{ position: "absolute", right: "350" }} />
        <Input placeholder="Search" />
      </Search>
      <Right>
        <CircleNotificationsRoundedIcon
          style={{ marginRight: "10px", color: "#fa8c16" }}
        />
        <Avatar src={AvatarLogo} />

        <Profile className="profile">
          <ArrowDropDownRoundedIcon className="arrow" />
          <Option className="option">
            <Setting>
              <SettingsOutlinedIcon />
              Setting
            </Setting>
            <Logout>
              <LogoutOutlinedIcon />
              Logout
            </Logout>
          </Option>
        </Profile>
      </Right>
    </Container>
  );
};

export default Navbar;
