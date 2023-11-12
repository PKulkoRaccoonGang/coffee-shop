import { useState } from 'react';
import {
  Button, Container, FormControl, TextField, Typography,
} from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import { selectorIsAuth } from '../../redux/auth/selectors';
import { fetchRegister } from '../../redux/auth/thunks';
import { storage, validateUserInputCredentials } from '../../utils';
import { AlertNotification, Head } from '../../components';

const initialValues = {
  email: '',
  fullName: '',
  password: '',
};

export default function SingUp() {
  const [singUpError, setSingUpError] = useState(false);
  const isAuth = useSelector(selectorIsAuth);
  const dispatch = useDispatch();

  const onSubmit = async (userData) => {
    const { payload } = await dispatch(fetchRegister(userData));

    if (!payload) {
      return setSingUpError(true);
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
      <Head pageTitle="Sign up" />
      <Container maxWidth="lg" className="text-center">
        {singUpError && <AlertNotification closeFn={setSingUpError} />}
        <div className="sing-up">
          <Typography
            className="sing-up-title animate__animated animate__fadeInLeft"
            variant="h3"
            component="h3"
          >
            Sign up
          </Typography>
          <Formik
            initialValues={initialValues}
            validate={(values) => validateUserInputCredentials(values, true)}
            onSubmit={(values) => onSubmit(values)}
          >
            {({
              values, errors, handleChange, handleSubmit,
            }) => {
              const isDisabled = Boolean(Object.keys(errors).length) || Boolean(!values.email);

              return (
                <form onSubmit={handleSubmit}>
                  <FormControl className="sing-up-form">
                    <TextField
                      className="sing-up-form-fiend animate__animated animate__fadeInRight"
                      label="Email"
                      variant="outlined"
                      name="email"
                      error={Boolean(errors.email)}
                      onChange={handleChange}
                      helperText={errors.email}
                      value={values.email}
                    />
                    <TextField
                      className="sing-up-form-fiend animate__animated animate__fadeInLeft"
                      label="Full name"
                      name="fullName"
                      variant="outlined"
                      error={Boolean(errors.fullName)}
                      onChange={handleChange}
                      helperText={errors.fullName}
                      value={values.fullName}
                    />
                    <TextField
                      className="sing-up-form-fiend animate__animated animate__fadeInRight"
                      label="Password"
                      type="password"
                      variant="outlined"
                      name="password"
                      error={Boolean(errors.password)}
                      onChange={handleChange}
                      helperText={errors.password}
                      value={values.password}
                    />
                    <Button
                      className="core-button animate__animated animate__fadeInLeft"
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
          <Link className="sing-up-form-link animate__animated animate__fadeInRight" to="/sign-in">
            Already have an account? Sign in
          </Link>
        </div>
      </Container>
    </>
  );
}
