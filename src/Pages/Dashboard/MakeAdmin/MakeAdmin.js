import AccountCircle from '@mui/icons-material/AccountCircle';
import { Alert, Button, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import CommonPage from '../../SharedPage/CommonPage/CommonPage';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [allEmail, setAllEmail] = useState([])
    const [success, setSuccess] = useState(false)
    const { token, user } = useAuth()
    const handleAdminEmail = (e) => {
        setEmail(e.target.value)
        e.preventDefault()
    }

    const handleAdminSubmit = (e) => {
        axios.put('https://lit-anchorage-11150.herokuapp.com/users/admin', { email }, { headers: { 'authorization': `Bearer ${token}` } })
            .then(res => {
                if (res.data.modifiedCount) {
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }

    useEffect(() => {
        axios.get('https://lit-anchorage-11150.herokuapp.com/users')
            .then(res => {
                setAllEmail(res.data)
            })
    }, [])

    return (
        <CommonPage title={'Make Admin'}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '60%' }}>
                    <Typography sx={{ my: 5 }}>
                        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Admin:</span>
                        {user.email}
                    </Typography>
                    <form onSubmit={handleAdminSubmit}>
                        <TextField
                            sx={{ width: '80%' }}
                            onBlur={handleAdminEmail}
                            label="email"
                            type="email"
                            variant="standard"
                            id="outlined-select-currency"
                            select
                            // value={user.email}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        >
                            {allEmail.map((option) => (
                                <MenuItem key={option._id} value={option.email}>
                                    {option.email}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button type="submit" variant="contained" style={{ background: '#006266' }}>Make Admin</Button>
                    </form>
                    {success && <Alert severity="success">Made Admin Successfully</Alert>}
                </Box>
            </Box>
        </CommonPage>
    );
};

export default MakeAdmin