import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
// import {info} from "../../info/Info";
import Project1 from "../img/Project1.png";
import Project2 from "../img/Project2.png";
import Project3 from "../img/Project3.png";
import Project4 from "../img/Project4.png";
import Project5 from "../img/Project 5.png";
import Project6 from "../img/Project6.png";
import Project7 from "../img/Project7.png";
import Project8 from "../img/Project8.png";

let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

const info = {
  firstName: "Brian",
  lastName: "Lalli",
  initials: "bl", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Program Manager",
  selfPortrait: "self", // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "oogl",
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
      description: "Users can add bucket list items and set priority",
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
    {
      title: "Brian Lalli Portfolio",
      description: "Original Portfolio from 6/22 using HTML & CSS",
      live: "https://brianlalli.github.io/Portfolio/",
      source: "https://github.com/BrianLalli/Portfolio",
      image: Project6,
    },
  ],
}

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} description={project.description} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};

