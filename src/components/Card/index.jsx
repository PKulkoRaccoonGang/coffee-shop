import PropTypes from 'prop-types';

function Card({
  id, imageSrc, name, price, href,
}) {
  return (
    <li key={id}>
      <a href={href} className="group block overflow-hidden">
        <img
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          src={imageSrc}
          alt={name}
        />
        <div className="relative pt-3">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>
          <p className="mt-2">
            <span className="tracking-wider text-gray-900">{price}</span>
          </p>
        </div>
      </a>
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  price: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  href: PropTypes.string,
};

export default Card;
