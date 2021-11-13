import { Card, CardContent, CardMedia, Container, Fab, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../images/login.jpg'
import AddIcon from '@mui/icons-material/Add';
const PropertiesInHome = () => {

    return (
        <Container sx={{ my: 10 }} style={{ display: 'flex' }}>
            <Card sx={{display: 'flex', alignItems: 'center',  width: 600, height: 300 }} style={{position:'relative', zIndex:1}}>
                <Box sx={{display: 'flex', alignItems: 'center',}}>
                    <CardMedia
                        component="img"
                        sx={{ width: 300 }}
                        image={img}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                        </CardContent>
                    </Box>
                </Box>
                <Box style={{position:'absolute',}}>
                    <Fab color="primary" aria-label="add" >
                        <AddIcon />
                    </Fab>
                </Box>

            </Card>
        </Container>
    );
};

export default PropertiesInHome;