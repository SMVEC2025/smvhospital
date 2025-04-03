import React, { useEffect, useRef, useState } from "react";
import thumbimage from "../assets/images/thumbnail.png";
import '../styles/HomeYoutube.css'
import playbutton from '../assets/images/playbutton.png'
import playbuttont from '../assets/images/playbuttont.png'
const HomeYoutube = () => {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const videoId = "OeeMxu2bpXc"; // Replace with your actual video ID

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    } else {
      initializePlayer();
    }
  }, []);

  // Initialize the YouTube Player API
  const initializePlayer = () => {
    if (window.YT && iframeRef.current) {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        videoId: videoId,
        playerVars: {
          enablejsapi: 1,
          autoplay: 0,
          mute:1,
          controls: 1,
          modestbranding: 1,
        },
        events: {
          onStateChange: handleStateChange,
        },
      });
    }
  };

  // Handle video state changes
  const handleStateChange = (event) => {
    switch (event.data) {
      case window.YT.PlayerState.PLAYING:
        setIsPlaying(true);
        setIsPaused(false);
        setIsEnded(false);
        break;
      case window.YT.PlayerState.PAUSED:
        setIsPaused(true);
        setIsPlaying(false);
        break;
      case window.YT.PlayerState.ENDED:
        setIsEnded(true);
        setIsPlaying(false);
        setIsPaused(false);
        break;
      default:
        break;
    }
  };

  

  // Function to play video when clicking on the thumbnail
  const handleVideoClick = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <div className="ytvideo-container">
      {/* Overlay Content (Hidden when playing) */}
      {!isPlaying || isPaused || isEnded ? (
        <div className="overlay" onClick={handleVideoClick}>
          <h2>Where Care Meets Excellence</h2>
          <p>At SMV Hospital, every heartbeat matters. We don’t just treat illnesses—we care for people. With advanced medical expertise and a patient-first approach, we are committed to providing healing, hope, and a healthier tomorrow.</p>
          <img onClick={handleVideoClick} className="playbutton" src={playbuttont} alt="" />
        </div>
      ) : null}

      {/* Show Thumbnail Before Playing or After Video Ends */}
      {(!isPlaying || isEnded) && (
        <img
          src={thumbimage}
          alt="Video Thumbnail"
          className="video-thumbnail"
          onClick={handleVideoClick}
        />
      )}

      {/* YouTube Video */}
      <iframe
        ref={iframeRef}
        id="youtube-video"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&controls=1&showinfo=0&modestbranding=1`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        title="Background Video"
      ></iframe>
    </div>
  );
};

export default HomeYoutube;
