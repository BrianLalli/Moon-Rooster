import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import styles from "../App.module.scss";

function PortfolioBlock(props) {
  const { image, live, source, title, description } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      style={{ height: "400px", marginTop: "140px" }} // Adjusted marginTop
    >
      <Box
        component={"img"}
        src={image}
        alt={"mockup"}
        style={{ height: "300px", width: "400px", objectFit: "cover" }} // Fixed height and width for the image
      />
<h1 style={{ fontSize: "2rem", textAlign: "center", margin: 0 }}>{title}</h1>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
<p style={{ fontSize: "1.5rem", textAlign: "center", margin: 0 }}>{description}</p>
        <Box
          className={"portfolio"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"} // Center vertically
          alignItems={"center"} // Center horizontally
          gap={"0.5rem"}
          fontSize={"1.5rem"}
          py={"2rem"}
        >
          <Box className={styles["icon-link-box"]}>
            <IconLink
              link={live}
              title={"Live Demo"}
              icon={"fa fa-safari"}
              style={{ padding: 0 }} // Add inline style to remove padding
            />
          </Box>
          <Box className={styles["icon-link-box"]}>
            <IconLink
              link={source}
              title={"Source Code"}
              icon={"fa fa-code"}
              style={{ padding: 0 }} // Add inline style to remove padding
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
