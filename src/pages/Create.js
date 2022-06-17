import { AppBar, Typography, Toolbar } from '@material-ui/core'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

export default function Create() {
  return (
    <div>
      <Typography variant="h2">Potato Pals</Typography>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography> Potato Pals </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </Box>
    </div>
  )
}
