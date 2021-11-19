import React from 'react';
import { Button, Card, CardContent, CardMedia, Fab, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BalconyIcon from '@mui/icons-material/Balcony';
import BathroomIcon from '@mui/icons-material/Bathroom';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Box } from '@mui/system';

const AllProperties = ({ property, handlePropertyDetails }) => {
    const { _id, image, location, name, propertySize, bedrooms, baths, balcony, price } = property
    return (

        <Grid item xs={12} md={6}>

            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: '45%', height: '350px' }}
                    image={image}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '55%' }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', my: 1 }}>
                            <LocationOnIcon sx={{ color: '#006266' }} />
                            <Typography>
                                {location}

                            </Typography>
                        </Box>
                        <Typography style={{ fontWeight: 'bold', fontSize: '20px', color: '#006266' }}>
                            {name}
                        </Typography>

                        <Typography style={{ fontWeight: 'bold', backgroundColor: '#dfe6e9', width: '160px' }} sx={{ py: 1, px: 3, my: 1 }}>
                            TK.  {price}
                        </Typography>

                        <Box sx={{ my: 2, display: 'flex', flexWrap: 'wrap', }}>
                            <Box sx={{ display: 'flex', m: 1 }}>
                                <MapsHomeWorkIcon sx={{ mr: 1, color: '#006266' }} />
                                <Typography>
                                    {propertySize} sqrft
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', m: 1 }}>
                                <BedIcon sx={{ mr: 1, color: '#006266' }} />
                                <Typography>
                                    {bedrooms} Bedrooms
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', m: 1 }}>
                                <BalconyIcon sx={{ mr: 1, color: '#006266' }} />
                                <Typography>
                                    {balcony} Balcony
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', m: 1 }}>
                                <BathroomIcon sx={{ mr: 1, color: '#006266' }} />
                                <Typography>
                                    {baths} Baths
                                </Typography>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Button onClick={() => handlePropertyDetails(_id)}>
                                <Fab size="small" aria-label="add" style={{ backgroundColor: '#006266', color: 'white' }}>
                                    <AddIcon />
                                </Fab>
                            </Button>
                            <Typography style={{ fontSize: '10px', fontWeight: 'bolder', marginTop: '5px' }}>
                                For BUY PROPERTY click here
                            </Typography>
                        </Box>
                    </CardContent>
                </Box>

            </Card>

        </Grid>
    );
};

export default AllProperties;