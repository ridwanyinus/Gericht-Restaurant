import React, { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
   const [playVideo, setplayVideo] = React.useState(false);
   const vidRef = React.useRef();

   const handleVideo = () => {
      setplayVideo((prevPlayVideo) => !prevPlayVideo);
      if (playVideo) {
         vidRef.current.pause();
      } else {
         vidRef.current.play();
      }
   };
   return (
      <div className="app__video">
         <video src={meal} ref={vidRef} typeof="video/mp4" controls={false} muted></video>
         <div className="app__video-overlay flex__center">
            <div className="app__video-overlay_cirle flex__center" onClick={handleVideo}>
               {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
            </div>
         </div>
      </div>
   );
};

export default Intro;
