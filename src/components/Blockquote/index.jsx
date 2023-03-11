import PropTypes from 'prop-types';

export default function Blockquote({ className, text }) {
  return <blockquote className={className}>{text}</blockquote>;
}

Blockquote.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
