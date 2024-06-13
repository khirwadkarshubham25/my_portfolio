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
    minHeight: theme.breakpoints.down("sm") ? '90vh' : '84vh',
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

const TypographyDescriptonComponent = styled(Typography) (() => ({
  color: "#FF7F50",
  alignItems: 'center',
  justifyContent: 'center',
  width: "50%",
  textAlign: "center",
  zIndex: 1
}));

const Home = () => {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <BoxComponent>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Avatar src="/images/my_picture.jpg" alt="Shubham Khirwadkar" sx= {{width: 120, height: 120, margin: 1}}/>
        </Grid>
        <TypographyTitleComponent variant="h4">
          <Typed strings={["Shubham Khirwadkar"]} typeSpeed={30} />
        </TypographyTitleComponent>

        <TypographySubTitleComponent variant="h5">
          <Typed
          strings={[
          "Frontend Developer",
          "Backend Developer",
          "Automation Test Developer"
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

export default Home;