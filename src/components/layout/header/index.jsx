import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar, Box, Toolbar, Container, Tooltip, Badge,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

import { selectorIsAuth } from '../../../redux/auth/selectors';
import { logout } from '../../../redux/auth/slice';
import { fetchBasket } from '../../../redux/basket/thunks';
import { storage } from '../../../utils';
import Logo from '../../logo';

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectorIsAuth);

  useEffect(() => {
    dispatch(fetchBasket());
  }, []);

  const onLogout = () => {
    dispatch(logout());
    storage.remove('token');
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
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Link className="core-button header-btn profile-btn" to="/profile">
                  Profile
                </Link>
              </Box>
              <Box>
                {isAuth && (
                  <Link className="core-button header-btn" to="/" onClick={onLogout}>
                    Logout
                  </Link>
                )}
                <Tooltip title="Basket">
                  <Link className="header-btn-basket" to="/basket">
                    <Badge color="primary">
                      <AddShoppingCartIcon color="action" />
                    </Badge>
                  </Link>
                </Tooltip>
              </Box>
            </>
          ) : (
            <Box>
              <Link
                className="core-button header-btn"
                to="/sign-in"
              >
                Sign in
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
