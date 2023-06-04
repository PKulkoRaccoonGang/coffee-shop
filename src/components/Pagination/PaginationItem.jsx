import PropTypes from 'prop-types';

export default function PaginationItem({ href, count }) {
  return (
    <li>
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
  href: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
