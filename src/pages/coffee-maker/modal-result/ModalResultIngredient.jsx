import PropTypes from 'prop-types';
import IngredientItem from './IngredientItem';
import { imagePaths } from '../constants';

export default function ModalResultIngredient({ title }) {
  const imagePath = imagePaths[title];

  if (!imagePath) {
    return null;
  }

  return <IngredientItem title={title} src={imagePath} />;
}

ModalResultIngredient.propTypes = {
  title: PropTypes.string.isRequired,
};
