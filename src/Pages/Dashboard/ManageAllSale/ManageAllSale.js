import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, TextField } from '@mui/material';
import useProperties from '../../../hooks/useProperties';
import CommonPage from '../../SharedPage/CommonPage/CommonPage';
import axios from 'axios';
import { useForm } from "react-hook-form";


const ManageAllSale = () => {
    const [allSales, setAllSales] = useState([])
    const [status, setStatus] = useState('on going')

    useEffect(() => {
        axios.get('https://lit-anchorage-11150.herokuapp.com/buyingList')
            .then(res => {
                setAllSales(res.data)
            })
    }, [])

    const handleChange = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value)
    }
    return (
        <CommonPage title={'Manage All Sales'}>
            <Box>
                <TableContainer component={Paper} sx={{ mt: 10 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Customer</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Customer Address </TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Customer Phone </TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Property Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allSales.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell> {row.userEmail}  </TableCell>
                                    <TableCell> {row.address}  </TableCell>
                                    <TableCell> {row.phoneNumber}  </TableCell>
                                    <TableCell> {row.name}  </TableCell>
                                    <TableCell >{row.location}</TableCell>
                                    <TableCell >{row.price}</TableCell>
                                    <TableCell >
                                        <TextField
                                            sx={{ width: '100%' }}
                                            id="outlined-select-currency"
                                            variant="standard"
                                            select
                                            defaultValue={status}
                                            onChange={handleChange}

                                        >
                                            {['on going', 'pending', 'done'].map((option) => (
                                                <MenuItem value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </CommonPage>
    );
};

export default ManageAllSale;