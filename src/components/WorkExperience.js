import React from "react";
import {Typography, Box, createTheme} from "@mui/material";
import { NavLink } from "react-router-dom";
import {makeStyles} from "@mui/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  }
});

const useStyles = makeStyles(() => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineWLO:{
    borderBottom: "none",
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "transparent transparent transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    "&:nth-of-type(2n):before": {
      right: "auto",
      left: "-0.625rem",
      borderColor: "transparent transparent transparent transparent",
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.5rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.6rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
  hoverClass: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
    textDecoration: "none",
    '&:hover': {
      color: "tomato"
    }
  }
}));

const WorkExperience = () => {
  
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Work Experience
      </Typography>

      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Present
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Java Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Benefit Harbor LP.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Developing scalable backend systems with Java Spring Boot, resulting in a substantial 6% improvement in application performance.
            Strategically enhancing the customer-facing insurance application by crafting tailored UI components in React.js, aligning precisely with clients specifications and requirements.
            Managing databases in PostgreSQL to optimize queries, reducing response time by 7% for critical operations.
          </Typography>
        </Box>
        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          July 2023
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
          variant="h5"
          align="center"
          className={classes.subHeading}
          >
            Software Engineer Intern
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            CharacterFaceGen Software
          </Typography>
          <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle1}
          >  
          </Typography>
        </Box>
        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            July 2023
        </Typography>
        {/* <Box component="div" className={`${classes.timeLineItem} ${classes.timeLineWLO}`}> </Box>
        <Box component="div" className={`${classes.timeLineItem} ${classes.timeLineWLO}`}> </Box>
        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          May 2023
        </Typography> */}
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            <NavLink className={classes.hoverClass} to={`/education`}>
                Education
              </NavLink>
          </Typography>
        </Box>

        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          July 2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Coreview Systems Private Limited
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Designed and implemented RESTful APIs using Python Django that dynamically handled user inputs, serving data to the JavaScript front-end while managing a load of over 200,000 concurrent users.
            Created Python scripts for seamless data synchronization across 20+ tables, enhancing data consistency between client and company databases.
            Created the continuous integration and deployment (CI/CD) pipelines, reducing build time by 17%.
            Optimized QA testing efficiency and saved 4 hours of manual effort by automating data generation using Python scripts.
            Participated in cross-functional code review processes, proactively providing and incorporating feedback from fellow engineers, and advancing skills in developing customized, scalable code.
            Provided technical mentorship and guidance to 2 junior developers to facilitate their growth in software engineering practices.
          </Typography>
        </Box>
        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Nov 2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
          variant="h5"
          align="center"
          className={classes.subHeading}
          >
            Test Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Cognizant Technology Solutions
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Designed a comprehensive testing strategy, proficiently executed story test preparations, and efficiently conducted bug reporting utilizing Agile methodology while collaborating seamlessly with a team of 20+ developers.
            Identified and addressed defects by coordinating closely with the development team, leading to the resolution of 83% of non-conforming product issues.
            Created automation test scripts utilizing Selenium and Java to enhance testing efficiency by 76%.
            Streamlined framework by refactoring 1164 lines of redundant code, resulting in a 3% code reduction.
            Stepped into leadership positions, orchestrating and leading technical skill advancement activities for a team with over 80 members.
          </Typography>
        </Box>
        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            July 2018
        </Typography>
        <Box component="div" className={`${classes.timeLineItem} ${classes.timeLineWLO}`}> </Box>
        <Box component="div" className={`${classes.timeLineItem} ${classes.timeLineWLO}`}> </Box>
        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            May 2018
        </Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
          variant="h5"
          align="center"
          className={classes.subHeading}
          >
            Software Engineer Intern
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Tech Mahindra
          </Typography>
          <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle1}
          >  
            Designed a voice based assistant which will give financial details of a company.
            Developed a simple OTP service to verify client identity to increase security of application.
            Created a basic HTML/CSS page which will display the financial details of a company in graphical format.
          </Typography>
        </Box>
        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Feb 2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            <NavLink className={classes.hoverClass} to={`/education`}>
                Education
              </NavLink>
          </Typography>
        </Box>
        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            June 2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
          variant="h5"
          align="center"
          className={classes.subHeading}
          >
            Software Test Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Trust Systems & Software
          </Typography>
          <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle1}
          > 
            Developed and executed comprehensive test plans for multiple software applications, ensuring thorough testing coverage.
            Identified critical defects and worked closely with development teams to resolve them, improving product quality and customer satisfaction.
          </Typography>
        </Box>
        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            May 2016
        </Typography>
      </Box>
    </Box>
  );
};

export default WorkExperience;