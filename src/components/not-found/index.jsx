import PropTypes from 'prop-types';
import {
  Alert, Button, Container, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFound({ message }) {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Container className="not-found animate__animated animate__fadeInUp" maxWidth="lg">
      <Alert className="not-found-alert" severity="warning">
        <Typography className="not-found-alert-title">
          {message}
        </Typography>
        <Button className="core-button" onClick={goBack}>
          Back to home
        </Button>
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
