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
    maxWidth: "9.375rem",
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
            Currently delivering, analyzing, and resolving technical issues, and actively participating in the continuous enhancement of established development processes.
            Designing scripts to send periodic email notifications of portal data to clients based on their configurations.
            Proactively and strategically working on the customer-facing insurance application to build UI components in HTML and CSS based on the clients' requirements.
            Developing Rest APIs for new requirements using Java Spring Boot.
          </Typography>
        </Box>
        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          July 2023
        </Typography>
        <Box component="div" className={`${classes.timeLineItem} ${classes.timeLineWLO}`}> </Box>
        <Box component="div" className={`${classes.timeLineItem} ${classes.timeLineWLO}`}> </Box>
        <Typography
          variant="h5"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          May 2023
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
            Collaborated with the client, using Agile methodology, to obtain, analyze and develop requirements of the web application.
            Designed REST APIs using Django Python and worked on Django ORM API to perform CRUD operations on PostgreSQL databases.
            Created Python scripts to perform data sync operation for 20+ tables between the client database and our database.
            Developed python scripts to create test data for the QA testing.
            Performed code review of my peers before deploying code.
            Deployed application on test and production environment.
            Participated with the team of 10 to discuss new requirements, current progress and next plan of action.
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
            Designed high level test case scenarios and low level test case design for API services.
            Successfully developed and executed manual test cases and reported bugs to the developer and then retested them once fixed.
            Developed API Automation Test scripts using Java and test data for each service to test the functional and performance requirements.
            Updated the regression test suite with the test scripts and test data.
            Created SQL queries to verify data from MySQL Database.
            Developed Java scripts to create test data and insert in the database for manual testing.
            Investigated and analyzed new requirements and application documentation provided by the client.
            Updated and maintained the automation scripts as per requirement changes.
            Optimized testing framework and removed around 200 lines of redundant code.
            Collaborated with a team of 22 and successfully deployed all the sprints in time.
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
      </Box>
    </Box>
  );
};

export default WorkExperience;