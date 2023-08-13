import React, { useState } from "react";
import Style from "./About.module.scss";
import { Box } from "@mui/material";
// import {info} from "../../info/Info";
import { Document, Page } from "react-pdf-fix";
import MyResume from "../resume/resume.pdf";
export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <object data={MyResume} type="application/pdf" width="100%" height="1000px">
        <p>
          Alternative text - include a link{" "}
          <a href="linkTodownloadablePDF">to the PDF!</a>
        </p>
      </object>
    </Box>
  );
}
