import React from 'react';
import { Box, Button, Container, Grid, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import img from '../../images/footer.webp'
const Footer = () => {
    return (
        <Box style={{ background: '#006266', height: '400px', marginTop: '100px' }}>
            <Container sx={{ p: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>

                        <Typography>
                            <img src={img} alt="" />
                            <p style={{ color: '#f5f6fa', textAlign: 'justify' }}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ width: '100%', }}>
                            <TextField
                                sx={{ width: '80%', mx: 10 }}
                                placeholder='subscribe'
                                id="outlined-basic"
                                variant="outlined"
                                style={{ background: 'white' }}
                            />
                        </Typography>
                        <p style={{ color: '#f5f6fa', textAlign: 'center' }}>Copyright © Apartt Villa 2021. All rights reserved.</p>
                    </Grid>


                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;