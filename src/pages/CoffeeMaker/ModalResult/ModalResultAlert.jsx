import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@mui/material';

function ModalResultAlert({ variant, title }) {
  return (
    <Alert severity={variant}>
      {title}
    </Alert>
  );
}

ModalResultAlert.propTypes = {
  variant: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalResultAlert;
