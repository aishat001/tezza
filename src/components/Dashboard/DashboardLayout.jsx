import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet, useNavigate } from 'react-router-dom';
import './dashboardLayout.scss';
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, Tooltip } from '@mui/material';
import {
  AccountCircleOutlined,
  Logout,
  KeyboardArrowDown,
  NotificationAddRounded,
  NotificationAdd,
  NotificationsOutlined,
} from '@mui/icons-material';
import DrawerOptions from './Drawer';
import { Link } from 'react-router-dom';
import StyledMenuComp from './StyledMenu';

const drawerWidth = 260;

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const openProfile = () => {
    navigate('/profile');
  };

  const handleChildData = (childData) => {
    setOpenCloseNotification(childData)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          pt: '0.5rem',
        }}
        className="bg-white shadow-none"
      >
        <Toolbar
          className="bg-white"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div className="flex items-center text-[#ddaa33]">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: { sm: 2 }, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <Tooltip title="notification" className="ml-auto">
            <Button
              size="small"
              sx={{  ml: 'auto' }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              className="relative"
            >
              <NotificationsOutlined className="text-[40px] text-black" />
              <span className="flex items-center justify-center absolute text-white bg-[red] rounded-[100%] h-[15px] w-[15px] top-1 right-4">
                2
              </span>
            </Button>
          </Tooltip>
          <div className="flex items-center gap-1 md:gap-2">
            <h2 className="text-black">Kelvin</h2>

            <Tooltip title="profile">
              <Button
                onClick={handleClick}
                size="small"
                sx={{ sm: { ml: 1 } }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar alt="profile" src="/profile.png" />
              </Button>
            </Tooltip>
            <StyledMenuComp
              open={open}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              logo1={AccountCircleOutlined}
              logo2={Logout}
              text1="Profile"
              text2="Logout"
            />
          </div>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar icons"
        className="bg-white border-0"
      >
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'white' },
          }}
        >
          <DrawerOptions open={handleChildData} />
        </Drawer>
        <Drawer
          className="border-0"
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'white', color: 'black', border: 0 },
          }}
          open
        >
  <DrawerOptions open={handleChildData} />
        </Drawer>
      </Box>

      <Box
        component="main"
        className="dashboard-main bg-[#fafafb]"
        sx={{
          p: { xs: 1, sm: 3 },
          width: { xs: '100vw', md: `calc(100% - ${drawerWidth}px)` },
          minHeight: '90vh',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
