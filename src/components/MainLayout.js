import React, { useState } from "react";
import Style from "./MainLayout.module.scss";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import Resume from "./Resume";
import Contact from "./Contact";

export default function MainLayout() {
  let [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleClick} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
          <Route exact path={"/brian-lalli-portfolio/"} element={<Home darkMode={darkMode} handleDarkModeToggle={handleClick} />} />

            <Route
              exact
              path={"/brian-lalli-portfolio/about"}
              element={<About />}
            />
            <Route
              exact
              path={"/brian-lalli-portfolio/portfolio"}
              element={<Portfolio />}
            />
            <Route
              exact
              path={"/brian-lalli-portfolio/resume"}
              element={<Resume />}
            />
             <Route
              exact
              path={"/brian-lalli-portfolio/contact"}
              element={<Contact />}
            />
          </Routes>
        </Grid>

        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
