import {
  Alert, Button, Container, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function EmptyBasket() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className="basket animate__animated animate__fadeInUp">
      <Container maxWidth="xl">
        <Alert severity="warning">
          <Typography>
            Unfortunately, your basket is empty...
          </Typography>
          <Button className="core-button" onClick={goBack}>
            Back to home
          </Button>
        </Alert>
      </Container>
    </section>
  );
}
