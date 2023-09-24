import sugarImg from './images/sugar.png';
import saltImg from './images/salt.png';
import pepperImg from './images/pepper.png';
import milkImg from './images/milk.png';
import washingPowderImg from './images/washing-powder.png';
import cinnamonImg from './images/cinnamon.png';
import coffeeImg from './images/coffee.png';

export const MAX_INGREDIENTS = 4;

export const initialState = [
  { id: 1, title: 'Sugar', src: sugarImg },
  { id: 2, title: 'Salt', src: saltImg },
  { id: 3, title: 'Pepper', src: pepperImg },
  { id: 4, title: 'Milk', src: milkImg },
  { id: 5, title: 'WashingPowder', src: washingPowderImg },
  { id: 6, title: 'Cinnamon', src: cinnamonImg },
  { id: 7, title: 'Coffee', src: coffeeImg },
];
