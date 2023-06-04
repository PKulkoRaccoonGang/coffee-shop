import { BsChevronDown } from 'react-icons/bs';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function Filter({ title, children }) {
  const [hasOpen, setHasOpen] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setHasOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={filterRef}>
      <div className="group">
        <button
          type="button"
          onClick={() => setHasOpen(!hasOpen)}
          className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
        >
          <span className="text-sm font-medium">
            {title}
          </span>
          <span className="transition">
            <BsChevronDown
              className={classNames(hasOpen ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
              aria-hidden="true"
            />
          </span>
        </button>
        {hasOpen && children}
      </div>
    </div>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
