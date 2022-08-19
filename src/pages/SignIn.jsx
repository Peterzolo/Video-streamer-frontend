import React from "react";
import styled from "styled-components";
import BG002 from "../images/Newbg2.jpg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-image: url(${BG002});
  background-position: center;
  background-size: cover;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Left = styled.div`
  margin-top: 100px;
`;
const Right = styled.div`
  margin-top: 100px;
`;

const Title = styled.h3`
  padding-top: 20px;
  text-align: center;
  color: #f0f0f0;
`;

const Form = styled.form`
  width: 100%;
  background-color: #595959;
  padding-bottom: 20px;
  border-radius: 10px;
  opacity: 0.9;
`;

const Input = styled.input`
  margin-top: 20px;
  padding: 10px;
  /* background-color: transparent; */
  border-radius: 10px;
  border: none;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10; */
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  background-color: #faad14;
  border: none;
  border-radius: 10px;
`;

const Account = styled.p`
  margin-top: 5px;
  color: #f0f0f0;
`;

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const handleChange = () => {};
  const handleFormSubmit = () => {};

  return (
    <Container>
      <Wrapper>
        <Left>Left</Left>
        <Right>
          <Form onSubmit={handleFormSubmit}>
            <Title>
              <AccountCircleOutlinedIcon />
              Sign In
            </Title>
            <InputWrapper>
              <Input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleChange}
              />
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
              />
              <Button>Sign In</Button>
              <Account>
                Not yet registered?
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    marginLeft: "3px",
                    color: "#fadb14",
                  }}
                >
                  Sign Up
                </Link>
              </Account>
            </InputWrapper>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
