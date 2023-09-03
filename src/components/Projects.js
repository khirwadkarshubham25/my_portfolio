import React, { useState, useEffect } from "react";
import {Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const projects = [
    {
        "title": "My Portfolio",
        "image": "images/js.png",
        "url": "https://github.com/khirwadkarshubham25/my_portfolio"
    },
    {
        "title": "Sentiment Analysis Twitter",
        "image": "images/pythonJupyter.png",
        "url": "https://github.com/khirwadkarshubham25/sentiment-analysis-twitter"
    },
    {
        "title": "Store Management System",
        "image": "images/pythonJavascript.png",
        "url": "https://github.com/khirwadkarshubham25/Store-Management-Portal"
    },
    {
      "title": "Expense Manager",
      "image": "images/JavaJavaScript.png",
      "url": "https://github.com/khirwadkarshubham25/expense_manager"
    },
    {
        "title": "ToDo App",
        "image": "images/js.png",
        "url": "https://github.com/khirwadkarshubham25/Todo-App"
    },
    {
        "title": "Linux Commands",
        "image": "images/linux.png",
        "url": "https://github.com/khirwadkarshubham25/linux_cheat_sheet"
    },
    {
        "title": "Sales Data Analysis",
        "image": "images/pythonJupyter.png",
        "url": "https://github.com/khirwadkarshubham25/sales_data_analysis"
    },
    {
        "title": "Design and Analysis of Algorithms(DAA) Codes",
        "image": "images/python.jpeg",
        "url": "https://github.com/khirwadkarshubham25/DAA_Codes"
    },
    {
        "title": "Neural Network Assignments",
        "image": "images/nn.jpg",
        "url": "https://github.com/khirwadkarshubham25/Neural_Network_Assignments"
    },
    {
        "title": "DBMS Models and Implementation Projects",
        "image": "images/pythonMongoDB.jpg",
        "url": "https://github.com/khirwadkarshubham25/DB2_Projects"
    },
    
]

const useStyles = makeStyles(() => ({
  mainContainer: {
    background: "#233",
    height: "100%",
    minHeight: "100vh"
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));



const Projects = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="160"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => {
                  window.location.href=project.url
                }}>
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;