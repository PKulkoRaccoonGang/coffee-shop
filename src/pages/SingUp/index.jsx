import { useState } from 'react';
import {
  Button, Container, FormControl, TextField,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import AlertNotification from '../../components/AlertNotification';
import { fetchRegister, selectorIsAuth } from '../../redux/slices/auth';

export default function SingUp() {
  const [singUpError, setSingUpError] = useState(false);
  const isAuth = useSelector(selectorIsAuth);
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return setSingUpError(true);
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }

    return null;
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxWidth="lg" className="text-center">
      {singUpError && <AlertNotification closeFn={setSingUpError} />}
      <div className="sing-up">
        <Typography className="sing-up-title" variant="h3" component="h3">
          Sign up
        </Typography>
        <Formik
          initialValues={{
            email: '',
            fullName: '',
            password: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'This field is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            } else if (!values.fullName) {
              errors.fullName = 'This field is required';
            } else if (!values.password) {
              errors.password = 'This field is required';
            } else if (values.password.length < 5) {
              errors.password = 'Minimum password length 5 characters';
            }
            return errors;
          }}
          onSubmit={(values) => onSubmit(values)}
        >
          {({
            values, errors, handleChange, handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl className="sing-up-form">
                <TextField
                  className="sing-up-form-fiend"
                  label="Email"
                  variant="outlined"
                  name="email"
                  error={Boolean(errors.email)}
                  onChange={handleChange}
                  helperText={errors.email}
                  value={values.email}
                />
                <TextField
                  className="sing-up-form-fiend"
                  label="Full name"
                  name="fullName"
                  variant="outlined"
                  error={Boolean(errors.fullName)}
                  onChange={handleChange}
                  helperText={errors.fullName}
                  value={values.fullName}
                />
                <TextField
                  className="sing-up-form-fiend"
                  label="Password"
                  variant="outlined"
                  name="password"
                  error={Boolean(errors.password)}
                  onChange={handleChange}
                  helperText={errors.password}
                  value={values.password}
                />
                <Button
                  disabled={Boolean(Object.keys(errors).length) || Boolean(!values.email)}
                  variant="contained"
                  size="large"
                  type="submit"
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          )}
        </Formik>
        <Link className="sing-up-form-link" to="/sign-in">
          Already have an account? Sign in
        </Link>
      </div>
    </Container>
  );
}
