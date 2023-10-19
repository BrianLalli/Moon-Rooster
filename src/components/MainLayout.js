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
import { Analytics } from "@vercel/analytics/react";
import HomeContent from "./HomeContent";
import TermsOfUse from "./TermsOfUse"; // Adjust the path to where your TermsOfUse.js file is located
import PrivacyPolicy from './PrivacyPolicy';  // Adjust the path as needed


export default function MainLayout() {
  let [darkMode, setDarkMode] = useState(true);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={Style["main-layout-container"]}>
      {" "}
      {/* New wrapper div */}
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
              <Route
                exact
                path={"/"}
                element={
                  <Home
                    darkMode={darkMode}
                    handleDarkModeToggle={handleClick}
                  />
                }
              />
              <Route
                exact
                path={"/home"}
                element={
                  <HomeContent
                    darkMode={darkMode}
                    handleDarkModeToggle={handleClick}
                    noAnimation={true} // This is where you pass the noAnimation prop
                  />
                }
              />

              <Route exact path={"/about"} element={<About />} />
              <Route exact path={"/portfolio"} element={<Portfolio />} />
              <Route exact path={"/resume"} element={<Resume />} />
              <Route exact path={"/contact"} element={<Contact />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
            >
            </Box>
          </Grid>
        </Grid>
        <Analytics />
      </Box>
    </div>
  );
}
