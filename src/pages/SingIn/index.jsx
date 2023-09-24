import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Button, Container, FormControl, TextField, Typography,
} from '@mui/material';

import { fetchAuth, selectorIsAuth } from '../../redux/slices/auth';
import AlertNotification from '../../components/AlertNotification';

export default function SingIn() {
  const [authorizationError, setAuthorizationError] = useState(false);
  const isAuth = useSelector(selectorIsAuth);
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return setAuthorizationError(true);
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
      {authorizationError && <AlertNotification closeFn={setAuthorizationError} />}
      <div className="sign-in">
        <Typography className="sign-in-title" variant="h3" component="h3">
          Sign in
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'This field is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            } else if (!values.password) {
              errors.password = 'This field is required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
          }}
        >
          {({
            values, errors, handleSubmit, handleChange,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl className="sign-in-form">
                <TextField
                  className="sign-in-form-fiend"
                  label="Email"
                  type="email"
                  name="email"
                  error={Boolean(errors.email)}
                  value={values.email}
                  onChange={handleChange}
                  helperText={errors.email}
                />
                <TextField
                  className="sign-in-form-fiend"
                  label="Password"
                  type="password"
                  name="password"
                  error={Boolean(errors.password)}
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange}
                  helperText={errors.password}
                />
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  disabled={Boolean(Object.keys(errors).length) || Boolean(!values.email)}
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          )}
        </Formik>
        <Link className="sign-in-form-link" to="/sign-up">
          Already have an account? Sign up
        </Link>
      </div>
    </Container>
  );
}
