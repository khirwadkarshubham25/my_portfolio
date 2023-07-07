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
                "icon": "images/scala.png",
                "title": "Scala"
            }
        ]
    },
    {
        "title": "Databases",
        "items":[
            {
                "icon": "images/mysql.jpeg",
                "title": "MySQL"
            },
            {
                "icon": "images/postgresql.png",
                "title": "PostgreSQL"
            },
            {
                "icon": "images/oracle.png",
                "title": "Oracle"
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
                "icon": "images/selenium.png",
                "title": "Selenium"
            },
            {
                "icon": "images/appium.svg",
                "title": "Appium"
            },
            {
                "icon": "images/HTML.png",
                "title": "HTML"
            },
            {
                "icon": "images/CSS.png",
                "title": "CSS"
            },
            {
                "icon": "images/hadoop.png",
                "title": "Hadoop"
            }
        ]
    },
    {
        "title": "Tools & Platforms",
        "items":[
            {
                "icon": "images/git.jpeg",
                "title": "Git"
            },
            {
                "icon": "images/jira.png",
                "title": "Jira"
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
            }
        ]
    }

]

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
        height: "100%",
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

const firebaseConfig = {
    apiKey: "AIzaSyBT6s5TmW5HXw8RETNluv6yazT19MXMqYc",
    authDomain: "portfolio-b9fef.firebaseapp.com",
    databaseURL: "https://portfolio-b9fef-default-rtdb.firebaseio.com",
    projectId: "portfolio-b9fef",
    storageBucket: "portfolio-b9fef.appspot.com",
    messagingSenderId: "25981651527",
    appId: "1:25981651527:web:45c06dc77435a60eca3f62"
}

const Skills = () => {
    const classes = useStyles();
    return( 
        <Box className={classes.mainContainer}>
            {
                data.map((item) => {
                    return (
                        <Box className={classes.mainSkillsBox} sx={{height: "100%"}}>
                            <Typography variant="h6" align="center" className={classes.heading1}>
                                {item.title}
                            </Typography>
                            <ImageList sx={{width: "100%",  height: "100%", overflow: "hidden"}} cols={6} rowHeight={110}>
                                {
                                    item.items.map((imageItem) => {
                                        return(
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
                                        );
                                    })
                                }
                            </ImageList>
                        </Box>
                    );
                })
            }
        </Box>
        // <Box className={classes.mainContainer}>
        //     <ImageList sx={{width: "100%",  height: "100%", margin: -0.5}} cols={1} rowHeight={40}>
        //         {
        //             data.map((item) => {
        //                 return(
        //                     <Box className={classes.mainSkillsBox}>
        //                         <Typography variant="h6" align="center" className={classes.heading1}>
        //                             {item.title}
        //                         </Typography>
        //                         <ImageList sx={{width: "100%",  height: "25vh"}} cols={6} rowHeight={40}>
        //                         {
        //                             item.items.map((imageItem) => {
        //                                 return(
        //                                     <ImageListItem key={imageItem.icon} sx= {{height: "100px", width: "100px", margin: 3}}>
        //                                         <img
        //                                             src={imageItem.icon}
        //                                             srcSet={`${imageItem.icon}`}
        //                                             alt={imageItem.title}
        //                                             loading="lazy"
        //                                         />
        //                                         <ImageListItemBar
        //                                             title={imageItem.title}
        //                                             position="below"
        //                                             className={classes.imageTitle}
        //                                         />
        //                                         </ImageListItem>
        //                                     );
        //                                 })
        //                             }
        //                         </ImageList>
        //                     </Box>
        //                 );
        //             })
        //         }
        //     </ImageList>
        // </Box>
    );
};
// };

export default Skills;