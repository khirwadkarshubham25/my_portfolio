import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {createTheme, ThemeProvider, styled} from "@mui/material/styles";
import { Facebook, Twitter, Instagram, GitHub} from "@mui/icons-material";

const BottomNavigationComponent = styled(BottomNavigation) (() => ({
    backgroundColor: "#222",
    // position: 'static'
}));

const BottomNavigationActionComponent = styled(BottomNavigationAction) (() => ({
    "& .MuiSvgIcon-root": {
        fill: "tan",
        "&:hover": {
            fill: "tomato",
            fontSize: "1.8rem",
        }
    }
}));

const Footer = () => {
    return (
      <BottomNavigationComponent>
        <BottomNavigationActionComponent icon={<GitHub />} onClick={() => {window.location.href="https://github.com/khirwadkarshubham25"}}/>
        <BottomNavigationActionComponent icon={<Twitter />} />
        <BottomNavigationActionComponent icon={<Instagram />} onClick={() => {window.location.href="https://www.instagram.com/shubham0925/"}}/>
      </BottomNavigationComponent>
    );
  };
  
  export default Footer;