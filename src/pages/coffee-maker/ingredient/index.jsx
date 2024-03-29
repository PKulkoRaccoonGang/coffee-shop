import PropTypes from 'prop-types';

export default function CoffeeIngredient({
  onDragStart, title, img, onDrop, className,
}) {
  return (
    <span
      draggable
      onDragStart={onDragStart}
      onDrop={onDrop}
      className={className}
    >
      <img className="ingredient" src={img} alt={title} />
    </span>
  );
}

CoffeeIngredient.propTypes = {
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
