import PropTypes from 'prop-types';

export default function Button({ children, onClick, disabled }) {
  return (
    <button
      type="button"
      name="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-block w-full rounded-lg bg-orange-900 hover:bg-orange-800 active:bg-orange-700 px-5 py-3 font-medium text-white sm:w-auto"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  onClick: undefined,
};
