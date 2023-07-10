import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <AppBar position='static'>
          <Toolbar >
            <Typography variant="h6" component="animateTransform" sx={{flexGrow: 1}} >
                Staff Management 
            </Typography>
            <Button color="inherit" component={Link} to="/">
                HOME
            </Button>
            <Button color="inherit" component={Link} to="/dashboard">
                DASHBOARD
            </Button>
            <Button color="inherit" component={Link} to="/contact">
                CONTACT
            </Button>
            
          </Toolbar>
        </AppBar>
    );
};

export default Navbar;
