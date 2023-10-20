import React from "react";
import Style from "./Home.module.scss";
import { Box } from "@mui/material";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Container } from "react-bootstrap";
import me from "../img/moonrooster.png";
import { useLocation } from "react-router-dom"; // Import useLocation
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

let colors = ["#F2F2F2", "#1c75bc"];

const info = {
  firstName: " Moon Rooster",
  lastName: "Lalli",
  initials: "mr",
  position: "Your One-Stop Software Development Partner",
  selfPortrait: "moonrooster",
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🌙🐓",
      text: (
        <span>
          <h4>Austin, TX-based Software Development Company:</h4> Specializing
          in delivering end-to-end solutions for your digital needs.
        </span>
      ),
    },
    {
      emoji: "🧑‍💻",
      text: (
        <span>
          <h4>Custom Software Development:</h4> Tailored solutions that solve
          your unique challenges.
        </span>
      ),
    },
    {
      emoji: "⏩",
      text: (
        <span>
          <h4>No-Code & Low-Code Solutions:</h4> Speeding up the development
          process without compromising on quality.
        </span>
      ),
    },
    {
      emoji: "🎨",
      text: (
        <span>
          <h4>Web Design & Development:</h4> Clean, modern designs that are both
          intuitive and conversion-optimized.
        </span>
      ),
    },
    {
      emoji: "⏳",
      text: (
        <span>
          <h4>AI-Powered Automation:</h4> Leverage machine learning algorithms
          to significantly reduce time spent on repetitive tasks and optimize
          operational processes.
        </span>
      ),
    },
    {
      emoji: "📈",
      text: (
        <span>
          <h4>Data Analysis & Visualization:</h4> Unleash the power of big data
          to uncover actionable insights in easy to understand charts.
        </span>
      ),
    },
  ],

  socials: [
    {
      link: "https://www.facebook.com/MoonRoosterLLC",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/moonrooster.llc/",
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
      link: "https://twitter.com/moonroosterllc",
      icon: "fa fa-twitter",
      label: "twitter",
    },
  ],
};

const HomeContent = ({ darkMode = true }) => {
  const location = useLocation(); // Use useLocation to access location state

  return (
    <div>
      {/* Content without animation */}
      <Box
        component={"main"}
        className={` "homepage-content"}`}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        minHeight={"calc(100vh - 175px)"}
        style={{ margin: "0 auto" }}
      >
        <Box
          className={classNames(
            Style.avatar,
            Style.shadowed,
            Style["moon-glow"]
          )}
          alt={"image of Moon Rooster"}
          style={{ background: info.gradient, margin: "0 auto" }}
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
          <Container
            fluid
            className={`zoom-in-fade-in d-flex align-items-center justify-content-center p-3 mt-2 rounded ${
              darkMode ? "dark-bg" : "bg-light"
            }`}
          >
            <div className="text-center">
              {/* Use this div to group the centered content */}
              <h1
                className="welcome-header"
                style={{ textAlign: "center", fontSize: "2rem" }}
              >
                {" "}
                Welcome to
                <span
                  style={{
                    background: info.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: darkMode ? "transparent" : "",
                    fontSize: "2rem",
                  }}
                >
                  {info.firstName}
                </span>
                {/* <span className={Style.hand}>🐓</span> */}
              </h1>
              <h2 style={{ fontSize: "1.7rem" }}>{info.position}</h2>
            </div>
          </Container>
          <br />
          <br />
          <h2 className={Style["larger-header"]} style={{ marginTop: "20px" }}>
            Who We Are
          </h2>
          <div className="who-we-are-section">
            <Box component={"ul"} p={"0.8rem"}>
              <div className={Style["who-we-are-card"]}>
                <EmojiBullet
                  key={0}
                  emoji={info.miniBio[0].emoji}
                  text={info.miniBio[0].text}
                />
              </div>
            </Box>
          </div>
          <br />

          <div className={Style["what-we-do-section"]}>
            <h2 className={Style["larger-header"]}>What We Do</h2>
            <Box component={"ul"} p={"0.8rem"}>
              {info.miniBio.map(
                (bio, index) =>
                  index !== 0 && (
                    <div className={Style["what-we-do-card"]}>
                      <EmojiBullet
                        key={index}
                        emoji={bio.emoji}
                        text={bio.text}
                      />
                    </div>
                  )
              )}
            </Box>
          </div>

          <br />

          <h2 className={Style["larger-header"]}>Why Choose Us</h2>
          <Box component={"ul"} p={"0.8rem"}>
            <div className={Style["why-choose-us-card"]}>
              <EmojiBullet
                key={1}
                emoji="🌎"
                text={
                  <span>
                    <h4>Local Presence, Global Reach:</h4> Based in Austin, but
                    serving clients worldwide.
                  </span>
                }
              />
            </div>
            <div className={Style["why-choose-us-card"]}>
              <EmojiBullet
                key={2}
                emoji="🌐"
                text={
                  <span>
                    <h4>Tech-Savvy Team:</h4> Leveraging a mixture of coding
                    languages and platforms including: HTML, CSS, JS, Python,
                    SQL, React, WordPress, Squarespace, Shopify, Wix, and
                    ChatGPT.
                  </span>
                }
              />
            </div>
            <div className={Style["why-choose-us-card"]}>
              <EmojiBullet
                key={3}
                emoji="💰"
                text={
                  <span>
                    <h4>Transparent Pricing:</h4> Know what you're paying for
                    with our straightforward pricing models.
                  </span>
                }
              />
            </div>
          </Box>

          <br />

          <footer className={Style["contact-footer"]}>
            <div className={Style["contact-info"]}>
              <div className={Style["contact-item"]}>
                <EmojiBullet text="brian@moonrooster.com" />
              </div>
              <div className={Style["contact-item"]}>
                <EmojiBullet text="737-346-7797" />
              </div>
              <Box
                display={"flex"}
                gap={"1.5rem"}
                justifyContent={"center"}
                fontSize={{ xs: "2rem", md: "2.5rem" }}
                margin={"10px"} // Added this line
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
            </div>
            <div className={Style["copyright-section"]}>
              <a href="/terms-of-use">Terms of Use</a>
              <a href="/privacy-policy">Privacy Policy</a>© 2023 Moon Rooster
              LLC. All Rights Reserved.
            </div>
          </footer>
        </Box>
      </Box>
    </div>
  );
};

export default HomeContent;
