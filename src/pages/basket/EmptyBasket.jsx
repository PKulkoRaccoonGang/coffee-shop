import { Alert, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function EmptyBasket() {
  return (
    <section className="basket animate__animated animate__fadeInUp">
      <Container maxWidth="xl">
        <Alert severity="warning">
          <Typography>
            Unfortunately, your basket is empty...
          </Typography>
          <Link className="core-button" to="/">
            Back to home
          </Link>
        </Alert>
      </Container>
    </section>
  );
}
