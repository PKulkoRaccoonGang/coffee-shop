import PropTypes from 'prop-types';

export default function Select({ label, options }) {
  return (
    <div className="hidden sm:block">
      <label htmlFor="SortBy" className="sr-only">{label}</label>
      <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
        <option>Sort By</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
