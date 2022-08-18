import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ChannelImage from "../images/Video-logo.jpg"
import Comments from "./Comments";
import VideoCard from "./VideoCard";

const Container = styled.div`
  display: flex;
  gap: 24px;
  /* background-color: #d9d9d9; */
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
 padding-left: 20px;
 padding-right: 0px;
 margin-top: 10px;

`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-left: 20px;
  background-color: #d9d9d9;
  padding: 10px;
  border-radius: 20px;
  width: 150px;
  text-align: center;

  /* color: ${({ theme }) => theme.text}; */
  color: red;
`;
const Details = styled.div`
  /* margin-left: 20px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const Info = styled.span`
  color: #141414;
  font-weight: 500;
  background-color: #d9d9d9;
  padding: 10px;
  border-radius: 20px;
`;

const Button = styled.div``;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  background-color: #d9d9d9;
  border-radius: 20px;
  padding: 10px;
`;

const RecommendedVideos = styled.div`
  flex: 2;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #8c8c8c;
`


const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  background-color: #d9d9d9;
  padding: 10px;
  border-radius: 10px;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
  color: red;

`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
  color: #595959;
  background-color: #fafafa;
  padding: 10px;
  border-radius: 10px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;
const VideoDetails = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/5t9WQHcy6dE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Video Title</Title>
        <Details>
          <Info> 10,234,654 views - August 15, 2022</Info>
          <Buttons>
          <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
      <Hr></Hr>
      <Channel>
        <ChannelInfo>
          <Image src={ChannelImage}/>
          <ChannelDetail>
            <ChannelName>Video Hubz</ChannelName>
            <ChannelCounter>1million likes</ChannelCounter>
            <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </Description>
          </ChannelDetail>
        </ChannelInfo>
        <Subscribe>SUBSCRIBE</Subscribe>
      </Channel>
      <Hr></Hr>
      <Comments/>
      </Content>
      <RecommendedVideos>
      <VideoCard type = "sm"/>
      <VideoCard type = "sm"/>
      <VideoCard type = "sm"/>
      <VideoCard type = "sm"/>
      <VideoCard type = "sm"/>
      <VideoCard type = "sm"/>
      </RecommendedVideos>
    </Container>
  );
};

export default VideoDetails;
