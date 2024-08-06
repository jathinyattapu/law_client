import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from '../../Home'
import './LawyerDashboard.css';
import LawyerMenu from './LawyerMenu';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
//import Settings from '@mui/icons-material/Settings';
import ArrowRight from '@mui/icons-material/ArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AdbIcon from '@mui/icons-material/Adb';
import LawyerAccountMenu from './LawyerAccountMenu';
import { Tooltip } from '@mui/material';

const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0, //`calc(${theme.spacing(7)} + 1px)`,
  // [theme.breakpoints.up('sm')]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`,
  // },

  //-----To Visible Icons Please Remove above comments or else keep Width:0 To Complete hidden.----
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function LawyerDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            className='NavbarHover' onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
              //Below CSS will applys anime for menu icon..
                      '&:hover, &:focus': {  //removes pre-hover props                     
                      '& svg:first-of-type': {
                        transform: 'scale(1.25)', 
                      }
                    },
            }}
          >
            <MenuIcon />
          </IconButton>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            // component={RouteLink} // Assuming RouteLink is imported from react-router-dom
            // to="#app-bar-with-responsive-menu" // Replace with actual route path
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
              <LawyerAccountMenu />
              <Tooltip title="Log Out">
              <IconButton
                  size="large"
                  sx={{
                    '& svg': {
                      color: 'rgba(255,255,255,0.8)',
                      transition: '0.2s',
                      transform: 'translateX(0) rotate(0)',
                    },
                    '&:hover, &:focus': {
                      bgcolor: 'unset',
                      '& svg:first-of-type': {
                        transform: 'translateX(-5px)',
                      },
                      '& svg:last-of-type': {
                        right: 0,
                        opacity: 1,
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      height: '80%',
                      display: 'block',
                      left: 0,
                      width: '2px',
                      bgcolor: 'divider',
                    },
                  }}
                >
                  <LogoutIcon />
                  <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
              </IconButton>
              </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer className='Navbar-Hide' variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton className='navhover' onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
{/* Side Menu Bar */}
                  <LawyerMenu />
      </Drawer>

{/*---------- All the Components can be displayed in the Below Box(Div) Container--------  */}

      <Box className='renderarea' component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route path="client/add" element={<Home/>} />
            <Route path="dashboard" element={<Home/>} />
          </Routes>
          <Divider/>
          {/* Footer */}
            <Box sx={{width: '100%', textAlign: 'center',my:2, height:'80vh' }} className='Footer'>
            <Typography variant="button" color="textSecondary">
            <Link to="/legal-research" underline="none" color={'inherit'} p={1}>Legal Research</Link>
            <Link to="/knowledge-base" underline="none" color={'inherit'} p={1}>Knowledge Base</Link>
            <Link to="/settings" underline="none" color={'inherit'} p={1}>Settings</Link>
            </Typography>
            <br></br>
            <Typography variant="overline" color="textprimary">
            Copyright {new Date().getFullYear()} © LMS. All Rights Reserved. 
            
            <Link href="privacypolicy" underline="hover">Privacy Policy </Link>/ <Link href="termsandconditions" underline="hover">Terms & Conditions</Link>.
            </Typography>
          </Box> 
          {/* <Footer /> */}
      </Box>
    </Box>
</Router>
  );
}