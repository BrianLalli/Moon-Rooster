import React, { useEffect } from 'react';
import './App.module.scss';
import MainLayout from "./components/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { initGA } from './analytics'; // Import the initGA function

function App() {
  useEffect(() => {
    document.title = "Moon Rooster";

    // Initialize Google Analytics
    initGA();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
