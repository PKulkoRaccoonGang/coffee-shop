import PropTypes from 'prop-types';

export default function SocialNetwork({
  href, icon,
}) {
  return (
    <li>
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="footer-social-link"
      >
        {icon}
      </a>
    </li>
  );
}

SocialNetwork.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
