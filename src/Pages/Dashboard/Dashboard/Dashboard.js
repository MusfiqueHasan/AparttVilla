import { AppBar, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Tooltip, Typography, useMediaQuery } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import AdminRoute from '../AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import logo from '../../../images/logo.webp'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAllSale from '../ManageAllSale/ManageAllSale';
import ManageProperties from '../ManageProperties/ManageProperties';
import Payment from '../Payment/Payment';
import MyBuyingList from '../MyBuyingList/MyBuyingList';
import Review from '../Review/Review';
import { makeStyles } from '@mui/styles'
import AddProperties from '../AddProperties/AddProperties';
import AddDivision from '../AddDivision/AddDivision';





const drawerWidth = 300;
const useStyles = makeStyles({
    allLink: {
        textDecoration: 'none',
        color: '#006266'

    },
})

const Dashboard = (props) => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(max-width:600px)')
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const { admin, user, logOut } = useAuth()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box>
            <Toolbar />
            <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Link to="/home" >
                    <img src={logo} alt="" width={150} />
                </Link>

            </Box>
            {
                user?.email &&
                <Box
                    style={{ backgroundColor: '#dfe6e9', borderRadius: '10px' }}
                    sx={{ mx: 2, py: 2, }}
                >
                    <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>
                        <Tooltip title="profile" placement="bottom">
                            <Box style={{ display: 'flex', alignItems: 'center', }}>
                                {user.photoURL ?
                                    <img src={user.photoURL} alt="" width={50} style={{ borderRadius: '10px', marginLeft: '20px' }} />
                                    : <AccountBoxOutlinedIcon style={{ marginLeft: '20px', width: '50px', height: '50px' }} />
                                }
                                <Box>
                                    <Typography style={{ fontSize: '14px', marginLeft: '10px' }} >
                                        {user.displayName}
                                    </Typography>
                                    <Typography style={{ fontSize: '11px', marginLeft: '10px' }} >
                                        {user.email}
                                    </Typography>
                                </Box>
                            </Box>
                        </Tooltip>

                    </NavLink>
                </Box>

            }

            <Box style={{ height: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: '50px' }}>

                {user.email && !admin && <Box style={{ display: 'flex', flexDirection: 'column', }}>

                    <Link to={`${url}/payment`} className={classes.allLink}>
                        <Button color="inherit" style={{ textTransform: 'none', fontWeight: 'bold' }}>
                            <PaymentOutlinedIcon sx={{ mr: 1 }} />
                            <span> Payment</span>
                        </Button>
                    </Link>
                    <Link to={`${url}`} className={classes.allLink}>
                        <Button color="inherit" style={{ textTransform: 'none', fontWeight: 'bold' }}>
                            <BusinessCenterOutlinedIcon sx={{ mr: 1, my: 2 }} />
                            <span> My Buying List</span>
                        </Button>
                    </Link>
                    <Link to={`${url}/review`} className={classes.allLink}>
                        <Button color="inherit" style={{ textTransform: 'none', fontWeight: 'bold' }}>
                            <RateReviewOutlinedIcon sx={{ mr: 1 }} />
                            <span>Review</span>
                        </Button>
                    </Link>
                </Box>}
                {
                    admin && <Box style={{ display: 'flex', flexDirection: 'column', }}>
                        <Link to={`${url}`} className={classes.allLink}>
                            <Button color="inherit" style={{ textTransform: 'none', fontWeight: 'bold' }}>
                                <ListAltIcon sx={{ m: 1 }} />
                                Manage All Sales
                            </Button>
                        </Link>
                        <Link to={`${url}/addProperties`} className={classes.allLink}>
                            <Button color="inherit" style={{ textTransform: 'none', fontWeight: 'bold' }}>
                                <AddCircleOutlineIcon sx={{ m: 1 }} />
                                Add Property
                            </Button>
                        </Link>
                        <Link to={`${url}/adddivision`} className={classes.allLink}>
                            <Button color="inherit" style={{ textTransform: 'none', fontWeight: 'bold' }}>
                                <AddCircleOutlineIcon sx={{ m: 1 }} />
                                Add Division
                            </Button>
                        </Link>
                        <Link to={`${url}/makeAdmin`} className={classes.allLink}>
                            <Button color="inherit" style={{ textTransform: 'none', fontWeight: 'bold' }}>
                                <PersonAddAltIcon sx={{ m: 1 }} />
                                Make Admin
                            </Button>
                        </Link>
                        <Link to={`${url}/manageProperties`} className={classes.allLink}>
                            <Button color="inherit" style={{ textTransform: 'none', fontWeight: 'bold' }}>
                                <GridViewIcon sx={{ m: 1 }}/>
                                Manage Properties
                            </Button>
                        </Link>
                    </Box>

                }
                <Button onClick={logOut}
                    sx={{ px: 3 }}
                    style={{ color: 'black', fontFamily: 'initial' }}
                >
                    <LogoutIcon sx={{ mr: 1 }} />
                    logout
                </Button>
            </Box>

        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex', }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{
                    backgroundColor: '#079992', height: '10vh'
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <AdminPanelSettingsIcon sx={{ mr: 1 }} />
                    {admin ? 'Admin Panel' : 'User Dashboard'}
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {admin &&
                    <Switch>
                        <AdminRoute exact path={`${path}`}>
                            <ManageAllSale />
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/addProperties`}>
                            <AddProperties />
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/addDivision`}>
                            <AddDivision />
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/manageProperties`}>
                            <ManageProperties />
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/manageProperties/:id`}>
                            <ManageProperties />
                        </AdminRoute>
                    </Switch>
                }
                {user.email && !admin &&
                    <Switch>
                        <Route exact path={`${path}/payment`}>
                            <Payment />
                        </Route>
                        <Route exact path={`${path}`}>
                            <MyBuyingList />
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Review />
                        </Route>
                    </Switch>
                }
            </Box>
        </Box>
    );
};

export default Dashboard;