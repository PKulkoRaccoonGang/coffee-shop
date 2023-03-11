import PropTypes from 'prop-types';

export default function Button({ text }) {
  return (
    <button
      type="button"
      name="button"
      className="inline-block w-full rounded-lg bg-orange-900 hover:bg-orange-800 active:bg-orange-700 px-5 py-3 font-medium text-white sm:w-auto"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
