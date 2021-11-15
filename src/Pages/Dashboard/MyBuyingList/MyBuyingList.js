import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import CommonPage from '../../SharedPage/CommonPage/CommonPage';
import DeleteIcon from '@mui/icons-material/Delete';



const MyBuyingList = () => {

    const { user } = useAuth()
    const [userOrder, setUserOrder] = useState([])
    useEffect(() => {

        axios.get(`https://lit-anchorage-11150.herokuapp.com/buyingList/${user?.email}`)
            .then(res => {
                setUserOrder(res.data)
            })

    }, [user.email])

    const handleDelete = (id) => {
        const proceed = window.confirm("are you sure you want to delete")
        if (proceed) {
            axios.delete(`https://lit-anchorage-11150.herokuapp.com/buyingList/${id}`)
                .then(res => {

                    if (res.data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUser = userOrder.filter(user => user._id !== id)
                        setUserOrder(remainingUser)
                    }
                })
        }
    }
    return (
        <CommonPage title={'My Buying List'}>
            <Box>
                <TableContainer component={Paper} sx={{ mt: 10 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Property Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Bed</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Bath</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Balcony</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>PropertySize</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userOrder.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell >{row.location}</TableCell>
                                    <TableCell >{row.bedrooms}</TableCell>
                                    <TableCell >{row.baths}</TableCell>
                                    <TableCell >{row.balcony}</TableCell>
                                    <TableCell >{row.propertySize}</TableCell>
                                    <TableCell >{row.price}</TableCell>
                                    <TableCell 
                                    style={
                                        row.status === "Approved" ?
                                        { color: '#27ae60', fontWeight: 'bold'}
                                        :
                                        { color: '#f39c12', fontWeight: 'bold' }
                                    } 
                                    >
                                        {
                                            row.status === "Approved" ? "approved" : "pending.."
                                        }
                                    </TableCell>
                                    <TableCell >

                                        <DeleteIcon
                                            style={{ color: '#006266', cursor: 'pointer' }}
                                            onClick={() => {
                                                handleDelete(row._id)
                                            }}
                                        />

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

export default MyBuyingList;