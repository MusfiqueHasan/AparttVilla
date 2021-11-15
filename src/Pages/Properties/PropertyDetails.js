
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../SharedPage/Navbar/Navbar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useAuth from '../../hooks/useAuth';
const PropertyDetails = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const [property, setProperty] = useState({})
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const { image, location, name, propertySize, bedrooms, baths, balcony, price } = property
    const newBuyingList = { image, location, name, propertySize, bedrooms, baths, balcony, price }
    useEffect(() => {

        axios.get(`https://lit-anchorage-11150.herokuapp.com/properties/${id}`)
            .then(res => {
                setProperty(res.data)
            })
    }, [])

    const handleAddress = e => {
        setAddress(e.target.value)
    }
    const handlePhone = e => {
        setPhone(e.target.value)
    }
    const handleBuy = (e) => {
        newBuyingList.userEmail = user?.email
        newBuyingList.address = address
        newBuyingList.phoneNumber = phone
        axios.post('https://lit-anchorage-11150.herokuapp.com/buyingList', newBuyingList)
            .then(res => { })
        e.preventDefault()
    }
    console.log(property)
    return (
        <>
            <Navbar />
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6} sx={{ mt: 20, }}>
                        <Paper elevation={3} sx={{ p: 7 }}>
                            <Box sx={{}}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column' }}>
                                    <img src={property.image} alt="" width={300} height={300} />
                                    <Typography style={{ fontSize: '30px', fontFamily: 'fantasy' }}>
                                        {property.name}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    <Typography sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                                        <LocationOnIcon />
                                        <span>  {property.location}</span>
                                    </Typography>
                                    <Typography >
                                        TK. {property.price}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', }}>
                                <Typography sx={{ mr: 2 }}>
                                    <span style={{ fontWeight: 'bold' }}>Area: </span>
                                    {property.propertySize} sqrft
                                </Typography>
                                <Typography sx={{ mr: 2 }}>
                                    <span style={{ fontWeight: 'bold' }}>Bedrooms: </span>
                                    {property.bedrooms}
                                </Typography>
                                <Typography sx={{ mr: 2 }}>
                                    <span style={{ fontWeight: 'bold' }}>Baths: </span>
                                    {property.baths}
                                </Typography>
                                <Typography sx={{ mr: 2 }}>
                                    <span style={{ fontWeight: 'bold' }}>Balcony: </span>
                                    {property.balcony}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ mt: 20, }}>
                        <Paper elevation={3} sx={{ p: 7 }}>
                            <Typography style={{ fontFamily: 'fantasy', fontSize: '40px', marginBottom: '10px', textAlign: 'center' }}>
                                Check out
                            </Typography>
                            <form onSubmit={handleBuy}>

                                <TextField
                                    name="name"
                                    sx={{ width: '90%', m: 1 }}
                                    id="outlined-size-small"
                                    label="user name"
                                    defaultValue={user.displayName}
                                    size="small"
                                />
                                <TextField
                                    sx={{ width: '90%', m: 1, }}
                                    id="outlined-size-small"
                                    name="email"
                                    label="user email"
                                    value={user.email}
                                    size="small"
                                />
                                <TextField
                                    sx={{ width: '90%', m: 1, }}
                                    id="outlined-size-small"
                                    name="address"
                                    label="address"
                                    onBlur={handleAddress}
                                    required
                                    size="small"
                                />
                                <TextField
                                    sx={{ width: '90%', m: 1, }}
                                    id="outlined-size-small"
                                    name="phone"
                                    label="phone"
                                    onBlur={handlePhone}
                                    required
                                    size="small"
                                />
                                <TextField
                                    sx={{ width: '90%', m: 1, }}
                                    id="outlined-size-small"
                                    name="name"
                                    value={property.name}
                                    size="small"

                                />


                                <Button
                                    type="submit"
                                    style={{ background: '#006266', color: 'white', marginTop: '33px' }}
                                    sx={{ px: 3, py: 1, ml: 1 }}
                                >
                                    Buy now
                                </Button>
                            </form>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
};

export default PropertyDetails;