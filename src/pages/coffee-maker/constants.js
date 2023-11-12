export const imagePaths = {
  Sugar: require('./images/sugar.png'),
  Salt: require('./images/salt.png'),
  Pepper: require('./images/pepper.png'),
  Milk: require('./images/milk.png'),
  WashingPowder: require('./images/washing-powder.png'),
  Cinnamon: require('./images/cinnamon.png'),
  Coffee: require('./images/coffee.png'),
};

export const MAX_INGREDIENTS = 4;

export const initialState = Object.keys(imagePaths).map((key, id) => ({
  id: id + 1,
  title: key,
  src: imagePaths[key],
}));

export const falseIngredients = ['Salt', 'Pepper', 'WashingPowder'];
