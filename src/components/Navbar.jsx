import styled from '@emotion/styled'
import { AppBar,Avatar,Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
}))

const Icons = styled(Box)(({ theme }) => ({
  display:"none",
  alignItems: "center",
  gap:"20px",
}))

const Userbox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6'
        sx={{display: {xs: "none", sm: "block"}}}>
          Navbar
        </Typography>
        <PetsIcon sx={{display: {xs: "block", sm: "none"}}}/>
        <Search  >
          <InputBase placeholder='Search...' borderRadius={2}/>
        </Search>
        <Icons sx={{display: {xs: "none", sm: "flex"}}}>
          <Badge badgeContent={4} color="error">
            <MailIcon color="inherit" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsRoundedIcon />
          </Badge>
          <Avatar onClick={e=>{setOpen(true)}}/>
        </Icons>
        <Userbox 
          sx={{display: {xs: "flex", sm: "none"}}} 
          onClick={e=>{setOpen(true)}}
        >
          <Avatar/>
          <Typography variant='span'>Rayen</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
