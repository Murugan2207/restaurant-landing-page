import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { AiOutlineBars } from 'react-icons/ai';
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: 'Home',
      icon: <HomeIcon />,
    },
    {
      text: 'About',
      icon: <InfoIcon />,
    },
    {
      text: 'Contact',
      icon: <PhoneRoundedIcon />,
    },
    {
      text: 'Cart',
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      <div className='nav-logo-container' style={{color:"#fe9e0d",fontSize:'2rem',fontWeight:'900',textDecoration:''}}>
         VAANGA  SAAPDALAM
      </div>
      <div className='navbar-links-container'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
        <a href='#cart'>
          <BsCart2 className='navbar-cart-icon' />
        </a>
        <button className='primary-button'>Book Now</button>
      </div>
      <div className='navbar-menu-container'>
        <AiOutlineBars onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box
          sx={{
            width: 250,
          }}
          role='presentation'
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavBar;
