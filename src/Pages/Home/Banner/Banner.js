import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, TextField, Typography, useMediaQuery, Button } from '@mui/material';
import bg from '../../../images/bannerLogo.jpg'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const useStyles = makeStyles({
    banner: {
        background: `linear-gradient(120deg, white 53%, transparent 30% ),url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        height: '100vh',

    },
    innerGrid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '200px'

    },
    search: {
        width: '100%',
        backgroundColor: 'white',
        padding: '20px ',
        border: 'none',
    }


})

const Banner = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(max-width:600px)')


    return (


        <Grid container spacing={2} className={classes.banner} >

            <Box className={classes.innerGrid}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '60px',fontFamily: 'fantasy' }} >
                Apartments For <span style={{color:'#006266', borderBottom:'5px solid #006266'}}>Sale</span>   
                </Typography>
                <Typography sx={{ fontSize: '14px', textAlign: 'justify', width: '40%', my: 1 }}  >
                    In the heart of Brooklyn, in a vibrant neighborhood just east of Prospect Park,
                    stands an eight-story, full-service, strikingly beautiful apartment building  eight-story, full-service, strikingly beautiful apartment building
                </Typography>
                <TextField
                    style={{ zIndex: 1 }}
                    label="Search.."
                    type="text"
                    sx={isMobile ? { margin: '0px', bgcolor: 'black', zIndex: 'modal' } : { boxShadow: 1, outline: 'none', marginTop: '10px', zIndex: 'modal', bgcolor: 'white', width: '70%' }}
                />
                {/* <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/properties">
                    <Button color="inherit"
                        sx={{ px: 4, py: 2, my: 1 }}
                        style={{ backgroundColor: '#006266', color: 'white', fontFamily: 'initial' }}
                    >
                        properties
                        <ArrowRightAltIcon />
                    </Button>
                </NavLink> */}
            </Box>



        </Grid>


    );
};

export default Banner;