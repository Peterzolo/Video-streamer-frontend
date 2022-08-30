import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import "./VideoScreen.scss";
import { Link } from "@mui/material";

const VideoScreen = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div>
          <Link to="/">
            <KeyboardBackspaceIcon />
            back to home
          </Link>
        </div>
        <div className="row">
          <div className="col-md-8">
            <video
              className="video"
              autoPlay
              progress
              controls
              src="https://player.vimeo.com/external/439823519.sd.mp4?s=eabe97faa9cf8117248870a22d27ecf4a5d8124f&profile_id=164&oauth2_token_id=57447761"
            />
          </div>
          <div className="col-md-4">Right</div>
        </div>
      </div>
    </div>
  );
};

export default VideoScreen;
