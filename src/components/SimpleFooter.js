import React from "react";
import Style from "./Home.module.scss";

export default function SimpleFooter() {
  return (
    <footer
      className={Style["simple-footer"]}
      style={{
        position: "relative",
        bottom: "0",
        width: "100%",
        marginTop: "30px",
      }}
    >
      <div className={Style["copyright-section"]}>
        © 2023 Moon Rooster LLC. All Rights Reserved.
      </div>
    </footer>
  );
}
