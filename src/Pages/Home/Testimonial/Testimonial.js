import React, { useEffect, useState } from 'react';
import { Container, Rating, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Slider from "react-slick";
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
const Testimonial = () => {

    const [reviewInfo, setReviewInfo] = useState([])
    useEffect(() => {

        axios.get('http://localhost:5000/reviews')
            .then(res => {
                setReviewInfo(res.data)
            })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const { user, logOut } = useAuth()
    return (
        <Box style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
                    <Box>
                        <Typography style={{ textTransform: 'uppercase', color: '#006266', fontWeight: 'bold', fontSize: '20px' }}> Review</Typography>
                        <Typography sx={{ fontSize: '50px', fontWeight: 'bold', fontFamily: 'fantasy' }}> What Our Client says</Typography>
                    </Box>
                    <FormatQuoteIcon sx={{ fontSize: '100px' }} style={{ color: 'gray' }} />
                </Box>
                <Slider {...settings}>

                    {reviewInfo.map(review => {

                        return (
                            <Container>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '300px', marginX: '100px' }}>
                                    <Typography sx={{ textAlign: 'center' }}>
                                        {review.review}
                                    </Typography>
                                    <Box sx={{ my: 2 }}>
                                        <img src={review.image } alt="" width={70} style={{ borderRadius: '50%', }} />
                                    </Box>
                                    <Typography>{review.name}</Typography>
                                    <Rating name="half-rating-read" defaultValue={review.rating} precision={0.5} readOnly />
                                </Box>
                            </Container>

                        )
                    })


                    }


                </Slider>

            </Container>
        </Box>
    );
};

export default Testimonial;