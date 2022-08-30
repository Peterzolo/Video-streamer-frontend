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
  return (
    <div className="list-items">
      <img src={ImageVideoOO1} alt="" />
      
      </div>
  );
};

export default ListItems;
