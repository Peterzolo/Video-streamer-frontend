import React from "react";
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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  top: 0;
`;

const Left = styled.div``;
const Logo = styled.img`
  width: 50px;
  margin-top: 3px;
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
  width: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;
const UserName = styled.p`


`;
// const Avatar = styled.img``;

const Navbar = () => {
  // const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSearch = () => {};

  return (
    <Container>
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
        <CircleNotificationsRoundedIcon style={{marginRight : "10px", color : "#fa8c16"}} />
        <Avatar src={AvatarLogo} />
        <ArrowDropDownRoundedIcon />
        <UserName style={{marginRight : "10px"}}>Peter</UserName>
      </Right>
    </Container>
  );
};

export default Navbar;
