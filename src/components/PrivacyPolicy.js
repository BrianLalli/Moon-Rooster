import { textAlign } from '@mui/system';
import React from 'react';

const PrivacyPolicy = ({ darkMode }) => {
    const textColor = darkMode ? '#f9f9f9' : '#333'; // Choose text color based on mode
    const containerStyle = {
      margin: 'auto', // Center the container
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: darkMode ? '#232323' : '#f8f8f8', // Background changes based on mode
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '70%', 
      height: '100%', // Set height to 100%
      textAlign: 'center' // Center the text
    };

    const h1Style = {
        fontSize: '2rem',
        marginBottom: '1rem',
        color: textColor, // Applied here
        textAlign: 'center'
      };
    
      const h2Style = {
        fontSize: '1.5rem',
        margin: '1rem 0',
        color: textColor, // Applied here
        textAlign: 'center'
      };
    
      const pStyle = {
        fontSize: '1rem',
        lineHeight: '1.5',
        color: textColor, // Applied here
        textAlign: 'center'
      };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Privacy Policy</h1>
      <p style={pStyle}>
        <strong>Last Updated: October 19th, 2023</strong>
      </p>

      <h2 style={h2Style}>Introduction</h2>
      <p style={pStyle}>Welcome to Moon Rooster LLC. This Privacy Policy governs your use of our services.</p>
      
      <h2 style={h2Style}>Information We Collect</h2>
      <p style={pStyle}>We collect various types of information to provide and improve our services to you.</p>

      <h2 style={h2Style}>Use of Information</h2>
      <p style={pStyle}>We use the collected data for various purposes.</p>

      <h2 style={h2Style}>Security</h2>
      <p style={pStyle}>The security of your data is important to us.</p>

      <h2 style={h2Style}>Contact Us</h2>
      <p style={pStyle}>If you have any questions, please contact us.</p>
    </div>
  );
};

export default PrivacyPolicy;
