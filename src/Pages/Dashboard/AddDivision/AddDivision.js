import { Box, Button, InputAdornment, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import CommonPage from '../../SharedPage/CommonPage/CommonPage';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import BedIcon from '@mui/icons-material/Bed';
import BalconyIcon from '@mui/icons-material/Balcony';
import BathroomIcon from '@mui/icons-material/Bathroom';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import axios from 'axios';
const AddDivision = () => {

    const [property, setProperty] = useState({})

    const handleOnchange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...property };
        newLoginData[field] = value;
        setProperty(newLoginData)

    }
    const handleSubmit = e => {

        axios.post('http://localhost:5000/division', property)
            .then(res => { setProperty({}) })

        e.preventDefault()
    }
    console.log(property)
    return (
        <CommonPage title={'Add Division'}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <form onSubmit={handleSubmit}
                    style={{
                        width: '90%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                      <TextField
                        sx={{ width: '44%' }}
                        id="outlined-select-currency"
                        select
                        name='division'
                        onChange={handleOnchange}
                        // onChange={handleRatingField}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LandscapeOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                        required
                    >
                        {['dhaka', 'chittagong', 'rajshahi', 'barishal', 'shylet', 'khulna'].map((option) => (
                            <MenuItem value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        sx={{ width: '44%', my: 1 }}
                        id="outlined-basic"
                        variant="outlined"
                        name='image'
                        onChange={handleOnchange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <ImageOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                        required
                    />

                    <Button
                        style={{ backgroundColor: '#006266' }}
                        sx={{ width: '20%', my: 1 }}
                        variant="contained"
                        type="submit"
                    >
                        send feedback
                    </Button>
                </form>
            </Box>
        </CommonPage>
    );
};

export default AddDivision;