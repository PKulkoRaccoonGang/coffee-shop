import {
  Button, Container, FormControl, TextField,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import './SingUp.scss';

export default function SingUp() {
  return (
    <Container maxWidth="lg" className="text-center">
      <div className="sing-up">
        <Typography className="sing-up-title" variant="h3" component="h3">
          Sign up
        </Typography>
        <FormControl className="sing-up-form">
          <TextField className="sing-up-form-fiend" label="Email" variant="outlined" />
          <TextField className="sing-up-form-fiend" label="Password" variant="outlined" />
          <TextField className="sing-up-form-fiend" label="Password" variant="outlined" />
          <Button variant="contained" size="large">
            Submit
          </Button>
        </FormControl>
        <Link className="sing-up-form-link" to="/sign-in">Already have an account? Sign in</Link>
      </div>
    </Container>
  );
}
