import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles'
import bg from '../../images/error.svg'

const useStyles = makeStyles({
    error: {
        width: '100%',
        height: '80vh',
        background: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'

    },
    link:{
        textDecoration:'none',
        fontWeight:'bold',
        cursor:'pointer',
        padding:'7px 15px',
        backgroundColor: '#006266',
        color:'white',
        borderRadius:'10px'
        
    }



})
const Error = () => {

    const classes = useStyles()
    const isMobile = useMediaQuery('(max-width:600px)')
    return (
        <Box className={classes.error}>
            {/* Error UI */}
            <NavLink className={classes.link}  to="/home">home page</NavLink>
        </Box>
    );
};

export default Error;