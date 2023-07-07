import React from "react";
import {Box, Typography} from "@mui/material";
import {useTheme, createTheme, ThemeProvider} from "@mui/material/styles";
import {makeStyles} from "@mui/styles";
import { NavLink } from "react-router-dom";

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

const useStyles = makeStyles(() =>({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
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
  timeLineYear: {
    align: "center",
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
        right: "auto",
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

const EducationComponents = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Education
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h5"
            // align="center"
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
              Masters in Computer Science
            </Typography>
            <Typography variant="body1" align="center" className={classes.body1}>
              The University of Texas at Arlington
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle1}
            >
              During my Master's program in Computer Science at The University of Texas at Arlington, I gained in-depth knowledge and practical skills in various areas of computer science. The program provided a comprehensive understanding of advanced algorithms, data structures, software engineering principles, and artificial intelligence. I also had the opportunity to collaborate with professors and fellow students on cutting-edge projects, further enhancing my problem-solving abilities and critical thinking skills. Through coursework, hands-on projects, I honed my expertise in areas such as artificial intelligence, machine learning, databases, cloud computing, and software development, preparing me for a successful career in the field of computer science.
            </Typography>
          </Box>
          <Typography
            variant="h5"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Aug 2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              <NavLink className={classes.hoverClass} to={`/work_experience`}>
                  Work Experience
                </NavLink>
            </Typography>
          </Box>
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
              Bachlors in Technology
            </Typography>
            <Typography variant="body1" align="center" className={classes.body1}>
              Vishwakarma Institute of Technology, Pune
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle1}
            >
              My Bachelor's degree in Computer Engineering from Vishwakarma Institute of Technology provided a strong foundation in fundamental concepts and principles of computer science. Through coursework and hands-on projects, I gained expertise in programming languages, data structures, algorithms, database management, and software development. The program also emphasized problem-solving, critical thinking, and teamwork skills, which are essential in the field of computer science. Additionally, I had the opportunity to work on industry-oriented projects and internships, which enhanced my practical knowledge and prepared me for real-world challenges. Overall, my undergraduate education in computer science equipped me with the necessary skills and knowledge to excel in the dynamic and ever-evolving field of technology.
            </Typography>
          </Box>
          <Typography
            variant="h5"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Aug 2014
          </Typography>
        </Box>
      </Box>
  );
}

const Education = () => {
  return (
    <ThemeProvider theme={theme}>
      {EducationComponents()}
    </ThemeProvider>
  );
};

export default Education;