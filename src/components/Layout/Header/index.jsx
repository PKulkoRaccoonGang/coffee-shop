import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Alert,
  Snackbar,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { logout, selectorIsAuth } from '../../../redux/slices/auth';
import Logo from '../../Logo';
import './Header.scss';

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectorIsAuth);
  const [showHeaderMenu, setShowHeaderMenu] = useState(null);

  const handleOpenUserMenu = (event) => {
    setShowHeaderMenu(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setShowHeaderMenu(null);
  };

  const onLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  return (
    <AppBar className="header" position="sticky" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Box className="header-links" sx={{ flexGrow: 1, display: 'flex' }}>
            <Link className="header-link" to="/products">
              All products
            </Link>
          </Box>
          {isAuth ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="user avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                anchorEl={showHeaderMenu}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(showHeaderMenu)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link className="header-link" to="/">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link className="header-link" to="/profile">
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={onLogout}>
                  <Link className="header-link" to="/">
                    Logout
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              className="header-btn"
              as={Link}
              to="/sign-in"
              variant="contained"
              size="large"
            >
              Sign in
            </Button>
          )}
        </Toolbar>
      </Container>
      <Snackbar
        open={isAuth}
        autoHideDuration={6000}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Congratulations! You have successfully logged in.
        </Alert>
      </Snackbar>
    </AppBar>
  );
}
export default Header;
