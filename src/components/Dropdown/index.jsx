import PropTypes from 'prop-types';
import { BsChevronDown, BsFillPersonXFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Dropdown({ handleToggle, hasOpen }) {
  function switchClassName(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={() => handleToggle()}
        type="button"
        className="relative z-10 flex items-center p-2 text-sm text-white bg-orange-900 border border-transparent rounded-md focus:border-orange-800 focus:ring-opacity-40 focus:ring-orange-800 focus:ring focus:outline-none"
      >
        <span className="mx-1">Peter Kulko</span>
        <BsChevronDown
          eslint-disable-next-line
          max-len
          className={switchClassName(hasOpen ? 'rotate-180' : 'h-3 w-3', 'h-3 w-3 flex-none')}
          aria-hidden="true"
        />
      </button>
      {hasOpen && (
        <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-orange-900 rounded-md shadow-xl">
          <Link to="/profile" className="flex items-center p-3 -mt-2 text-sm text-white hover:bg-orange-800 transition-colors duration-300 transform">
            <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200" alt="peter kulko" />
            <div className="mx-1">
              <h1 className="text-sm font-semibold text-white">Peter Kulko</h1>
              <p className="text-sm text-white">petrokulko@gmail.com</p>
            </div>
          </Link>
          <hr className="border-gray-200" />
          <Link to="/" className="flex items-center p-3 text-sm text-white hover:bg-orange-800 capitalize transition-colors duration-300 transform">
            <BsFillPersonXFill />
            <span className="mx-1">Sign Out</span>
          </Link>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  hasOpen: PropTypes.bool.isRequired,
};
