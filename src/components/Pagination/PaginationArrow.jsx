import PropTypes from 'prop-types';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

export default function PaginationArrow({ href, direction }) {
  return (
    <li>
      <a
        href={href}
        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 hover:bg-orange-300 focus:bg-orange-400"
      >
        <span className="sr-only">
          {direction}
          {' '}
          Page
        </span>
        {direction === 'Next' ? <BsArrowRight /> : <BsArrowLeft />}
      </a>
    </li>
  );
}

PaginationArrow.propTypes = {
  href: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};
