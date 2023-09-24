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
  MenuItem, Badge,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

import { logout, selectorIsAuth } from '../../../redux/slices/auth';
import Logo from '../../Logo';
import { selectorBasket } from '../../../redux/slices/basket';

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectorIsAuth);
  const basketData = useSelector(selectorBasket);
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
    window.localStorage.removeItem('token');
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
            <Link className="header-link" to="/coffee-maker">
              Coffee maker
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
            <Box>
              <Button
                className="header-btn"
                as={Link}
                to="/sign-in"
                variant="contained"
                size="large"
              >
                Sign in
              </Button>
            </Box>
          )}
          <Box>
            <Link className="header-btn-basket" to="/basket">
              <Badge
                variant={basketData.length ? 'standard' : 'dot'}
                badgeContent={JSON.stringify(basketData.length)}
                color="primary"
              >
                <AddShoppingCartIcon color="action" />
              </Badge>
            </Link>
          </Box>
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
