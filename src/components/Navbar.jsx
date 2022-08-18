import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import HomeIcon from "@mui/icons-material/Home";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  color: white;
  background-color: ${({ theme }) => theme.bgLighter};
  position: sticky;
  top: 0;
  gap: 3;
`;

const NavLinks = styled.div`
  flex: 1;
  /* background-color: #bfbfbf; */
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  /* color: #595959; */
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Links = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;
const Search = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  color: #595959;
  padding: 10px;
  border-radius: 10px;
`;

const Input = styled.input`
  text-align: center;
  background-color: #bfbfbf;
  border: none;
  border-radius: 20px;
`;
const Auth = styled.div`
  display: flex;
  flex: 1;
  color: #595959;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
`;
// const SignUp = styled.div`
//   font-weight: 500;
//   text-decoration: none;
//   background-color: #bfbfbf;
//   padding: 5px;
//   border-radius: 5px;
// `;
// const SignIn = styled.div`
//   font-weight: 500;
//   text-decoration: none;
//   background-color: #bfbfbf;
//   padding: 5px;
//   border-radius: 5px;
// `;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #d48806;
  color: #d48806;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearch = () => {};
  return (
    <Container>
      <NavLinks>
        <Links>
          {" "}
          <HomeIcon />
          <Link to="/" style={{ textDecoration: "none", color: "#262626" }}>
            Home
          </Link>{" "}
        </Links>
        <Links>
          {" "}
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#262626" }}
          >
            About us
          </Link>{" "}
        </Links>
        <Links>
          {" "}
          <Link
            to="/upload"
            style={{ textDecoration: "none", color: "#262626" }}
          >
            Upload
          </Link>{" "}
        </Links>
        <Links>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "#262626" }}
          >
            Contact
          </Link>{" "}
        </Links>
      </NavLinks>
      <Search>
        <SearchOutlinedIcon
          style={{ position: "absolute", right: 600, cursor: "pointer" }}
          onClick={handleSearch}
        />
        <Input placeholder="Search" />
      </Search>
      <Auth>
        <Button>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#262626" }}
          >
            <HowToRegIcon />
            SIGN UP
          </Link>
        </Button>
        <Button>
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "#262626" }}
          >
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Link>
        </Button>
      </Auth>
    </Container>
  );
};

export default Navbar;
