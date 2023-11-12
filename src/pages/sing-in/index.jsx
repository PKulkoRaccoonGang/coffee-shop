import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Button, Container, FormControl, TextField, Typography,
} from '@mui/material';

import { fetchAuth } from '../../redux/auth/thunks';
import { selectorIsAuth } from '../../redux/auth/selectors';
import { AlertNotification, Head } from '../../components';
import { storage, validateUserInputCredentials } from '../../utils';

const initialValues = {
  email: '',
  password: '',
};

export default function SingIn() {
  const [authorizationError, setAuthorizationError] = useState(false);
  const isAuth = useSelector(selectorIsAuth);
  const dispatch = useDispatch();

  const onSubmit = async (userData) => {
    const { payload } = await dispatch(fetchAuth(userData));

    if (!payload) {
      return setAuthorizationError(true);
    }

    if ('token' in payload) {
      storage.set('token', payload.token);
    }

    return null;
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Head pageTitle="Sign in" />
      <Container maxWidth="lg" className="text-center">
        {authorizationError && <AlertNotification closeFn={setAuthorizationError} />}
        <div className="sign-in">
          <Typography
            className="sign-in-title animate__animated animate__fadeInLeft"
            variant="h3"
            component="h3"
          >
            Sign in
          </Typography>
          <Formik
            initialValues={initialValues}
            validate={(values) => validateUserInputCredentials(values)}
            onSubmit={(values, { setSubmitting }) => {
              onSubmit(values);
              setSubmitting(false);
            }}
          >
            {({
              values, errors, handleSubmit, handleChange,
            }) => {
              const isDisabled = Boolean(Object.keys(errors).length) || Boolean(!values.email);

              return (
                <form onSubmit={handleSubmit}>
                  <FormControl className="sign-in-form">
                    <TextField
                      className="sign-in-form-fiend animate__animated animate__fadeInRight"
                      label="Email"
                      type="email"
                      name="email"
                      error={Boolean(errors.email)}
                      value={values.email}
                      onChange={handleChange}
                      helperText={errors.email}
                    />
                    <TextField
                      className="sign-in-form-fiend animate__animated animate__fadeInLeft"
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
                      className="core-button animate__animated animate__fadeInRight"
                      type="submit"
                      disabled={isDisabled}
                    >
                      Submit
                    </Button>
                  </FormControl>
                </form>
              );
            }}
          </Formik>
          <Link className="sign-in-form-link animate__animated animate__fadeInLeft" to="/sign-up">
            Already have an account? Sign up
          </Link>
        </div>
      </Container>
    </>
  );
}
