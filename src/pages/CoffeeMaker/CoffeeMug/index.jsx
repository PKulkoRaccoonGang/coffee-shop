import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CoffeeMug({ onDrop, onDragOver, isOverMug }) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      className={classNames('coffee-mug', { show: isOverMug })}
    >
      <div className="handle" />
    </div>
  );
}

CoffeeMug.propTypes = {
  onDrop: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  isOverMug: PropTypes.bool.isRequired,
};

export default CoffeeMug;
