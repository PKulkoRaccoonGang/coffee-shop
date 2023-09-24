/**
 * Formats a numeric price as a currency string in US Dollars (USD) format.
 *
 * @param {number} price - The numeric price to format.
 * @returns {string} Returns the price formatted as a currency string, e.g., "$1,234.56".
 */
// eslint-disable-next-line import/prefer-default-export
export const priceFormatter = (price) => `$${price.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})}`;
