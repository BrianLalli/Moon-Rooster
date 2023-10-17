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
      emoji: "🧑‍💻",
      text: "Custom Software Development: Tailored solutions that solve your unique challenges.",
    },
    {
      emoji: "🤖",
      text: "No-Code & Low-Code Solutions: Speeding up the development process without compromising on quality.",
    },
    {
      emoji: "🌎",
      text: "Web Design & Development: Clean, modern designs that are both intuitive and conversion-optimized.",
    },
    {
      emoji: "🌎",
      text: "AI-Powered Automation: Leverage machine learning algorithms to significantly reduce time spent on repetitive tasks and optimize operational processes.",
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

const HomeContent = ({ darkMode = true }) => {
  const location = useLocation(); // Use useLocation to access location state

  return (
    <div>
      {/* Content without animation */}
      <Box
        component={"main"}
        className="visible homepage-content" // Add the appropriate classes
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
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
            className={`zoom-in-fade-in d-flex align-items-center justify-content-center p-5 rounded ${
              darkMode ? "dark-bg" : "bg-light"
            }`}
          >
            <div className="text-center">
              {/* Use this div to group the centered content */}
              <h1 style={{ textAlign: "center" }}>
                Welcome to
                <span
                  style={{
                    background: info.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: darkMode ? "transparent" : "",
                  }}
                >
                  {info.firstName}
                </span>
                <span className={Style.hand}>🐓</span>
              </h1>
              <h2> {info.position}.</h2>
            </div>
          </Container>
          <br />
          <h2 className={Style["larger-header"]} style={{ marginTop: "20px" }}>
            Who We Are
          </h2>
          <div className="cards-container">
            <div className={Style["who-we-are-card"]}>
              <Box component={"ul"} p={"0.8rem"}>
                <EmojiBullet
                  key={0}
                  emoji="🌎"
                  text="Moon Rooster is an Austin, TX-based software development company specializing in delivering end-to-end solutions for your digital needs."
                />
              </Box>
            </div>
          </div>
          <br />

          <div className={Style["what-we-do-section"]}>
            <h2 className={Style["larger-header"]}>What We Do</h2>
            <Box component={"ul"} p={"0.8rem"}>
              {info.miniBio.map((bio, index) => (
                <div className={Style["what-we-do-card"]}>
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
                </div>
              ))}
            </Box>
          </div>

          <br />

          <h2 className={Style["larger-header"]}>Why Choose Us?</h2>
          <Box component={"ul"} p={"0.8rem"}>
            <div className={Style["why-choose-us-card"]}>
              <EmojiBullet
                key={1}
                emoji="👩‍💻"
                text="Local Presence, Global Reach: Based in Austin, but serving clients worldwide."
              />
            </div>
            <div className={Style["why-choose-us-card"]}>
              <EmojiBullet
                key={2}
                emoji="🌐"
                text="Tech-Savvy Team: Leveraging a mixture of coding languages and platforms including HTML, CSS, JS, Python, SQL, and React."
              />
            </div>
            <div className={Style["why-choose-us-card"]}>
              <EmojiBullet
                key={3}
                emoji="🤖"
                text="Transparent Pricing: Know what you're paying for with our straightforward pricing models."
              />
            </div>
          </Box>

          <br />

          <footer className={Style["home-content-contact-footer"]}>
            <div className={Style["contact-info"]} style={{ textAlign: "center" }}>
              <div className={Style["contact-item"]}>
                <EmojiBullet emoji="📧" text="moonroosterdesigns@gmail.com" />
              </div>
              <div className={Style["contact-item"]}>
                <EmojiBullet emoji="📱" text="737-346-7797" />
              </div>

              {/* Apply the style directly to the wrapping <Box> */}
              <Box
                display={"flex"}
                gap={"1.5rem"}
                justifyContent={"center"}
                fontSize={{ xs: "2rem", md: "2.5rem" }}
                style={{ textAlign: "center" }}
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
          </footer>
        </Box>
      </Box>
    </div>
  );
};

export default HomeContent;
