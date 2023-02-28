import PropTypes from 'prop-types';

function Link({ id, href, name }) {
  return (
    <li key={id}>
      <a className="text-gray-700 transition hover:text-orange-900" href={href}>
        {name}
      </a>
    </li>
  );
}

Link.propTypes = {
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.number,
  href: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
};

export default Link;
