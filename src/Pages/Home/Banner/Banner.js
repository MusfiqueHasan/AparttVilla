import { Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import bg from '../../../images/bannerLogo.jpg'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system';


const useStyles = makeStyles({
    banner: {
        background: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: 'contain',
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
                <Typography variant='h1' sx={{ fontWeight: 'bold' }} >
                    Apartments <br /> For Sale
                </Typography>
                <Typography sx={{ fontSize: '14px', textAlign: 'justify', width: '60%' }}  >
                    In the heart of Brooklyn, in a vibrant neighborhood just east of Prospect Park,
                    stands an eight-story, full-service, strikingly beautiful apartment building
                </Typography>
                <TextField
                    style={{ zIndex: 1 }}
                    label="Search.."
                    type="text"
                    sx={isMobile ? { margin: '0px', bgcolor: 'black', zIndex: 'modal' } : { boxShadow: 1, paddingY: '10px', outline: 'none', marginTop: '10px', zIndex: 'modal', bgcolor: 'white' }}
                />
            </Box>



        </Grid>


    );
};

export default Banner;