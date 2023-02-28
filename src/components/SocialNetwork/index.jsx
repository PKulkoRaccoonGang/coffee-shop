import PropTypes from 'prop-types';

function SocialNetwork({
  id, href, name, icon,
}) {
  return (
    <li key={id}>
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="text-gray-700 transition hover:text-gray-700/75"
      >
        <span className="sr-only">{name}</span>
        {icon}
      </a>
    </li>
  );
}

SocialNetwork.propTypes = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  icon: PropTypes.node,
};

export default SocialNetwork;
