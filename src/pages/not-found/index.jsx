import { Alert, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container className="not-found" maxWidth="lg">
      <Alert className="not-found-alert" severity="warning">
        <Typography className="not-found-alert-title">
          Sorry... This page not found!
        </Typography>
        <Link className="core-button" to="/">
          Back to home
        </Link>
      </Alert>
    </Container>
  );
}
