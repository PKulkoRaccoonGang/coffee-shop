import React, { useState, useRef } from 'react';
import { Container } from '@mui/material';

import SubHeader from '../../components/SubHeader';
import ModalResult from './ModalResult';
import CoffeeIngredient from './Ingredient';
import CoffeeMug from './CoffeeMug';
import { initialState, MAX_INGREDIENTS } from './constants';

function CoffeeMaker() {
  const [dragging, setDragging] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredients, setIngredients] = useState(initialState);
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const [isOverMug, setIsOverMug] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragEnd = () => {
    setDragging(false);
    dragNode.current.removeEventListener('dragend', handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('ingredientName', item.title);
    setCurrentIngredient(item);
    dragItem.current = item;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', handleDragEnd);

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleOnDrop = (e) => {
    const ingredientName = e.dataTransfer.getData('ingredientName');

    setSelectedIngredients([...selectedIngredients, ingredientName]);

    setIngredients((prevBoard) => {
      const currentIndex = prevBoard.indexOf(currentIngredient);
      const updatedBoard = [...prevBoard];
      updatedBoard.splice(currentIndex, 1);

      return updatedBoard;
    });
  };

  const handleMugDragOver = (e) => {
    e.preventDefault();
    setIsOverMug(true);
  };

  const handleDragLeaveMug = () => {
    setIsOverMug(false);
  };

  const handleDrop = (e, item) => {
    e.preventDefault();

    setIngredients((prevBoard) => {
      const currentIndex = prevBoard.indexOf(currentIngredient);
      const updatedBoard = [...prevBoard];
      updatedBoard.splice(currentIndex, 1);

      const dropIndex = prevBoard.indexOf(item);
      updatedBoard.splice(dropIndex, 0, currentIngredient);

      return updatedBoard;
    });
  };

  const getStyles = (id) => {
    const currentItem = dragItem.current;
    if (currentItem.id === id) {
      return 'current';
    }

    return '';
  };

  return (
    <section className="coffee-maker">
      <Container>
        <SubHeader
          title="Coffee maker game"
          description="Below is a list of ingredients. You need to choose the 4 right ingredients to make delicious and aromatic coffee."
        />
      </Container>
      <Container maxWidth="xl">
        {ingredients.map((item) => (
          <CoffeeIngredient
            key={item.id}
            title={item.title}
            onDragStart={(e) => handleDragStart(e, item)}
            onDrop={(e) => handleDrop(e, item)}
            img={item.src}
            className={dragging && getStyles(item.id)}
          />
        ))}
        <CoffeeMug
          isOverMug={isOverMug}
          onDrop={handleOnDrop}
          onDragOver={handleMugDragOver}
          onDragLeave={handleDragLeaveMug}
        />
        <ModalResult
          isOpen={selectedIngredients.length === MAX_INGREDIENTS}
          ingredients={selectedIngredients}
          setIngredients={setSelectedIngredients}
          data={initialState}
          setIngredientsBoard={setIngredients}
        />
      </Container>
    </section>
  );
}

export default CoffeeMaker;
