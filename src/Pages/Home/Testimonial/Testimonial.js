import React from 'react';
import { Container, Rating, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Slider from "react-slick";
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';
const Testimonial = () => {
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
                    <Container >
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '300px', marginX: '100px' }}>
                            <Typography sx={{ textAlign: 'center' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda autem illum molestias quidem ex ducimus dolores error dolorem accusamus perspiciatis, ea suscipit iusto doloribus.
                            </Typography>
                            <Box sx={{ my: 2 }}>
                                <img src={user.photoURL} alt="" width={70} style={{ borderRadius: '50%', }} />
                            </Box>
                            <Typography>Musfique Hasan</Typography>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        </Box>
                    </Container>

                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </Container>
        </Box>
    );
};

export default Testimonial;