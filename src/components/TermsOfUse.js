import { textAlign } from "@mui/system";
import React from "react";

const TermsOfUse = ({ darkMode }) => {
console.log("Current Dark Mode:", darkMode);
  const textColor = darkMode ? "#f9f9f9" : "#333"; // Choose text color based on mode
  const containerStyle = {
    margin: "auto", // Center the container
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: darkMode ? "#232323" : "#f8f8f8", // Background changes based on mode
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "70%",
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
      <h1 style={h1Style}>Terms of Use for Moon Rooster LLC</h1>
      <p style={pStyle}>
        <strong>Last Updated: October 19th, 2023</strong>
      </p>
  
      <h2 style={h2Style}>Introduction</h2>
      <p style={pStyle}>
        Welcome to Moon Rooster LLC. These Terms of Use ("Terms") govern your
        use of moonrooster.com ("our Service") provided by Moon Rooster LLC ("we", "us", "our").
      </p>
      <p style={pStyle}>
        By using our Service, you agree to comply with these Terms. If you don’t
        agree with these Terms, please do not use our Service.
      </p>
  
      <h2 style={h2Style}>Changes to Terms</h2>
      <p style={pStyle}>
        We reserve the right to modify these Terms at any time. We will do our
        best to provide at least 30 days' notice prior to any new terms taking
        effect.
      </p>
  
      <h2 style={h2Style}>Use of Service</h2>
      <p style={pStyle}>
        You agree not to use our Service for any illegal activities or in
        violation of these Terms.
      </p>
  
      <h2 style={h2Style}>Intellectual Property</h2>
      <p style={pStyle}>
        All intellectual property rights in our Service, including but not
        limited to text, graphics, logos, and software, belong to Moon Rooster LLC.
      </p>
  
      <h2 style={h2Style}>Limitation of Liability</h2>
      <p style={pStyle}>
        To the maximum extent permitted by applicable law, [Your Company Name]
        shall not be liable for any direct, indirect, punitive, incidental, or
        other consequential damages arising out of or in connection with the use
        of our Service.
      </p>
  
      <h2 style={h2Style}>Governing Law</h2>
      <p style={pStyle}>
        These Terms are governed by the laws of the State of Texas.
      </p>
  
      <h2 style={h2Style}>Termination</h2>
      <p style={pStyle}>
        We reserve the right to terminate or suspend access to our Service
        without prior notice, for conduct that we believe violates these Terms
        or is harmful to other users of our Service, us, or third parties, or
        for any other reason.
      </p>
  
      <h2 style={h2Style}>Contact Information</h2>
      <p style={pStyle}>
        For any questions about these Terms, please contact us at moonroosterdesigns@gmail.com.
      </p>
    </div>
  );
};

export default TermsOfUse;
