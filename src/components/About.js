import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import ScrollTrigger from "react-scroll-trigger";
import me from "../img/self.png";
// import {info} from "../../info/Info";

let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

const info = {
  firstName: "Moon",
  lastName: "Rooster",
  initials: "mr",
  position: "a Website Developer & Designer",
  selfPortrait: "moonrooster",
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: "#61DBFB",
  bio: "Hello, World! I'm Brian Lalli & I'm the Founder/Lead Developer at Moon Rooster. I am passionate about developing and designing websites and applications that make life simpler! I have 6 years of combined experience in E-Commerce, Data Analytics, and Software Development at companies like Amazon, Whole Foods Market, & Anheuser-Busch InBev.",
  skills: {
    proficientWith: [
      "Website Development",
      "Website Design",
      "Mobile App Development",
      "E-Commerce Consulting",
      "Data Analysis & Visualization",
      "Automation",
    ],
  },
  hobbies: [
    {
      label: "Intricacy of design",
      emoji: "🎨",
    },
    {
      label: "Custom code requirements",
      emoji: "✍️",
    },
    {
      label: "E-commerce needs",
      emoji: "🛒",
    },
    {
      label: "Amount of data",
      emoji: "📊",
    },
    {
      label: "# of revisions",
      emoji: "⚒️",
    },
    {
      label: "# of pages",
      emoji: "📖",
    },
  ],
};

export default function About() {
  const [fadeIn, setFadeIn] = React.useState(false);
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <div className={Style.imageContainer}>
          <div
            className={Style.imageWrapper}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={me}
              alt="Brian Lalli"
              className={Style.selfPortrait}
              style={{
                borderRadius: "50%", // Crop into a circle
                width: "50%", // Make it half its current size
              }}
            />
          </div>
        </div>
        <p className={Style.fadeIn}>
          <span style={{ color: info.baseColor }}>About Me: </span>{" "}
        </p>
        <p className={Style.fadeIn}>{info.bio}</p>
        <p className={Style.fadeIn}>
          <span style={{ color: info.baseColor }}>
            For those curious about the name, Moon is my dog's name and Rooster
            is my spirit animal.
          </span>{" "}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <ScrollTrigger onEnter={() => setFadeIn(true)}>
        <div className={fadeIn ? Style.fadeIn : Style.hidden}>
          <p>
            <span style={{ color: info.baseColor }}>Services Offered:</span>{" "}
          </p>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              textAlign: "left",
              display: "block",
            }}
          >
            {info.skills.proficientWith.map((proficiency, index) => (
              <li
                key={index}
                style={{ marginBottom: "0.5rem", fontSize: "1.4rem" }}
              >
                {proficiency}
              </li>
            ))}
          </ul>

          {/* Rest of your code */}
        </div>
      </ScrollTrigger>
    );
  }

  function miscText() {
    return (
      <>
        <p className={Style.fadeIn}>
          <span style={{ color: info.baseColor }}>Pricing:</span>{" "}
        </p>
        <p className={Style.fadeIn}>
          <span style={{ color: info.baseColor, }}>
            Prior to development, a quote will be provided based on the scope of
            the work and labor hours required.{" "}
            <span className={Style.green}></span>
          </span>{" "}
        </p>
        <p className={Style.fadeIn}>
          <span style={{ color: info.baseColor }}>Factors Include:</span>{" "}
        </p>
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
            textAlign: "left",
            display: "block",
          }}
        >
          {info.hobbies.map((hobby, index) => (
            <li
              key={index}
              style={{ marginBottom: "0.5rem", fontSize: "1.4rem" }}
            >
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
