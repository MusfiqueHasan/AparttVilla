import { AppBar, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Tooltip, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 300;

const Dashboard = (props) => {
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
                 style={{  backgroundColor:'#dfe6e9',borderRadius:'10px' }}
                 sx={{mx:2, py:2,}}
                 >
                    <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
                        <Tooltip title="profile" placement="bottom">
                            <Box style={{ display: 'flex', alignItems: 'center', }}>
                                {user.photoURL ?
                                    <img src={user.photoURL} alt="" width={50} style={{ borderRadius: '10px', marginLeft: '20px' }} />
                                    : <AccountCircleIcon className="rounded-full w-14 h-14" />
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

            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'black', marginTop: '100px' }}>
                <Link to="/appointment"><Button color="inherit">All properties</Button></Link>
                <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
                {
                    admin && <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
                        <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                        <Link to={`${url}/addDoctor`}><Button color="inherit">Add Doctor</Button></Link>
                    </Box>

                }
            </Box>
            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}

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
                    backgroundColor: '#006266', height: '15vh'
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
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
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
                <Switch>
                    <Route exact path={path}>
                        <MakeAdmin />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>

                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
};

export default Dashboard;