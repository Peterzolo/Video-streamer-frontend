import React from "react";
import styled from "styled-components";
import ImageVideoOO1 from "../../images/image-movie001.jpg"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import "./ListItem.scss"
const Container = styled.div`
  width: 225px;
  height: 120px;
  background-color: #ad8b00;
  margin-top: 5px;
  margin-right: 5px;
  /* padding: 10px; */
  border-radius: 10px;
  margin-bottom: 5px;
  &:hover{
  width: 330px;
  height: 300px;
  cursor: pointer;
  }
 
`;
const Image = styled.img`
width: 100%;
height: 120px;
padding: 5px;
object-fit: cover;
cursor: pointer;
&:hover{
    width: 325px;
    height: 300px;
  }
`;
const ItemInfo = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding: 5px;
cursor: pointer;
color: white;
`
const ItemInfoTop = styled.div`
padding: 10px;
display: flex;
align-items: center;
`
const Duration = styled.div`
background-color: #262626;
margin-right: 3px;
padding: 5px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
color: #8c8c8c;
font-size: 18px;
font-weight: 400;
`
const AgeLimit = styled.div`
background-color: #262626;
margin-right: 3px;
padding: 5px;
color: #8c8c8c;
font-size: 18px;
font-weight: 400;

`
const Year = styled.div`
background-color: #262626;
padding: 5px;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
color: #8c8c8c;
font-size: 18px;
font-weight: 400;
`
;

const ListItems = () => {
  return (
    <Container>
      <Image src={ImageVideoOO1} alt =""/>
      <ItemInfo>
        <PlayCircleIcon/>
        <AddBoxIcon/>
        <ThumbUpOutlinedIcon/>
        <ThumbDownOutlinedIcon/>
      </ItemInfo>
      <ItemInfoTop>
        <Duration>2hr:36 min</Duration>
        <AgeLimit>+16</AgeLimit>
        <Year>2021</Year>
      </ItemInfoTop>
    </Container>
  );
};

export default ListItems;
