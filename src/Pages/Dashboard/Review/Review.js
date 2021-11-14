import { Box, Button, InputAdornment, MenuItem, TextareaAutosize, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import CommonPage from '../../SharedPage/CommonPage/CommonPage';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import axios from 'axios';
const Review = () => {
    const {  user } = useAuth()

    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')

    const currencies = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

    const handleReviewField = event => {
        console.log(event.target.value)
        setReview(event.target.value);
    }
    const handleRatingField = event => {
        console.log(event.target.value)
        setRating(event.target.value);
    }

    const imageURL = 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png'
    const handleSubmit = event => {
        if (!user.photoURL) {
            user.photoURL = imageURL
        }
        axios.post('http://localhost:5000/reviews',
            {
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
                rating,
                review
            })
            .then(res => {

            })
        event.preventDefault()
    }
    return (
        <CommonPage title={'Review'}>
            <Box>
                <form onSubmit={handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <TextField
                        sx={{ width: '40%' }}
                        id="outlined-basic"
                        variant="outlined"
                        value={user?.displayName}

                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlineOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        sx={{ width: '40%', my: 1 }}
                        id="outlined-basic"
                        variant="outlined"
                        value={user?.email}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        sx={{ width: '40%', my: 1 }}
                        id="outlined-basic"
                        variant="outlined"
                        value={user?.photoURL}

                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <ImageOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        sx={{ width: '40%', my: 1 }}
                        id="outlined-select-currency"
                        select

                        onChange={handleRatingField}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <StarBorderOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    >
                        {currencies.map((option) => (
                            <MenuItem value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        onChange={handleReviewField}
                        required
                        placeholder="write your opinion"
                        style={{ width: '40%', padding: '10px 20px' }}
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

export default Review;