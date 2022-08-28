import React from "react";
import styled from "styled-components";
import FeaturedImg from "../../images/New-bg-001.jpg";
import ImgTitle from "../../images/video-hubz.jpg";
import PlayCircleFilledTwoToneIcon from "@mui/icons-material/PlayCircleFilledTwoTone";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import "./featureimgStyle.scss";

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
  width: 100%;
  height: 100px;
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
const Category = styled.div`
  position: absolute;
  top: 200px;
  left: 50px;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: grey;
`;
const CategorySpan = styled.span`
  color: #d48806;
  background-color: green;
  padding: 5px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
   margin-left: 20px;

`;

const Select = styled.select`
  cursor: pointer;
  background-color: #262626;
  color: #b2b1b1;
  padding: 4px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const Option = styled.option`

`;

const FeaturedImage = ({ type }) => {
  return (
    <Container>
      {type && (
        <Category>
          <CategorySpan>{type === "movie" ? "Movie" : "Series"}</CategorySpan>
          <Select name="genre" id="genre">
            <Option>Genre</Option>
            <Option value="romamce">Romamce</Option>
            <Option value="history">History</Option>
            <Option value="documenmtaries">Documentaries</Option>
            <Option value="Love">Love</Option>
            <Option value="action">Action</Option>
            <Option value="local">Local</Option>
            <Option value="epic">Epic</Option>
            <Option value="fantasy">Fantasy</Option>
            <Option value="comedy">Comedy</Option>
            <Option value="musical">Musical</Option>
            <Option value="sport">Sport</Option>
            <Option value="sci-fi">Sci-Fi</Option>
            <Option value="soap">Soap</Option>
            <Option value="cartoon">Romamce</Option>
            <Option value="thriller">Thriller</Option>
            <Option value="war">War</Option>
          </Select>
        </Category>
      )}

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
            <PlayCircleFilledTwoToneIcon
              style={{ fontSize: "30px", color: "red" }}
            />
          </PlayButton>
          <InfoButton>
            <InfoOutlinedIcon style={{ fontSize: "30px", color: "blue" }} />
          </InfoButton>
        </ButtonWrapper>
      </InforWrapper>
    </Container>
  );
};

export default FeaturedImage;
