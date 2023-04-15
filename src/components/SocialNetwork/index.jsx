import PropTypes from 'prop-types';

export default function SocialNetwork({
  href, name, icon,
}) {
  return (
    <li>
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
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
