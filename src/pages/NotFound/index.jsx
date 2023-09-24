import {
  Alert, Button, Container, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container className="not-found" maxWidth="lg">
      <Alert className="not-found-alert" severity="warning">
        <Typography className="not-found-alert-title">
          Sorry... This page not found!
        </Typography>
        <Button
          className="not-found-alert-btn"
          as={Link}
          to="/"
          variant="contained"
          size="large"
        >
          Back to home
        </Button>
      </Alert>
    </Container>
  );
}
