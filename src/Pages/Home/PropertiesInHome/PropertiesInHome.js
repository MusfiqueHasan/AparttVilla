import React from 'react';
import { Box } from '@mui/system';
import LoopIcon from '@mui/icons-material/Loop';
import { Button, Container, Divider, Grid, Typography } from '@mui/material';

import { NavLink, useHistory } from 'react-router-dom';
import Properties from '../../Properties/Properties';
import useProperties from '../../../hooks/useProperties';

const PropertiesInHome = () => {
    const [propertyInfo] = useProperties(true)
    const history = useHistory()
    const handleServiceDetails = (id) => {
        history.push(`/properties/${id}`)
    }
    return (
        <Box style={{ backgroundColor: '#f5f6fa' }}>
            <Container sx={{ py: 3 }}  >
                <Grid container spacing={2} sx={{}}>
                    {
                        propertyInfo.map(property => <Properties property={property} handleServiceDetails={handleServiceDetails}/>)

                    }


                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', pb: 5 }}>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/properties">
                        <Button color="inherit"
                            style={{ color: 'white', backgroundColor: '#218c74', fontFamily: 'serif' }}
                            sx={{ px: 3 }}
                        >
                            <LoopIcon sx={{ mr: 1 }} />
                            See all featured Properties
                        </Button>
                    </NavLink>
                </Box>
            </Container>
        </Box>
    );
};

export default PropertiesInHome;