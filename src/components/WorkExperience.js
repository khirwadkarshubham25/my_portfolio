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
            Software Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Benefit Harbor LP.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Designing and implementing robust insurance enrollment features in Java using MVC, Spring Boot, and Hibernate, adhering strictly to coding standards, security best practices, and technical design specifications.
            Developing user interface for portals utilizing JQuery, HTML, and CSS, ensuring seamless and intuitive user experiences.
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
            Developed RESTful APIs in Python and Django, using Django ORM for seamless CRUD operations on PostgreSQL databases while managing a high-volume user load exceeding 200,000 concurrent users, ensuring efficient data delivery to the front-end.
            Spearheaded a Proof of Concept (PoC) initiative on Apache Airflow, seamlessly integrating database synchronization between client and project databases, significantly boosting data consistency and operational efficiency.
            Implemented CI/CD pipelines with Git and Jenkins for efficient application deployment on AWS, reducing build time by 17% to optimize development lifecycle.
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
            Planned a comprehensive testing strategy, executed story test preparations, and conducted bug reporting utilizing Agile methodology while collaborating seamlessly with a team of 20+ developers.
            Developed and included automation test scripts into the Regression Suite for API testing, utilizing Selenium and Java, thereby increasing testing coverage to 76%.
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
            Developed an AWS voice-based assistant, and an OTP service for enhanced security to verify the user using Python, AWS Lambda, SNS, and DynamoDB, and designed an HTML page to display the company's data in graphical format.
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
            Created and executed comprehensive test plans for software applications, ensuring thorough testing coverage. 
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