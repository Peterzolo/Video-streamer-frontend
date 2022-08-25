import React, { useEffect } from "react";
import styled from "styled-components";
import BG002 from "../images/Newbg2.jpg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerAction } from "../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

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

const Title = styled.h4`
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
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { name, email, password, confirmPassword } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password does not match");
    }
    if (name && email && password && confirmPassword) {
      dispatch(registerAction({ formValue, navigate, toast }));
    }
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <Container>
      <Wrapper>
        <Left>Left</Left>
        <Right>
          <Form onSubmit={handleFormSubmit}>
            <Title>
              <HowToRegIcon />
              Sign Up
            </Title>
            <InputWrapper>
              <Input
                type="text"
                placeholder="Enter Email"
                name="name"
                value={name}
                required
                onChange={handleChange}
              />
              <Input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                required
                onChange={handleChange}
              />
              <Input
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                required
                onChange={handleChange}
              />
              <Input
                type="password"
                placeholder="ConfirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                required
                onChange={handleChange}
              />
              <Button>Sign Up</Button>
              <Account>
                Already have account ?
                <Link
                  to="/signin"
                  style={{
                    textDecoration: "none",
                    marginLeft: "3px",
                    color: "#fadb14",
                  }}
                >
                  Sign In
                </Link>
              </Account>
            </InputWrapper>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
