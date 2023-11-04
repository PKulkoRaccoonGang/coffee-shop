import PropTypes from 'prop-types';
import { Alert, AlertTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertNotification({
  title, description, variant, closeFn,
}) {
  return (
    <Alert
      className="alert-notification"
      severity={variant}
      action={(
        <IconButton
          aria-label="Close button"
          color="inherit"
          size="small"
          onClick={() => closeFn(false)}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      )}
    >
      <AlertTitle>{title}</AlertTitle>
      {description}
    </Alert>
  );
}

AlertNotification.defaultProps = {
  title: 'We could not sign you in.',
  description: 'The username, email, or password you entered is incorrect. Please try again.',
  variant: 'error',
};

AlertNotification.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.string,
  closeFn: PropTypes.func.isRequired,
};
