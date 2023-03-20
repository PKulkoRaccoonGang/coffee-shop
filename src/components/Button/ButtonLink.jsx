import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ButtonLink({
  text, href, styles,
}) {
  return (
    <Link
      to={href}
      className={`${styles} block w-full rounded bg-orange-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-800 focus:outline-none focus:ring-opacity-40 focus:ring-orange-800 focus:ring active:bg-orange-700 sm:w-auto`}
    >
      {text}
    </Link>
  );
}

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

ButtonLink.defaultProps = {
  styles: '',
};
