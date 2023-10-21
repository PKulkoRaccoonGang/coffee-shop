import PropTypes from 'prop-types';
import { Alert, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound({ message }) {
  return (
    <Container className="not-found animate__animated animate__fadeInUp" maxWidth="lg">
      <Alert className="not-found-alert" severity="warning">
        <Typography className="not-found-alert-title">
          {message}
        </Typography>
        <Link className="core-button" to="/">
          Back to home
        </Link>
      </Alert>
    </Container>
  );
}

NotFound.defaultProps = {
  message: 'Sorry... This page not found!',
};

NotFound.propTypes = {
  message: PropTypes.string,
};
