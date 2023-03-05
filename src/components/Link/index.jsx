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
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Link;
