import PropTypes from 'prop-types';

function Blockquote({ className, text }) {
  return <blockquote className={className}>{text}</blockquote>;
}

Blockquote.propTypes = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Blockquote;
