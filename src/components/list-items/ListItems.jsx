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

  // const trailler = "https://www.imdb.com/video/vi1080541721?ref_=vi_tr_tr_vp_1";
  // const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const trailer = "https://player.vimeo.com/external/439823519.sd.mp4?s=eabe97faa9cf8117248870a22d27ecf4a5d8124f&profile_id=164&oauth2_token_id=57447761";

  return (
    <div
      className="list-items"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={ImageVideoOO1} alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop/>
          <div className="item-info">
            <div className="icons">
              <AddBoxIcon className="addBox" />
              <PlayCircleIcon className="play" />
              <ThumbUpOutlinedIcon className="like" />
              <ThumbDownOutlinedIcon className="dislike" />
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
        </>
      )}
    </div>
  );
};

export default ListItems;
