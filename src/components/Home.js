import React, { useState, useEffect } from "react";
import Style from "./Home.module.scss";
import me from "../img/moonrooster.png";
import classNames from "classnames";
import { Box } from "@mui/material";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import DarkAnimation from "../img/MR_1440x900_BlackBG.mp4";
import LightAnimation from "../img/MR_1440x900_WhiteBG.mp4";

let colors = ["#F2F2F2", "#1c75bc"];

const info = {
  firstName: "Moon Rooster",
  lastName: "Lalli",
  initials: "mr",
  position: "a Website Developer & Designer",
  selfPortrait: "moonrooster",
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🧑‍💻",
      text: "I develop and design websites",
    },
    {
      emoji: "🤖",
      text: "I use a combination of code, no-code, & AI tools",
    },
    {
      emoji: "🌎",
      text: "Based in Austin, TX",
    },
    {
      emoji: "📧",
      text: "moonroosterdesigns@gmail.com",
    },
    {
      emoji: "📱",
      text: "737-346-7797",
    },
  ],
  socials: [
    {
      link: "https://facebook.com",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/BrianLalli",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/brianlalli11/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/brianlalli11",
      icon: "fa fa-twitter",
      label: "twitter",
    },
  ],
};

export default function Home({ darkMode = true, handleDarkModeToggle }) {
  const [showMainContent, setShowMainContent] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(
    darkMode ? DarkAnimation : LightAnimation
  );

  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    console.log("Dark mode changed:", darkMode);
    setCurrentAnimation(darkMode ? DarkAnimation : LightAnimation);
  }, [darkMode]);

  useEffect(() => {
    console.log("Setting timer to show main content and hide animation");
    const timer = setTimeout(() => {
      console.log("Timer fired: Showing main content and hiding animation");
      setShowMainContent(true);
      setHideAnimation(true); // Hide the animation
    }, 10000); // Assuming the animation duration is 5000 milliseconds (5 seconds)

    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer); // Cleanup
    };
  }, []);

  useEffect(() => {
    console.log("Setting timer to make content visible");
    setTimeout(() => {
      console.log("Timer fired: Making content visible");
      setContentVisible(true);
    }, 2000); // 2 seconds delay
  }, []);

  useEffect(() => {
    const videoElement = document.getElementById("myVideo");

    const handleVideoEnd = () => {
      // Hide the video when it ends
      videoElement.style.display = "none";
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      // Cleanup
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "100%" }}>
      {/* Animation container */}
      <div
        className={`${Style["sleeping-rooster-container"]} ${
          hideAnimation ? Style["hidden"] : ""
        }`}
      >
        <video
          id="myVideo"
          autoPlay
          muted
          playsInline
          className={Style["sleeping-rooster"]}
          key={darkMode ? "dark" : "light"}
        >
          <source
            src={darkMode ? DarkAnimation : LightAnimation}
            type="video/mp4"
          />
        </video>
      </div>

      {showMainContent && (
        <Box
          component={"main"}
          className={`${contentVisible ? "visible" : "homepage-content"}`}
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={"calc(100vh - 175px)"}
        >
          <Box
            className={classNames(
              Style.avatar,
              Style.shadowed,
              Style["moon-glow"]
            )}
            alt={"image of Moon Rooster"}
            style={{ background: info.gradient }}
            component={"img"}
            src={me}
            width={{ xs: "35vh", md: "40vh" }}
            height={{ xs: "35vh", md: "40vh" }}
            borderRadius={"50%"}
            p={"0.75rem"}
            mb={{ xs: "1rem", sm: 0 }}
            mr={{ xs: 0, md: "2rem" }}
          />
          <Box>
            <h1>
              Hi, I'm{" "}
              <span
                style={{
                  background: info.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {info.firstName}
              </span>
              <span className={Style.hand}>🐓</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={"ul"} p={"0.8rem"}>
              {info.miniBio.map((bio, index) => (
                <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
              ))}
            </Box>
            <Box
              display={"flex"}
              gap={"1.5rem"}
              justifyContent={"center"}
              fontSize={{ xs: "2rem", md: "2.5rem" }}
            >
              {info.socials.map((social, index) => (
                <SocialIcon
                  key={index}
                  link={social.link}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
}
