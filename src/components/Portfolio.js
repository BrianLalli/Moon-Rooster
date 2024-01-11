import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
// import {info} from "../../info/Info";
import Project1 from "../img/Project1.png";
import Project2 from "../img/Project2.png";
import Project3 from "../img/Project3.png";
import Project4 from "../img/Project4.png";
import Project5 from "../img/Project 5.png";
import Project6 from "../img/TheJewelLevineFoundation.png";
import Project7 from "../img/Project7.png";
import Project8 from "../img/Project8.png";
import Project9 from "../img/FFStartSit.png";
import Project10 from "../img/Natu.Health.png";
import Project11 from "../img/FAADE.png";
import Project12 from "../img/DTR.png";
import Project13 from "../img/GiveAaS.png"
import SimpleFooter from "../components/SimpleFooter";
import { Helmet } from "react-helmet";

let colors = ["#F2F2F2", "#1c75bc"];

const info = {
  firstName: "Brian",
  lastName: "Lalli",
  initials: "bl", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Software Engineer",
  selfPortrait: "self", // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Give Athletes a Smile",
      description: "Dental Program for Collegiate Student-Athletes",
      live: "https://briana9479df21c6.wpcomstaging.com/?share=237f636cb95415fdf2d3ad76d8e8ef41b20cdc2201802728eb85d8198729bc46",
      source: "https://briana9479df21c6.wpcomstaging.com/?share=237f636cb95415fdf2d3ad76d8e8ef41b20cdc2201802728eb85d8198729bc46",
      image: Project13,
    },
    {
      title: "FAADE",
      description: "Football Training in Scranton, PA",
      live: "https://faadesports.com/?share=6f8cbd5fff423f2013f6f59c480c24842c7afcf51c34c03ed5dd052d6f1336a7",
      source: "https://faadesports.com/?share=6f8cbd5fff423f2013f6f59c480c24842c7afcf51c34c03ed5dd052d6f1336a7",
      image: Project11,
    },
    {
      title: "Dreams to Reality",
      description: "Basketball Training in Miami, FL",
      live: "https://dtrhoops.com/?share=001fec7a64388a5e6bcb7327b747dfccc740d99103fd85827c6be4f00192c629",
      source: "https://dtrhoops.com/?share=001fec7a64388a5e6bcb7327b747dfccc740d99103fd85827c6be4f00192c629",
      image: Project12,
    },
    {
      title: "Natu.Health",
      description: "ZocDoc for Alternative Medicine Practitioners",
      live: "https://natu-health.vercel.app/",
      source: "https://github.com/BrianLalli/Natu.Health",
      image: Project10,
    },
    {
      title: "The Jewel Levine Foundation",
      description: "Charity Foundation Website",
      live: "https://www.jewellevinefoundation.org/",
      source: "https://www.jewellevinefoundation.org/",
      image: Project6,
    },
    {
      title: "Fantasy Football Start/Sit",
      description: "Fantasy Football Lineup Setter",
      live: "https://ff-start-em-sit-em.vercel.app/",
      source: "https://github.com/BrianLalli/ff-start-em-sit-em",
      image: Project9,
    },
    {
      title: "Oogl",
      description: "Logo Guessing Game",
      live: "https://ooglapp.godaddysites.com/",
      source: "https://github.com/BrianLalli/Logo-Guessing-Game",
      image: Project7,
    },
    {
      title: "Gator Glass",
      description: "E-Commerce Glass Art Website",
      live: "https://www.gator-glass.com/",
      source: "view-source:https://www.gator-glass.com/",
      image: Project8,
    },
    {
      title: "Baes",
      description: "Virtual Romantic Assistant",
      live: "https://loversnotfighters.herokuapp.com/",
      source: "https://github.com/BrianLalli/baes",
      image: Project5,
    },
    {
      title: "Quar+z",
      description: "Simplified Project Management Tool",
      live: "https://quartzg3.herokuapp.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/BrianLalli/Quartz", // this should be a link to the **repository** of the project, where the code is hosted.
      image: Project1,
    },
    {
      title: "$how Me The Money!",
      description: "Elected Government Representative Donation Tracker",
      live: "https://brianlalli.github.io/Show-Me-The-Money/",
      source: "https://github.com/BrianLalli/Show-Me-The-Money",
      image: Project2,
    },
    {
      title: "React Bucket List",
      description: "Bucket List Item Tracker",
      live: "https://brianlalli.github.io/bucket-list/",
      source: "https://github.com/BrianLalli/bucket-list",
      image: Project3,
    },
    {
      title: "Text Editor PWA",
      description: "Simple Text Editor PWA",
      live: "https://text-editor-pwa-bl.herokuapp.com/",
      source: "https://github.com/BrianLalli/text-editor",
      image: Project4,
    },
  ],
};

export default function Portfolio() {
  return (
    <Box>
      <Helmet>
        <title>
          Our Work | Web Design & Software Development Projects | Moon Rooster
          LLC
        </title>
        <meta
          name="description"
          content="View our portfolio showcasing successful web design and software development projects by Moon Rooster LLC for various clients in Scranton, PA."
        />
      </Helmet>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
              description={project.description}
            />
          </Grid>
        ))}
      </Grid>
      <SimpleFooter />
    </Box>
  );
}
