import React from 'react';
import PropTypes from 'prop-types';

import sugarImg from '../images/sugar.png';
import saltImg from '../images/salt.png';
import pepperImg from '../images/pepper.png';
import milkImg from '../images/milk.png';
import washingPowderImg from '../images/washing-powder.png';
import cinnamonImg from '../images/cinnamon.png';
import coffeeImg from '../images/coffee.png';
import IngredientItem from './IngredientItem';

function ModalResultIngredient({ title }) {
  switch (title) {
    case 'Sugar':
      return (
        <IngredientItem title={title} src={sugarImg} />
      );
    case 'Salt':
      return (
        <IngredientItem title={title} src={saltImg} />
      );
    case 'Pepper':
      return (
        <IngredientItem title={title} src={pepperImg} />
      );
    case 'Milk':
      return (
        <IngredientItem title={title} src={milkImg} />
      );
    case 'WashingPowder':
      return (
        <IngredientItem title={title} src={washingPowderImg} />
      );
    case 'Cinnamon':
      return (
        <IngredientItem title={title} src={cinnamonImg} />
      );
    case 'Coffee':
      return (
        <IngredientItem title={title} src={coffeeImg} />
      );
    default:
      return null;
  }
}

ModalResultIngredient.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ModalResultIngredient;
