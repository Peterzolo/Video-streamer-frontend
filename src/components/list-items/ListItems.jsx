import React, { useState } from "react";
import styled from "styled-components";
import ImageVideoOO1 from "../../images/image-movie001.jpg";
import Trailler from "../../images/image-movie001.jpg";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import "./ListItem.scss";

const ListItems = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="list-items"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={ImageVideoOO1} alt="" />
      <div className="item-info">
        <div className="icons">
          <AddBoxIcon  className="addBox"/>
          <PlayCircleIcon className="play"/>
          <ThumbUpOutlinedIcon  className="like"/>
          <ThumbDownOutlinedIcon  className="dislike"/>
        </div>
        <div className="info-top">
          <span className="duration">2hr : 20mins</span>
          <span className="limit">18 +</span>
          <span className="year">2012</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          temporibus aut velit odit, nihil natus laborum consequatur dolorum
        </div>
        <div className="genre">Comedy</div>
      </div>
    </div>
  );
};

export default ListItems;
