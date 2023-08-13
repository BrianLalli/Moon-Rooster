import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
// import {info} from "../../info/Info";

let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

const info = {
    firstName: "Moon",
    lastName: "Rooster",
    initials: "mr",
    position: "a Website Developer & Designer",
    selfPortrait: "moonrooster",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    bio: "Hello! I'm Brian Lalli. I'm the Founder and Lead Developer for Moon Rooster. I studied Economics at Colgate, and Software Development at University of Texas at Austin. I am passionate about building websites with sleek designs and applications that make my life simpler!",
    skills: {
    proficientWith: [
      "Shopify",
      "Wordpress",
      "Squarespace",
      "Wix",
      "ChatGPT",  
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
      "mongoDb",
      "mySQL",
      "graphQL",
      "nodejs",
      "AWS",
      "python",
      "adobe illustrator",
      "Tableau"
    ],
  },
  hobbies: [
    {
      label: "# of pages",
      emoji: "📖",
    },
    {
      label: "intricacy of design",
      emoji: "🎨",
    },
    {
      label: "custom code requirements",
      emoji: "✍️",
    },
    {
        label: "E-Commerce functionality requirement",
        emoji: "🛒",
    },
    {
      label: "# of revisions",
      emoji: "✖️",
    },
  ],
}

export default function About() {
    const firstName = info.firstName.toLowerCase()
    const lastName = info.lastName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd It's a great day/night to be alive! </p>
            <p><span style={{color: info.baseColor}}>about me <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Expertise in</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            {/* <p style={{color: info.baseColor}}> Comfortable With</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul> */}
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span>
               cd Pricing</p>
            <p><span style={{color: info.baseColor}}>Pricing is determined by the scope of the work <span
                className={Style.green}>(main)</span> $</span> ls factors include:</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}


