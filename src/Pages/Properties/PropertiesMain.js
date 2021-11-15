import { Box, Button, Container, Grid, InputAdornment, MenuItem, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useProperties from '../../hooks/useProperties';
import Navbar from '../SharedPage/Navbar/Navbar';
import AllProperties from './AllProperties';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BalconyIcon from '@mui/icons-material/Balcony';
import BathroomIcon from '@mui/icons-material/Bathroom';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const PropertiesMain = (props) => {
    const location = useLocation()
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const divisions = ['dhaka', 'chittagong', 'rajshahi', 'barishal', 'shylet', 'khulna']
    const [division, setDivision] = useState('')
    const [bedrooms, setBed] = useState('')
    const [baths, setBath] = useState('')
    const [balcony, setBalcony] = useState('')
    const [propertyInfo] = useProperties(false)
    const [data, setData] = useState(propertyInfo)
    const history = useHistory()
    const handlePropertyDetails = (id) => {
        history.push(`/properties/${id}`)
    }


    const handleDivisionField = event => {
        console.log(event.target.value)
        setDivision(event.target.value);
    }
    const handleBedField = event => {
        console.log(event.target.value)
        setBed(event.target.value);
    }
    const handleBathField = event => {
        console.log(event.target.value)
        setBath(event.target.value);
    }
    const handleBalconyField = event => {
        console.log(event.target.value)
        setBalcony(event.target.value);
    }
    useEffect(() => {
        if (location?.state?.data && location.state.data.length > 0) {
            setData(location.state.data)
        } else {
            setData(propertyInfo)
        }

    }, [propertyInfo, location?.state?.data])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/filter', {
            division, bedrooms, baths, balcony
        })
            .then(res => {
                setData(res.data)
            }
            )


    }
    return (
        <>
            <Navbar />
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} sx={{ mt: 10 }}>
                        <Box sx={{ boxShadow: 3, p: 5, my: 10 }}>
                            <form onSubmit={handleSubmit} >
                                <Box>
                                    <TextField
                                        sx={{ width: '80%', my: 1 }}
                                        id="outlined-select-currency"
                                        select
                                        required
                                        onChange={handleDivisionField}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LocationOnIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                        {divisions.map((option) => (
                                            <MenuItem value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        sx={{ width: '26%', my: 1 }}
                                        id="outlined-select-currency"
                                        select
                                        required
                                        onChange={handleBedField}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <BedIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                        {numbers.map((option) => (
                                            <MenuItem value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        sx={{ width: '26%', m: 1 }}
                                        id="outlined-select-currency"
                                        select
                                        required
                                        onChange={handleBathField}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <BathroomIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                        {numbers.map((option) => (
                                            <MenuItem value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        sx={{ width: '26%', my: 1 }}
                                        id="outlined-select-currency"
                                        select
                                        required
                                        onChange={handleBalconyField}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <BalconyIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                        {numbers.map((option) => (
                                            <MenuItem value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Box>
                                <Button
                                    style={{ backgroundColor: '#006266' }}
                                    sx={{ width: '20%', my: 1 }}
                                    variant="contained"
                                    type="submit"
                                >
                                    search
                                </Button>
                            </form>
                        </Box>
                        {

                            data.map(property => <AllProperties
                                property={property}
                                handlePropertyDetails={handlePropertyDetails}
                            />)

                        }

                    </Grid>
                    <Grid item xs={12} mad={4}>

                    </Grid>

                </Grid>
            </Container>
            <Footer />

        </>
    );
};

export default PropertiesMain;