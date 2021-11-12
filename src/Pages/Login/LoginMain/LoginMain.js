import React, { useState } from 'react';
import login from '../../../images/login.jpg'
import { Alert, Box, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import dhakaImg from '../../../images/dhaka.jfif'

const LoginMain = () => {
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth()
    const [loginData, setLoginData] = useState({})

    const location = useLocation()
    const history = useHistory()

    const handleOnchange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <>

            <Box style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                backgroundImage: 'linear-gradient(90deg, #006266 30%, transparent 30% )'
            }}>

                <Container>
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
                        style={{ marginTop: '50px', backgroundColor: 'white' }}
                    >
                        <Grid item xs={12} md={6}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: `linear-gradient(rgba(14, 70, 40, 0.527),rgba(14, 70, 40, 0.527) ),url(${dhakaImg})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                            }}
                        >
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
                                login your account
                            </Typography>
                        </Grid>
                        <Grid item sx={{ textAlign: 'center' }} xs={12} md={6}>
                            {isLoading && <CircularProgress />}
                            <Typography variant="body1" gutterBottom style={{ fontSize: '30px', fontFamily: 'monospace', fontWeight: 'bolder' }}>
                                Login
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Email"
                                    name="email"
                                    onBlur={handleOnchange}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnchange}
                                    variant="standard"
                                />
                                <Button
                                    style={{ backgroundColor: '#006266' }}
                                    sx={{ width: '75%', m: 1 }}
                                    variant="contained"
                                    type="submit"
                                >
                                    Login
                                </Button>
                                <NavLink to="register" style={{ textDecoration: 'none' }}>
                                    <Button
                                        style={{ color: '#006266' }}
                                        variant="text"
                                    >
                                        new user? please register
                                    </Button>
                                </NavLink>

                                {user?.email && <Alert severity="success">Logged in successfully</Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>}
                            </form>
                            <p>--------------------------------------</p>
                            <Button variant="contained" onClick={handleGoogleSignIn} style={{ backgroundColor: '#006266' }}>
                                Google Sign In
                            </Button>

                        </Grid>


                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default LoginMain;

