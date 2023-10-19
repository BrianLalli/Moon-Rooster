import React from 'react';
import Style from "./Home.module.scss";

export default function SimpleFooter() {
  return (
    <footer className={Style["simple-footer"]}>
      <div className={Style["copyright-section"]}>
        <a href="/terms-of-use">Terms of Use</a>
        <a href="/privacy-policy">Privacy Policy</a>
        © 2023 Moon Rooster LLC. All Rights Reserved.
      </div>
    </footer>
  );
}
