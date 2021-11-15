import { Box, Button, Container, Grid, InputAdornment, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useProperties from '../../hooks/useProperties';
import Navbar from '../SharedPage/Navbar/Navbar';
import AllProperties from './AllProperties';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BalconyIcon from '@mui/icons-material/Balcony';
import BathroomIcon from '@mui/icons-material/Bathroom';


const PropertiesMain = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const division = ['dhaka', 'chittagong', 'rajshahi', 'barishal', 'shylet', 'khulna']
    const [search, setSearch] = useState({})
    const [propertyInfo] = useProperties(false)
    const history = useHistory()
    const handlePropertyDetails = (id) => {
        history.push(`/properties/${id}`)
    }

    const handleOnchange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...search };
        newLoginData[field] = value;
        setSearch(newLoginData)

    }
    const handleSubmit = e => {

        // axios.post('http://localhost:5000/properties', property)
        //     .then(res => { setProperty({}) })

        e.preventDefault()
    }
    return (
        <>
            <Navbar />
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} sx={{ mt: 10 }}>
                        <Box sx={{ boxShadow: 3, p: 5, my:10}}>
                            <form onSubmit={handleSubmit} >
                                <Box>
                                    <TextField
                                        sx={{ width: '80%', my: 1 }}
                                        id="outlined-select-currency"
                                        select
                                        onChange={handleOnchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LocationOnIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                        {division.map((option) => (
                                            <MenuItem value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        sx={{ width: '26%', my: 1 }}
                                        id="outlined-select-currency"
                                        select
                                        onChange={handleOnchange}
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
                                        onChange={handleOnchange}
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
                                        onChange={handleOnchange}
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
                            propertyInfo.map(property => <AllProperties
                                property={property}
                                handlePropertyDetails={handlePropertyDetails}
                            />)

                        }

                    </Grid>
                    <Grid item xs={12} mad={4}>

                    </Grid>

                </Grid>
            </Container>

        </>
    );
};

export default PropertiesMain;