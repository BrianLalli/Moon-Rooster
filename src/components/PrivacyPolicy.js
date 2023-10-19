import { textAlign } from "@mui/system";
import React from "react";

const PrivacyPolicy = ({ darkMode }) => {
  const textColor = darkMode ? "#f9f9f9" : "#333"; // Choose text color based on mode
  const containerStyle = {
    margin: "auto", // Center the container
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: darkMode ? "#232323" : "#f8f8f8", // Background changes based on mode
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "80%",
    height: "100%", // Set height to 100%
    textAlign: "center", // Center the text
  };

  const h1Style = {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: textColor, // Applied here
    textAlign: "center",
  };

  const h2Style = {
    fontSize: "1.5rem",
    margin: "1rem 0",
    color: textColor, // Applied here
    textAlign: "center",
  };

  const pStyle = {
    fontSize: "1rem",
    lineHeight: "1.5",
    color: textColor, // Applied here
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Privacy Policy</h1>
      <p style={pStyle}>
        <strong>Last Updated: October 19th, 2023</strong>
      </p>

      <h2 style={h2Style}>Introduction</h2>
      <p style={pStyle}>
        Welcome to Moon Rooster LLC ("we", "our", "us"). We respect your privacy
        and are committed to protecting your personal data. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information
        when you use our services.
      </p>

      <h2 style={h2Style}>Information We Collect</h2>
      <p style={pStyle}>
        We collect both personal and non-personal information to provide an
        enhanced user experience. Personal information may include your name,
        email address, and location, while non-personal information includes
        browser types, device types, and other anonymized data.
      </p>

      <h2 style={h2Style}>Use of Information</h2>
      <p style={pStyle}>
        The information we collect serves various purposes, such as:
        personalizing your experience, improving our services, communicating
        with you, compliance with legal obligations.
      </p>

      <h2 style={h2Style}>Security</h2>
      <p style={pStyle}>
        The security of your data is a top priority for us. We employ
        industry-standard encryption and security protocols to ensure your data
        is stored and transferred securely. However, no system can be completely
        secure, and we cannot guarantee the absolute security of your
        information.
      </p>

      <h2 style={h2Style}>Contact Us</h2>
      <p style={pStyle}>
        For any questions or concerns about this Privacy Policy, please contact
        us at:
        <a
          href="mailto:moonroosterdesigns@gmail.com"
          style={{ fontSize: "0.8rem" }}
        >
          moonroosterdesigns@gmail.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
