import { Box, Typography } from '@mui/material';
import React from 'react';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const CommonPage = (props) => {
    return (
        <Box>
            <Typography variant="h6" noWrap component="div" style={{}} sx={{ my: 5, textAlign: 'center', fontFamily: 'fantasy', fontSize: '30px', }}>
                <span style={{ borderBottom: ' 4px solid #006266' }}>
                    {props.title}

                </span>

            </Typography>
            {props.children}
        </Box>
    );
};

export default CommonPage;