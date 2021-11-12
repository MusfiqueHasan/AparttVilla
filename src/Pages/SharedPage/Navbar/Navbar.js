import { Toolbar, Button, } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.webp'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    navbar: {
        backgroundColor: 'white',
        padding: '25px 0px',
        width: '100vw',
        zIndex: 2
    },
    innerNavbar: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    allLink: {
        color: 'black',
        textDecoration: 'none'
    }

})



const Navbar = () => {
    const classes = useStyles()
    const { user, logOut } = useAuth()

    return (
        <Box position="fixed" className={classes.navbar} sx={{ zIndex: 'app bar' }} >
            <Toolbar className={classes.innerNavbar}>
                <Box>
                    <img src={logo} alt="" width={150} />
                </Box>
                <Box>
                    <Link to="/appointment" className={classes.allLink}>
                        <Button color="inherit">All Properties</Button>
                    </Link>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    Dashboard
                                </NavLink>
                                <Button onClick={logOut} color="inherit">logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
                                Login
                            </NavLink>
                    }
                </Box>
            </Toolbar>

        </Box>
    );
};

export default Navbar;