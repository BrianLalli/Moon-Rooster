import React, { useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "./Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer"; // Import Drawer

const links = [
  {
    name: "mr",
    type: "initials",
    to: "/",
    active: "home",
  },
  {
    name: "About",
    to: "/about",
    active: "about",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
    active: "portfolio",
  },
  {
    name: "Resume",
    to: "/resume",
    active: "resume",
  },
  {
    name: "Contact",
    to: "/contact",
    active: "contact",
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box component={"nav"} width={"100%"}>
      <Box
        component={"ul"}
        display={"flex"}
        flexDirection={matches ? "row" : "column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "1rem", md: "8rem" }}
        textTransform={"lowercase"}
        fontSize={{ xs: "0.8rem", md: "1rem" }}
      >
        {matches ? (
          links.map((link, index) => (
            <Box
              key={index}
              component={"li"}
              className={link.active === active && !link.type && Style.active}
            >
              <Link
                to={link.to}
                onClick={() => {
                  setActive(link.active);
                }}
              >
                {!link.type && (
                  <p style={{ paddingBottom: "0.5rem" }}>{link.name}</p>
                )}
                {link.type && <h1>{link.name}</h1>}
              </Link>
            </Box>
          ))
        ) : (
          <MenuIcon className={Style["menu-icon"]} onClick={toggleDrawer} />
        )}
        <li style={{ position: "relative" }}>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>

      {/* Drawer component */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <div style={{ width: 250 }}>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </Box>
  );
}
