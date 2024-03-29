import { useState, useRef } from 'react';
import { Container } from '@mui/material';

import { Head, SubHeader } from '../../components';
import ModalResult from './modal-result';
import CoffeeIngredient from './ingredient';
import CoffeeMug from './coffee-mug';
import { initialState, MAX_INGREDIENTS } from './constants';

export default function CoffeeMaker() {
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
    <>
      <Head pageTitle="Coffee maker" />
      <section className="coffee-maker">
        <Container>
          <SubHeader
            title="Coffee maker game"
            description="Below is a list of ingredients. You need to choose the 4 right ingredients to make delicious and aromatic coffee."
          />
        </Container>
        <Container maxWidth="xl">
          {ingredients.map((ingredient) => (
            <CoffeeIngredient
              key={ingredient.id}
              title={ingredient.title}
              onDragStart={(e) => handleDragStart(e, ingredient)}
              onDrop={(e) => handleDrop(e, ingredient)}
              img={ingredient.src}
              className={dragging ? getStyles(ingredient.id) : ''}
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
    </>
  );
}
