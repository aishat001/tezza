import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  CalendarMonthOutlined,
  DashboardOutlined,
  MessageOutlined,
  PaymentsOutlined,
  PeopleOutline,
  ReportOutlined,
  TaskOutlined,
} from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';

const menuOptions = [
  {
    name: 'Workspace',
    icon: <DashboardOutlined />,
    url: '/workspace',
    id: 1,
  },
  {
    name: 'Clients',
    icon: <PeopleOutline />,
    url: '/clients',
    id: 2,
  },
  {
    name: 'Schedule Appointment',
    icon: <CalendarMonthOutlined />,
    url: '/schedule',
    id: 3,
  },
  {
    name: 'Payment',
    icon: <PaymentsOutlined />,
    url: '/payment',
    id: 4,
  },
  {
    name: 'Task',
    icon: <TaskOutlined />,
    url: '/task',
    id: 5,
  },
  {
    name: 'Message',
    icon: <MessageOutlined />,
    url: '/message',
    id: 6,
  },
  {
    name: 'Reports',
    icon: <ReportOutlined />,
    url: '/reports',
    id: 7,
  },
];

const DrawerOptions = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const location = useLocation();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    // Loop through the menu options to find a match with the current location pathname.
    for (const option of menuOptions) {
      if (location.pathname === option.url) {
        setSelectedIndex(option.id);
        break; // Exit the loop once a match is found.
      }
    }
  }, [location.pathname]);

  return (
    <div className='drawer'>
      <Toolbar className='logo mt-5 flex justify-center p-0 border-0'>
        <img src='/logo.png' alt='logo' />
      </Toolbar>
      <List
        className='text-black'
        sx={{
          mt: { xs: '1rem', sm: '1rem' },
          '& .Mui-selected': {
            '& .dashImg': { display: { xs: 'block !important', sm: 'none' } },
            '& .dashImg2': { display: { xs: 'none', sm: 'none' } },
          },
        }}
      >
        {menuOptions.map((text) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton
              selected={selectedIndex === text.id}
              onClick={(event) => handleListItemClick(event, text.id)}
              sx={{
                mt: 2,
                fontWeight: '500',
                borderLeft: '5px solid transparent',
              }}
            >
              <Link to={`${text.url}`} className='flex items-center'>
                <ListItemIcon>
                  {text.icon}
                  {/* <img src={text.icon} alt={text.name} className='w-7 h-7 dashImg' /> */}
                </ListItemIcon>
                <ListItemText primary={text.name} className='w-[max-content]' />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DrawerOptions;
