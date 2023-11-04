/* eslint-disable no-return-assign  */
/**
 * Formats a numeric price as a currency string in US Dollars (USD) format.
 *
 * @param {number} price - The numeric price to format.
 * @returns {string} Returns the price formatted as a currency string, e.g., "$1,234.56".
 */
export const priceFormatter = (price) => `$${price.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})}`;

/**
 * Computes the total price based on the product provided.
 * @param {Array} products - The array of products to compute the total price from.
 * @returns {number} The total price computed from the products.
 */
export function computePrice(products) {
  return products.reduce((total, product) => total += product.price * product.count, 0);
}

/**
 * Computes the total count of products provided.
 * @param {Array} products - The array of products to compute the total count from.
 * @returns {number} The total count of products.
 */
export function computeCount(products) {
  return products.reduce((total, product) => total += product.count, 0);
}
