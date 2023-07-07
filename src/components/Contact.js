import React from "react";
import Typed from "react-typed";
import {
  Typography,
  useMediaQuery,
  Grid,
  Avatar,
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
  color: "tomato"
}));

const TypographySubTitleComponent = styled(Typography) (() => ({
  color: "tan",
  textTransform: "uppercase"
}));

const Contact = () => {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <BoxComponent>

        <TypographySubTitleComponent variant="h5">
          <Typed
          strings={[
          "Comming Soon"
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          />
        </TypographySubTitleComponent>
      </BoxComponent>
    </React.Fragment>
  );
};

export default Contact;