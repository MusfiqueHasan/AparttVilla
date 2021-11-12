import { Toolbar, Button, Tooltip, Typography, } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.webp'
import { makeStyles } from '@mui/styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: 'white',
        width: '100vw',
        zIndex: 2,
        boxShadow: ' 0 1px 10px rgba(0, 0, 0, 0.4)'
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
        <Box position="fixed" className={classes.navbar} sx={{ boxShadow: 1, pt: 4, pb: 2 }} >
            <Toolbar className={classes.innerNavbar}>
                <Box style={{ width: '20%', display: 'flex', justifyContent: 'center' }}>
                    <Link to="/home" className={classes.allLink}>
                        <img src={logo} alt="" width={150} />
                    </Link>

                </Box>
                <Box style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <Box>
                        <Link to="/home" className={classes.allLink}>
                            <Button color="inherit">Home</Button>
                        </Link>
                        <Link to="/appointment" className={classes.allLink}>
                            <Button color="inherit">All Properties</Button>
                        </Link>
                        {
                            user?.email && <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                            </NavLink>
                        }
                    </Box>
                    {
                        user?.email ?
                            <Box style={{ display: 'flex', alignItems: 'center' }}>
                                <Button onClick={logOut}
                                    sx={{ px: 3 }}
                                    style={{ backgroundColor: '#006266', color: 'white' }}
                                >logout</Button>
                                <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Tooltip title="profile" placement="bottom">
                                        <Box style={{ display: 'flex', alignItems: 'center', }}>
                                            {user.photoURL ?
                                                <img src={user.photoURL} alt="" width={50} style={{ borderRadius: '50%', marginLeft: '20px' }} />
                                                : <AccountCircleIcon className="rounded-full w-14 h-14" />
                                            }
                                            <Typography style={{ fontSize: '14px', marginLeft: '10px' }} >{user.displayName}</Typography>
                                        </Box>
                                    </Tooltip>

                                </NavLink>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
                                <Button color="inherit"
                                    sx={{ px: 3 }}
                                    style={{ backgroundColor: '#006266', color: 'white' }}
                                >login</Button>
                            </NavLink>
                    }
                </Box>
            </Toolbar>

        </Box>
    );
};

export default Navbar;