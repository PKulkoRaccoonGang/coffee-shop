import PropTypes from 'prop-types';

export default function Button({
  text, href,
}) {
  return (
    <a
      href={href}
      className="block w-full rounded bg-orange-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-800 focus:outline-none focus:ring active:bg-orange-700 sm:w-auto"
    >
      {text}
    </a>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
