import React from 'react';
import { Box, Divider, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles'
import bg from '../../../images/proBanner.jpg'

const useStyles = makeStyles({
    banner: {
        background: `linear-gradient(230deg, #006266 50%, rgba(10, 65, 48, 0.657) 30% ), url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '35vh',

    },



})
const PropertiesBanner = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(max-width:600px)')
    return (
        <Box>
            <Box className={classes.banner}>
                <Box sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box sx={{ p: 5 }}>
                        <Typography sx={{ fontSize: 40, color: 'white', fontWeight: 'bold', textAlign: 'center', fontFamily: 'serif' }}>
                            The <span style={{ borderBottom: '5px solid white ' }}>Largest</span> Apartment Sale Portal in Bangladesh
                        </Typography>
                        <Typography sx={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', mt: 5, }}>
                            Featured Properties
                        </Typography>
                        <Divider sx={{ my: 1, width: '10%', fontWeight: 'bold', mx: 'auto', border: '2px solid white', bgcolor: 'white' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PropertiesBanner;