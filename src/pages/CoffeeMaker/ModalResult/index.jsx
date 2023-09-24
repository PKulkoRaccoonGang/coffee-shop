import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  List,
  Button,
  DialogActions,
} from '@mui/material';

import sugarImg from '../images/sugar.png';
import ModalResultIngredient from './ModalResultIngredient';
import ModalResultAlert from './ModalResultAlert';

function ModalResult({
  isOpen, ingredients, setIngredients, data, setIngredientsBoard,
}) {
  const falseIngredients = ['Salt', 'Pepper', 'WashingPowder'];
  const containsFalseItem = ingredients.some((ingredient) => falseIngredients.includes(ingredient));

  return (
    <Dialog open={isOpen}>
      <DialogTitle>
        {containsFalseItem ? (
          <ModalResultAlert
            title="Oops... The coffee didnt taste good. You have added the wrong ingredients."
            variant="error"
          />
        ) : (
          <ModalResultAlert
            title="Congratulations! You have found all the right coffee ingredients!"
            variant="success"
          />
        )}
      </DialogTitle>
      <List>
        {ingredients.map((ingredient) => (
          <ModalResultIngredient key={ingredient} title={ingredient} img={sugarImg} />
        ))}
      </List>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            setIngredients([]);
            setIngredientsBoard(data);
          }}
        >
          Close
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setIngredients([]);
            setIngredientsBoard(data);
          }}
        >
          Play again
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ModalResult.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  setIngredients: PropTypes.func.isRequired,
  setIngredientsBoard: PropTypes.func.isRequired,
  data: PropTypes.any.isRequired,
};

export default ModalResult;
