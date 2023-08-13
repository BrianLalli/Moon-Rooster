import React, { useState, useEffect } from "react";
import Style from "./Home.module.scss";
import me from "../img/moonrooster.png";
import classNames from "classnames";
import { Box } from "@mui/material";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import DarkModeTooltip from "./DarkModeTool.js";
import SleepingRooster from "../img/sleepingrooster.png";

let colors = ["#F2F2F2", "#A6A6A6"];

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
      text: "I build websites from scratch and redesign existing ones",
    },
    {
      emoji: "🤖",
      text: "I use a combination of code, AI, & no code tools",
    },
    {
      emoji: "🌎",
      text: "Based in Austin, TX",
    },
    {
      emoji: "📧",
      text: "moonroosterdesigns@gmail.com",
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

export default function Home({ darkMode, handleDarkModeToggle }) {
  // State to handle tooltip visibility, initially true if darkMode is false
  const [showTooltip, setShowTooltip] = useState(!darkMode);

  // Update showTooltip whenever darkMode changes
  useEffect(() => {
    setShowTooltip(!darkMode);
  }, [darkMode]);

  return (
    <div style={{ position: "relative", height: "100%" }}>
      {showTooltip && (
        <DarkModeTooltip
          onClick={handleDarkModeToggle}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        />
      )}
      {!darkMode && (
        <div className={Style["sleeping-rooster-container"]}>
          <img
            src={SleepingRooster}
            alt="Sleeping Rooster"
            className={Style["sleeping-rooster"]}
          />
        </div>
      )}

      {darkMode && ( // Render the content only if darkMode is enabled
        <Box
          component={"main"}
          className="homepage-content"
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
