import React from "react";
import styled from "styled-components";
import TestImage from "../images/background002.jpg";
import Thumbnail from "../images/video-hubz.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "250px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 5px;
  margin-top: 10px;
  border-radius: ${(props) => props.type !== "sm" && "10px"};
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
  border-top-left-radius: ${(props) => (props.type === "sm" ? "px" : "10px")};
  border-top-right-radius: ${(props) => (props.type === "sm" ? "px" : "10px")};
  border-bottom-left-radius: ${(props) => props.type === "sm" && "10px"};
  border-top-left-radius: ${(props) => props.type === "sm" && "10px"};
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "2px"};
  margin-left: ${(props) => props.type === "sm" && "-px"};
  gap: 12px;
  flex: 1;
  background-color: #050606;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const VideoCard = ({ type }) => {
  return (
    <Link to="/video/id" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={TestImage} />
        <Details type={type}>
          <ChannelImage type={type} src={Thumbnail} />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Video Hubz</ChannelName>
            <Info>6,445,223 • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default VideoCard;