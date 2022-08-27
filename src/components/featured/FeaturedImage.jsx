import React from "react";
import styled from "styled-components";
import FeaturedImg from "../../images/New-bg-001.jpg";
import ImgTitle from "../../images/video-hubz.jpg";
import PlayCircleFilledTwoToneIcon from "@mui/icons-material/PlayCircleFilledTwoTone";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import "./featureimgStyle.scss"

const Container = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InforWrapper = styled.div`
  position: absolute;
  width: 30%;
  right: 50px;
  bottom: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
const ImageTitle = styled.img`
  width: 30%;
`;
const Description = styled.div`
  background-color: #000000;
  padding: 20px;
  margin-top: 10px;
  border-radius: 15px;
  color: #bfbfbf;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
`;
const PlayButton = styled.button`
  padding: 10px;
  width: 50%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
`;
const InfoButton = styled.button`
  padding: 10px;
  width: 50%;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`;

const FeaturedImage = () => {
  return (
    <Container>
      <Image src={FeaturedImg} />
      <InforWrapper>
        <ImageTitle src={ImgTitle} />
        <Description>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishin
        </Description>

        <ButtonWrapper>
          <PlayButton>
            {/* Play Movie */}
            <PlayCircleFilledTwoToneIcon style ={{fontSize :"50px"}}/>
          </PlayButton>
          <InfoButton>
            <InfoOutlinedIcon style ={{fontSize :"50px"}}/>
          </InfoButton>
        </ButtonWrapper>
      </InforWrapper>
    </Container>
  );
};

export default FeaturedImage;
