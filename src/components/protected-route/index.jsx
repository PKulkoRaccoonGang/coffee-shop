import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectorIsAuth } from '../../redux/auth/selectors';

export default function ProtectedRoute({ children }) {
  const isAuth = useSelector(selectorIsAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
