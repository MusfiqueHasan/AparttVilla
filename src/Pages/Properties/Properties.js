import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Divider, Fab, Grid, Typography } from '@mui/material';
import img from '../../images/flat1.jpg'
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BalconyIcon from '@mui/icons-material/Balcony';
import BathroomIcon from '@mui/icons-material/Bathroom';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Box } from '@mui/system';
import axios from 'axios';
import useProperties from '../../hooks/useProperties';
const Properties = ({property}) => {

    const {image,location,name,propertySize,bedrooms,baths,balcony,price}=property


    return (
        <Grid item xs={12} md={4} sx={{ pb: 5 }}>
            <Card sx={{ maxWidth: 345, }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={image}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
                                <LocationOnIcon sx={{ color: '#006266' }} />
                                <Typography>
                                    {location}

                                </Typography>
                            </Box>
                            <Typography style={{ fontWeight: 'bold', fontSize: '20px', color: '#006266' }}>
                                {name}
                            </Typography>

                            <Typography style={{ fontWeight: 'bold', backgroundColor: '#dfe6e9', width: '160px' }} sx={{ py: 1, px: 3, my: 1 }}>
                                {price}
                            </Typography>
                            <Divider />
                            <Box sx={{ my: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                <Box sx={{ display: 'flex', m: 1 }}>
                                    <MapsHomeWorkIcon sx={{ mr: 1, color: '#006266' }} />
                                    <Typography>
                                       {propertySize}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', m: 1 }}>
                                    <BedIcon sx={{ mr: 1, color: '#006266' }} />
                                    <Typography>
                                        {bedrooms}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', m: 1 }}>
                                    <BalconyIcon sx={{ mr: 1, color: '#006266' }} />
                                    <Typography>
                                       {balcony}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', m: 1 }}>
                                    <BathroomIcon sx={{ mr: 1, color: '#006266' }} />
                                    <Typography>
                                       {baths}
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider />
                        </CardContent>

                        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Fab size="small" aria-label="add" style={{ backgroundColor: '#006266', color: 'white' }}>
                                <AddIcon />
                            </Fab>
                            <Typography style={{ fontSize: '10px', fontWeight: 'bolder', marginTop: '5px' }}>
                                For more details click here
                            </Typography>
                        </Box>
                    </Card>
                
          
        </Grid>

    );
};

export default Properties;