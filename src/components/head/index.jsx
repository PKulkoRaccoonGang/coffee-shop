import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default function Head({ pageTitle }) {
  return (
    <Helmet>
      <title>
        {pageTitle}
        {' '}
        | Baker 75 Street
      </title>
    </Helmet>
  );
}

Head.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
