import PropTypes from 'prop-types';

export default function Badge({ text, color }) {
  return (
    <div className="flex flex-wrap gap-1">
      <label htmlFor="badge">
        <input
          type="radio"
          name="color"
          id="badge"
          className="peer sr-only"
        />
        <span
          className={`group inline-block rounded-full border px-3 py-1 text-xs font-medium bg-${color} text-white`}
        >
          {text}
        </span>
      </label>
    </div>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Badge.defaultProps = {
  color: 'orange-900',
};
