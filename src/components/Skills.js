import React, { useState, useEffect } from "react";
import {Box, Typography, ImageList, ImageListItem, ImageListItemBar, Backdrop} from "@mui/material";
import {makeStyles} from "@mui/styles";

const data = [
    {
        "title": "Languages",
        "items":[
            {
                "icon": "images/python.jpeg",
                "title": "Python"
            },
            {
                "icon": "images/java.jpeg",
                "title": "Java"
            },
            {
                "icon": "images/js.jpeg",
                "title": "JavaScript"
            },
            {
                "icon": "images/HTML.png",
                "title": "HTML"
            },
            {
                "icon": "images/CSS.png",
                "title": "CSS"
            }
        ]
    },
    {
        "title": "Databases",
        "items":[
            {
                "icon": "images/postgresql.png",
                "title": "PostgreSQL"
            },
            {
                "icon": "images/mysql.jpeg",
                "title": "MySQL"
            },
            {
                "icon": "images/sqlite.jpeg",
                "title": "SQLite"
            },
            {
                "icon": "images/mongo-db.jpeg",
                "title": "MongoDB"
            }
        ]
    },
    {
        "title": "Frameworks & Technologies",
        "items":[
            {
                "icon": "images/django.jpeg",
                "title": "Django"
            },
            {
                "icon": "images/spring.png",
                "title": "Spring Boot"
            },
            {
                "icon": "images/react.jpeg",
                "title": "React"
            },
            {
                "icon": "images/jquery.png",
                "title": "JQuery"
            },
            {
                "icon": "images/selenium.png",
                "title": "Selenium"
            },
            {
                "icon": "images/appium.svg",
                "title": "Appium"
            }
        ]
    },
    {
        "title": "Tools & Platforms",
        "items":[
            {
                "icon": "images/maven.png",
                "title": "Maven"
            },
            {
                "icon": "images/swagger.png",
                "title": "Swagger"
            },
            {
                "icon": "images/restful.png",
                "title": "RESTful APIs"
            },
            {
                "icon": "images/jira.png",
                "title": "Jira"
            },
            {
                "icon": "images/git.jpeg",
                "title": "Git"
            },
            {
                "icon": "images/docker.jpeg",
                "title": "Docker"
            },
            {
                "icon": "images/jenkins.png",
                "title": "Jenkins"
            },
            {
                "icon": "images/airflow.svg",
                "title": "Airflow"
            },
            {
                "icon": "images/aws.png",
                "title": "AWS"
            },
            {
                "icon": "images/svn.png",
                "title": "SVN"
            },
            {
                "icon": "images/sdlc.jpeg",
                "title": "SDLC"
            }
        ]
    }

]

const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
}

const getColumns = (width) => {
    if (width < breakpoints.sm) {
        return 2
    } else if (width < breakpoints.md) {
        return 3
    } else if (width < breakpoints.lg) {
        return 6
    } else if (width < breakpoints.xl) {
        return 7
    } else {
        return 8
    }
}

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
        // height: "100%",
        minHeight: "100vh"
    },
    mainSkillsBox: {
        borderBottom: "2px solid tan",
        width: "100%",
        align: "center"
    },
    heading1: {
        color: "tomato",
        textTransform: "uppercase",
        padding: "1rem 0",
    },
    imageTitle: {
        color: "#F0EAD6",
        textAlign: "center"
    }
}));

const Skills = () => {
    const classes = useStyles();
    const [columns, setColumns] = useState(getColumns(window.innerWidth))
    const updateDimensions = () => {
        setColumns(getColumns(window.innerWidth))
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    return( 
        <Box className={classes.mainContainer}>
            {
                data.map((skillItem) => (
                        <Box className={classes.mainSkillsBox} sx={{height: "100%"}}>
                            <Typography variant="h6" align="center" className={classes.heading1}>
                                {skillItem.title}
                            </Typography>
                            <ImageList sx={{width: "100%",  height: "100%", overflow: "hidden"}} cols={columns} rowHeight={110}>
                                {
                                    skillItem.items.map((imageItem) => (
                                            <ImageListItem key={imageItem.icon} sx= {{height: "100px", width: "100px", margin: 3}}>
                                                <img
                                                    src={imageItem.icon}
                                                    srcSet={`${imageItem.icon}`}
                                                    alt={imageItem.title}
                                                    loading="lazy"
                                                />
                                                <ImageListItemBar
                                                    title={imageItem.title}
                                                    position="below"
                                                    className={classes.imageTitle}
                                                />
                                            </ImageListItem>
                                        )
                                    )
                                }
                            </ImageList>
                        </Box>
                    )
                )
            }
        </Box>
    );
};

export default Skills;