import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const Sidebar = ({mode,setMode}) => {
  return (
    
    <Box 
      flex={1}
      p={2}
      sx={{display: {xs: "none", md: "block"}}}>
      <Box position={'fixed'}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton displayPadding>
          <ListItemIcon component="a" href="#home">
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
        <ListItemButton displayPadding>
          <ListItemIcon component="a" href="#Pages">
            <DescriptionIcon/>
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton displayPadding>
          <ListItemIcon component="a" href="#simple-list">
            <PeopleIcon/>
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton displayPadding>
          <ListItemIcon component="a" href="#Marketplace">
            <LocalGroceryStoreIcon/>
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
        <ListItemButton displayPadding>
          <ListItemIcon component="a" href="#simple-list">
            <PersonIcon/>
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton displayPadding>
          <ListItemIcon component="a" href="#Settings">
            <SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton displayPadding>
          <ListItemIcon component="a" href="#Profile">
            <AccountBoxIcon/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton displayPadding>
          <ListItemIcon component="a" href="#Profile">
            <DarkModeIcon/>
          </ListItemIcon>
          <Switch onChange={(e)=>{setMode(mode === "light" ? "dark" : "light")}}/>
        </ListItemButton>
      </List>
    </Box>
    </Box>
  )
}

export default Sidebar
