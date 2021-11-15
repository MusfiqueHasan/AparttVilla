import React, { useState } from 'react';
import { Button, Container, Grid, InputAdornment, MenuItem, Paper, TextField, Typography, useMediaQuery } from '@mui/material';
import bg from '../../../images/bannerLogo.jpg'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BalconyIcon from '@mui/icons-material/Balcony';
import BathroomIcon from '@mui/icons-material/Bathroom';

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
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const division = ['dhaka', 'chittagong', 'rajshahi', 'barishal', 'shylet', 'khulna']
    const [search, setSearch] = useState({})
    const handleOnchange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...search };
        newLoginData[field] = value;
        setSearch(newLoginData)

    }

    const handleSubmit = e => {

        // axios.post('https://lit-anchorage-11150.herokuapp.com/properties', property)
        //     .then(res => { setProperty({}) })

        e.preventDefault()
    }

    return (


        <Grid container spacing={2} className={classes.banner} >

            <Box className={classes.innerGrid}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '60px', fontFamily: 'fantasy' }} >
                    Apartments For <span style={{ color: '#006266', borderBottom: '5px solid #006266' }}>Sale</span>
                </Typography>
                <Typography sx={{ fontSize: '14px', textAlign: 'justify', width: '40%', my: 1 }}  >
                    In the heart of Brooklyn, in a vibrant neighborhood just east of Prospect Park,
                    stands an eight-story, full-service, strikingly beautiful apartment building  eight-story, full-service, strikingly beautiful apartment building
                </Typography>
                <Paper elevation={0} sx={{ p:5, width:'49%'}}>

                    <form onSubmit={handleSubmit} >
                        <Box>
                            <TextField
                                sx={{ width: '100%', my: 1, background: 'white' }}
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
                                sx={{ width: '33%', my: 1, background: 'white' }}
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
                                sx={{ width: '32%', m: 1, background: 'white' }}
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
                                sx={{ width: '32%', my: 1, background: 'white' }}
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
                </Paper>
            </Box>



        </Grid>


    );
};

export default Banner;