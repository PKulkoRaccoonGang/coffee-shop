import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function HeaderPopoverItem({ product }) {
  const { name, href, description } = product;

  return (
    <div
      key={description}
      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
    >
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
        <product.icon className="h-6 w-6 text-gray-600 group-hover:text-orange-900" aria-hidden="true" />
      </div>
      <div className="flex-auto">
        <Link to={href} className="block font-semibold text-gray-900">
          {name}
          <span className="absolute inset-0" />
        </Link>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

HeaderPopoverItem.propTypes = {
  product: PropTypes.object.isRequired,
};
