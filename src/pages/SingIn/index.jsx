import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import {
  Button, Container, FormControl, TextField,
} from '@mui/material';
import Typography from '@mui/material/Typography';

import './SingIn.scss';
import { fetchAuth, selectorIsAuth } from '../../redux/slices/auth';

export default function SingIn() {
  const isAuth = useSelector(selectorIsAuth);
  const dispatch = useDispatch();
  const {
    // eslint-disable-next-line no-unused-vars
    register, handleSubmit, setError, formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: 'peterkulko@gmail.com',
      password: '123456',
    },
    mode: 'all',
  });

  const onSubmit = (values) => {
    console.log('======== values =======', values);
    dispatch(fetchAuth(values));
  };
  console.log('isAuth', isAuth);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxWidth="lg" className="text-center">
      <div className="sign-in">
        <Typography className="sign-in-title" variant="h3" component="h3">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl className="sign-in-form">
            <TextField
              className="sign-in-form-fiend"
              label="Email"
              type="email"
              error={Boolean(errors.email?.message)}
              variant="outlined"
              helperText={errors.email?.message}
                /* eslint-disable-next-line react/jsx-props-no-spreading */
              {...register('email', { required: 'Enter your email' })}
            />
            <TextField
              className="sign-in-form-fiend"
              label="Password"
              type="password"
              error={Boolean(errors.password?.message)}
              variant="outlined"
              helperText={errors.password?.message}
                /* eslint-disable-next-line react/jsx-props-no-spreading */
              {...register('password', { required: 'Enter your password' })}
            />
            <Button variant="contained" size="large" type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
        <Link className="sign-in-form-link" to="/sign-up">Already have an account? Sign up</Link>
      </div>
    </Container>
  );
}
