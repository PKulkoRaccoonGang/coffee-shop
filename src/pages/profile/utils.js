/**
 * Converts a date and time to a format of day, month, year, hours, and minutes.
 *
 * @param {string | number | Date} date - The date and time as a string, number, or Date object.
 * @returns {string} Returns the date and time in the format "day Month Year, hours:minutes".
 */
export const convertDateFormat = (date) => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.toLocaleString('default', { month: 'long' });
  const year = newDate.getFullYear();

  return `${day} ${month} ${year}`;
};
