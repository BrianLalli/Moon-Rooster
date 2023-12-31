import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import ScrollTrigger from "react-scroll-trigger";
import me from "../img/self.png";
import SimpleFooter from "./SimpleFooter";
// import {info} from "../../info/Info";
import nameVideo from "../img/nameVideo.mp4";
import { Helmet } from 'react-helmet';

let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

const info = {
  firstName: "Moon",
  lastName: "Rooster",
  initials: "mr",
  position: "a Website Developer & Designer",
  selfPortrait: "moonrooster",
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: "#61DBFB",
  bio: "Hello, World! I'm Brian Lalli & I'm the Founder/Lead Developer at Moon Rooster. I have 8 years of combined experience in E-Commerce, Data Analytics, and Software Development at companies like Amazon, Whole Foods Market, & Anheuser-Busch InBev.",
  skills: {
    proficientWith: [
      "👨🏼‍💻 Custom Software Solutions",
      "🔎 SEO Optimized Website Development",
      "🤳 Responsive Website Design",
      "📱 iOS/Android Mobile App Development",
      "💸 E-Commerce Consulting",
      "📊 Data Analysis & Visualization",
      "🤖 Automation & Machine Learning",
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
          <Helmet>
            <title>
              About Moon Rooster LLC | Expert Web & Software Developers in
              Scranton
            </title>
            <meta
              name="description"
              content="Learn more about Moon Rooster LLC, a premier provider of web design and software development in Scranton, PA, dedicated to delivering exceptional digital solutions."
            />
          </Helmet>
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
            Discover the origin of our name, Moon Rooster, by watching this
            video.
          </span>
        </p>
        <video controls style={{ width: "100%" }}>
          <source src={nameVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
            className={`${Style.skillsList} ${Style.aboutList}`} // Add the "aboutList" class here
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
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "1.4rem",
                  transition: "background-color 0.3s ease",
                }}
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
      <ScrollTrigger
        onEnter={() => {
          console.log("Entered viewport!");
          setFadeIn(true);
        }}
      >
        <div className={fadeIn ? Style.fadeIn : Style.hidden}>
          <p>
            <span style={{ color: info.baseColor }}>Pricing:</span>{" "}
          </p>
          <p>
            <span style={{ color: info.baseColor }}>
              We'll provide a quote based on the scope of work and labor hours
              required before starting development.
            </span>
          </p>
          <p>
            <span style={{ color: info.baseColor }}>Factors Include:</span>{" "}
          </p>
          <ul
            className={Style.aboutList}
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
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "1.4rem",
                  transition: "background-color 0.3s ease",
                }}
              >
                <Box component={"span"} mr={"1rem"}>
                  {hobby.emoji}
                </Box>
                {hobby.label}
              </li>
            ))}
          </ul>
        </div>
      </ScrollTrigger>
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
      <SimpleFooter />
    </Box>
  );
}
