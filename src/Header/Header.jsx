import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, Menu, MenuItem, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="h5" className={classes.title}>
            Bandung Unlocked
          </Typography>
          <Typography variant="subtitle2" className={classes.subtitle}>
            mau kemana ya hari ini?
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" className={classes.searchBox}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Box>
        <Box display="flex" alignItems="center" marginLeft="auto">
          <IconButton edge="end" color="inherit" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Gacha Place</MenuItem>
            <MenuItem onClick={handleMenuClose}>To Do List</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
