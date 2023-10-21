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

export function computePrice(courses) {
  // eslint-disable-next-line no-return-assign
  return courses.reduce((total, course) => total += course.price * course.count, 0);
}

export function computeCount(courses) {
  // eslint-disable-next-line no-return-assign
  return courses.reduce((total, course) => total += course.count, 0);
}
