import React, {useState, useEffect} from "react";
import {
  Typography,
  Box,
} from '@mui/material';
import {createTheme, ThemeProvider, styled} from "@mui/material/styles";

const BoxComponent = styled(Box) (( { theme } ) => ({
    position: "relative",
    display: 'flex',
    flexDirection: 'column',
    minHeight: theme.breakpoints.down("sm") ? '86vh' : '84vh',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    textAlign: "center",
    zIndex: 1,
}));

const TypographyTitleComponent = styled(Typography) (() => ({
  color: "tan"
}));

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const getVariantSize = (width) => {
  if (width < breakpoints.sm) {
      return "h6"
  } else {
      return "h5"
  }
}

const Contact = () => {
    const [variantSize, setVariantSize] = useState(getVariantSize(window.innerWidth))
    const updateDimensions = () => {
      setVariantSize(getVariantSize(window.innerWidth))
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
  return (
    <React.Fragment>
      <BoxComponent>

        <TypographyTitleComponent variant={variantSize}>
          shubhamkhirwadkar@outlook.com
        </TypographyTitleComponent>
        <TypographyTitleComponent variant={variantSize}>
          +1-(972) 799-5914
        </TypographyTitleComponent>
      </BoxComponent>
    </React.Fragment>
  );
};

export default Contact;