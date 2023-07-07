import React from "react";
import { useState } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Menu as MenuIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import {createTheme, ThemeProvider, styled} from "@mui/material/styles";

const appBarTheme = createTheme({
    palette: {
        primary: {
            main: "#222"
        },
        secondary: {
            main: "#D2B48C"
        }
    }
});

const AppBarComponent = styled(AppBar) (({theme}) => ({
    margin: 0,
    position: "sticky"
}));

const NavLinkComponent = styled(NavLink) (() => ({
    margin: "1rem",
    textDecoration: "none"
}));

const DrawerHeader = styled('div')(() => ({
    display: 'flex',
    verticalAlign: 'center',
    justifyContent: 'flex-end',
    margin: "0.5rem"
}));
  

function Navbar() {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = createTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
     };

    if (isSmallScreen || isMediumScreen) {
        return (
            <ThemeProvider theme={ appBarTheme }>
                <AppBarComponent position="sticky">
                    <Toolbar>
                        <IconButton
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="tan">Portfolio</Typography>
                    </Toolbar>
                </AppBarComponent>
                <Drawer anchor="left" open={drawerOpen} PaperProps={{sx: {backgroundColor: "#222"}}} onClose={toggleDrawer}>
                    {/* <Toolbar /> */}
                    <DrawerHeader>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon style={{color:"tan"}}/>
                        </IconButton>
                    </DrawerHeader>
            
                    <Divider sx={{ bgcolor: "white" }}/>
                    <List>
                        <ListItem component={NavLinkComponent} style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/`}>
                            <ListItemText primary='Home' />
                        </ListItem>
                        <ListItem component={NavLinkComponent} style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/education`}>
                            <ListItemText primary='Education' />
                        </ListItem>
                        <ListItem component={NavLinkComponent} style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/work_experience`}>
                            <ListItemText primary='Work Experience' />
                        </ListItem>
                        <ListItem component={NavLinkComponent} style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/skills`}>
                            <ListItemText primary='Skills' />
                        </ListItem>
                        <ListItem component={NavLinkComponent} style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/projects`}>
                            <ListItemText primary='Projects' />
                        </ListItem>
                        <ListItem component={NavLinkComponent} style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/contact`}>
                            <ListItemText primary='Contact Me' />
                        </ListItem>
                        <ListItem component={NavLinkComponent} style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/reviews`}>
                            <ListItemText primary='Reviews' />
                        </ListItem>
                    </List>
                    <Divider sx={{ bgcolor: "white" }} />
                </Drawer>
            </ThemeProvider>
        );
    }
    
    return(
        <React.Fragment>
            <ThemeProvider theme={appBarTheme}>
                <Box component="nav" >
                    <AppBarComponent position="sticky">
                        <Toolbar>
                            <Typography variant="h6">
                                <NavLinkComponent style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/`}>
                                    Home
                                </NavLinkComponent>
                            </Typography>
                            <Typography variant="h6">
                                <NavLinkComponent style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/education`}>
                                    Education
                                </NavLinkComponent>
                            </Typography>
                            <Typography variant="h6">
                                <NavLinkComponent style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/work_experience`}>
                                    Work Experience
                                </NavLinkComponent>
                            </Typography>
                            <Typography variant="h6">
                                <NavLinkComponent style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/skills`}>
                                    Skills
                                </NavLinkComponent>
                            </Typography>
                            <Typography variant="h6">
                                <NavLinkComponent style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/projects`}>
                                    Projects
                                </NavLinkComponent>
                            </Typography>
                            <Typography variant="h6">
                                <NavLinkComponent style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/contact`}>
                                    Contact Me
                                </NavLinkComponent>
                            </Typography>
                            <Typography variant="h6">
                                <NavLinkComponent style={({ isActive }) => ({color: isActive ? 'white' : 'tan'})} to={`/reviews`}>
                                    Reviews
                                </NavLinkComponent>
                            </Typography>
                        </Toolbar>
                    </AppBarComponent>
                </Box>

            </ThemeProvider>
        </React.Fragment>
    );
}

export default Navbar;
