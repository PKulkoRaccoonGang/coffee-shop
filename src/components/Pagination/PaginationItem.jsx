import PropTypes from 'prop-types';

function PaginationItem({ id, href, count }) {
  return (
    <li key={id}>
      <a
        href={href}
        className="block h-8 w-8 rounded border border-gray-100 text-center leading-8 hover:bg-orange-300 focus:bg-orange-400"
      >
        {count}
      </a>
    </li>
  );
}

PaginationItem.propTypes = {
  id: PropTypes.number.isRequired,
  href: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default PaginationItem;
