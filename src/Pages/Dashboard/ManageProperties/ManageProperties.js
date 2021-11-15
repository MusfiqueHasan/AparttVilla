import React, { useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Modal, TextField } from '@mui/material';
import useProperties from '../../../hooks/useProperties';
import CommonPage from '../../SharedPage/CommonPage/CommonPage';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 5,
    border: '1px solid white'
};

const ManageProperties = () => {
    const [propertyInfo, setPropertyInfo] = useProperties(false)
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [property, setProperty] = useState({})
    const [updateInfo, setUpdateInfo] = useState({})

    const handleOpen = (id) => {
        console.log(id)
        axios.get(`https://lit-anchorage-11150.herokuapp.com/properties/${id}`)
            .then(res => {
                setUpdateInfo(res.data)
                setProperty(res.data)
                setOpen(true)
            })
    };
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...updateInfo }
        newInfo[field] = value;
        setUpdateInfo(newInfo)
    }

    const handleUpdate = (e) => {
        console.log(updateInfo)
        axios.put(`https://lit-anchorage-11150.herokuapp.com/properties/${property._id}`, updateInfo)
            .then(res => { })
        e.preventDefault()
    }

    const handleDelete = (id) => {
        const proceed = window.confirm("are you sure you want to delete")
        if (proceed) {
            axios.delete(`https://lit-anchorage-11150.herokuapp.com/properties/${id}`)
                .then(res => {

                    if (res.data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUser = propertyInfo.filter(user => user._id !== id)
                        setPropertyInfo(remainingUser)
                    }
                })
        }
    }
    return (
        <CommonPage title={'Manage Property Details'}>
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
                                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {propertyInfo.map((row) => (
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
                                    <TableCell >
                                        <ModeEditOutlineOutlinedIcon
                                            style={{ color: '#006266', marginRight: '10px', cursor: 'pointer' }} onClick={() => {
                                                handleOpen(row._id)
                                            }} />

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
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form onSubmit={handleUpdate}>

                            <TextField
                                name="name"
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                label="name"
                                onBlur={handleOnBlur}
                                defaultValue={property.name}

                                size="small"
                            />
                            <TextField

                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="image"
                                label="image"
                                onBlur={handleOnBlur}
                                defaultValue={property.image}
                                size="small"
                            />
                            <TextField

                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="location"
                                label="location"
                                onBlur={handleOnBlur}
                                defaultValue={property.location}
                                size="small"
                            />
                            <TextField

                                sx={{ width: '44%', m: 1 }}
                                id="outlined-size-small"
                                name="division"
                                label="division"
                                onBlur={handleOnBlur}
                                defaultValue={property.division}
                                size="small"
                            />
                            <TextField

                                sx={{ width: '43%', m: 1 }}
                                id="outlined-size-small"
                                name="propertySize"
                                label="propertySize"
                                onBlur={handleOnBlur}
                                defaultValue={property.propertySize}
                                size="small"
                            />
                            <TextField

                                sx={{ width: '44%', m: 1 }}
                                id="outlined-size-small"
                                name="bedrooms"
                                label="bedrooms"
                                onBlur={handleOnBlur}
                                defaultValue={property.bedrooms}
                                size="small"
                            />
                            <TextField

                                sx={{ width: '43%', m: 1 }}
                                id="outlined-size-small"
                                name="baths"
                                label="baths"
                                onBlur={handleOnBlur}
                                defaultValue={property.baths}
                                size="small"
                            />
                            <TextField

                                sx={{ width: '44%', m: 1 }}
                                id="outlined-size-small"
                                name="balcony"
                                label="balcony"
                                onBlur={handleOnBlur}
                                defaultValue={property.balcony}
                                size="small"
                            />
                            <TextField

                                sx={{ width: '43%', m: 1 }}
                                id="outlined-size-small"
                                name="price"
                                label="price"
                                onBlur={handleOnBlur}
                                defaultValue={property.price}
                                size="small"
                            />

                            <Button
                                type="submit"
                                style={{ background: '#006266', color: 'white' }}
                                sx={{ px: 3, py: 1, ml: 1 }}
                            >
                                update
                            </Button>
                        </form>
                    </Box>
                </Modal>
            </Box>
        </CommonPage>
    );
};

export default ManageProperties;