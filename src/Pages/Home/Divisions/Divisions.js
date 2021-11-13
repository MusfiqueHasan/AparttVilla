import React from 'react';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Slider from "react-slick";
import { makeStyles } from '@mui/styles'
import dhakaImg from '../../../images/dhaka.jfif'


const useStyles = makeStyles({
    card: {
        width: "100%",
        height: "400px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'flex-end',

    },
    



})

const Divisions = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(max-width:600px)')
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]
    };
    console.log(dhakaImg)


    return (
        <Grid container spacing={5} sx={isMobile ? {} : { my: 20 }}>
            <Grid item xs={12} md={9}>

                <Slider {...settings}>
                    <div style={{ background: `url(${dhakaImg})`, width: '100%', height: '50%' }}>
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quibusdam quasi mollitia?</h3>
                    </div>
                    <Box>
                        <div className={classes.card} style={{
                            background: `linear-gradient(15deg,rgba(11, 59, 27, 0.76) 20%, transparent 50% ), url(${dhakaImg}) `,
                        }}>
                            <Typography style={{ color: 'white', marginLeft: '30px',fontSize:'25px', fontWeight:'bold', fontFamily:'sans-serif' }}>Dhaka</Typography>
                            <Typography style={{ color: 'white', marginLeft: '30px', marginBottom:'30px' }}>456 Properties</Typography>
                        </div>
                    </Box>

                    <div style={{ background: `url(${dhakaImg})`, width: '100%', height: '50%' }}>
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quibusdam quasi mollitia?</h3>
                    </div>
                    <div style={{ background: `url(${dhakaImg})`, width: '100%', height: '50%' }}>
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quibusdam quasi mollitia?</h3>
                    </div>



                </Slider>



            </Grid>
            <Grid item xs={12} md={3}>
                <Typography sx={isMobile ? {} : { fontSize: 50, fontWeight: 'bold',fontFamily: 'fantasy' }}>
                    Sunny Loft Apartments
                </Typography>
                <Typography sx={isMobile ? {} : { fontSize: 15, width: '80%', textAlign: 'justify' }}>
                    From the rooftop terrace, down to the first floor gym, every detail of eight floors provides amenities filled with convenience, class
                </Typography>
            </Grid>

        </Grid>
    );
};

export default Divisions;