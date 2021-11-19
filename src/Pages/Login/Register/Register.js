import React, { useState } from 'react';
import login from '../../../images/login1.jpg'
import { Alert, Box, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Link, NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth()
    const history = useHistory()
    const [loginData, setLoginData] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        console.log(value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData)
    }
    const handleSubmit = e => {

        if (loginData.password !== loginData.confirmPassword) {
            alert('your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    return (
        <>
            <Box
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage: 'linear-gradient(90deg, #006266 30%, transparent 30% )'
                }}
            >
                <Container >
                    <Typography >
                        <Link to="/home" style={{ color: 'white', textDecoration: 'none', }}>
                            <Button color="inherit" style={{ fontFamily: 'monospace', fontSize: '20px' }}>
                                Home
                                <ExitToAppIcon />
                            </Button>
                        </Link>
                    </Typography>
                    <Grid container spacing={2}
                        sx={{ py: 10, px: 6 }}
                        style={{ marginTop: '50px', backgroundColor: 'white' }}>
                        <Grid item xs={12} md={6}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: `linear-gradient(rgba(14, 70, 40, 0.527),rgba(14, 70, 40, 0.527) ),url(${login})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                            }}>
                            <Typography
                                style={{
                                    width: '100%',
                                    color: 'white',
                                    fontSize: '30px',
                                    textAlign: 'center',
                                    fontFamily: 'monospace'
                                }}>
                                Welcome to aparttvilla
                            </Typography>
                            <Typography
                                style={{
                                    width: '100%',
                                    color: 'white',
                                    fontSize: '20px',
                                    textAlign: 'center',
                                    textTransform: 'uppercase',
                                    fontWeight: 'bolder',
                                    fontFamily: 'monospace'
                                }}
                            >
                                create your account
                            </Typography>
                        </Grid>
                        <Grid item sx={{ textAlign: 'center' }} xs={12} md={6}>
                            {isLoading && <CircularProgress />}
                            <Typography variant="body1" gutterBottom style={{ fontSize: '30px', fontFamily: 'monospace', fontWeight: 'bolder' }}>
                                Register
                            </Typography>

                            <form onSubmit={handleSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Name"
                                    name="name"
                                    type="text"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Email"
                                    name="email"
                                    type="email"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />

                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Retype Your Password"
                                    type="password"
                                    name="confirmPassword"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <Button
                                    style={{ backgroundColor: '#006266' }}
                                    sx={{ width: '75%', m: 1 }}
                                    variant="contained"
                                    type="submit"
                                >
                                    Register
                                </Button>
                                <NavLink to="login" style={{ textDecoration: 'none' }}>
                                    <Button
                                        style={{ color: '#006266' }}
                                        variant="text"
                                    >
                                        Already registered? please login
                                    </Button>
                                </NavLink>
                                {
                                    user?.email && <Alert severity="success">User created successfully</Alert>
                                }
                                {authError && <Alert severity="error">{authError}</Alert>}
                            </form>


                        </Grid>


                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Register;