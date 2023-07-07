import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {CssBaseline} from "@mui/material";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import "./App.css";



function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/education" Component={Education} />
          <Route exact path="/work_experience" Component={WorkExperience} />
          <Route exact path="/skills" Component={Skills} />
          <Route exact path="/projects" Component={Projects} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/reviews" Component={Reviews} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;