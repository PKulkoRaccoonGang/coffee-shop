/**
 * Sorts an array of objects by alphabetizing the titles.
 *
 * @param {Object} currentTitle - The current title object.
 * @param {string} currentTitle.title - The title string to be compared.
 * @param {Object} nextTitle - The next title object.
 * @param {string} nextTitle.title - The title string to be compared.
 * @returns {number} - Returns a negative value if currentTitle comes before nextTitle,
 *                     a positive value if it comes after, and 0 if they are equal.
 */
export const sortByAlphabet = (currentTitle, nextTitle) => {
  const currentLetter = currentTitle.title.toLowerCase();
  const nextLetter = nextTitle.title.toLowerCase();

  if (currentLetter < nextLetter) {
    return -1;
  }

  return 1;
};

/**
 * Sorts an array of objects by numeric price.
 *
 * @param {Object} currentPrice - The current price object.
 * @param {string} currentPrice.price - The price string to be compared.
 * @param {Object} nextPrice - The next price object.
 * @param {string} nextPrice.price - The price string to be compared.
 * @returns {number} - Returns a negative value if currentPrice is less than nextPrice,
 *                     a positive value if it is greater, and 0 if they are equal.
 */
export const sortByPrice = (currentPrice, nextPrice) => {
  const currentNumber = parseFloat(currentPrice.price);
  const nextNumber = parseFloat(nextPrice.price);

  if (currentNumber < nextNumber) {
    return -1;
  }
  return 1;
};
