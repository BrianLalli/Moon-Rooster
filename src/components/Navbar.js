import React, { useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "./Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import { Link as RouterLink } from "react-router-dom";

const links = [
  {
    name: "MR",
    type: "initials",
    to: "/",
    active: "home",
  },
  {
    name: "Home",
    to: "/home",
    active: "home",
    linkComponent: RouterLink,
    state: { noAnimation: true },
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
          <>
            {links.map((link, index) => (
              <Box
                key={index}
                component={"li"}
                className={link.active === active && !link.type && Style.active}
              >
                {link.linkComponent ? (
                  <link.linkComponent
                    to={link.to}
                    onClick={() => {
                      setActive(link.active);
                    }}
                    state={link.state}
                  >
                    {!link.type && (
                      <p style={{ paddingBottom: "0.5rem" }}>{link.name}</p>
                    )}
                    {link.type && <h1>{link.name}</h1>}
                  </link.linkComponent>
                ) : (
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
                )}
              </Box>
            ))}
            <li style={{ position: "relative" }}>
              <Toggler darkMode={darkMode} handleClick={handleClick} />
            </li>
          </>
        ) : (
          <div className={Style["header-container-mobile"]}>
            <MenuIcon className={Style["menu-icon"]} onClick={toggleDrawer} />
            <Toggler darkMode={darkMode} handleClick={handleClick} />
          </div>
        )}
      </Box>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <div style={{ width: 250 }}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.to} onClick={() => toggleDrawer()}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </Box>
  );
}
