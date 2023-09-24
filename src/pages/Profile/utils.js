// eslint-disable-next-line import/prefer-default-export
export const convertDateFormat = (date) => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.toLocaleString('default', { month: 'long' });
  const year = newDate.getFullYear();

  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  return `${day} ${month} ${year}, ${hours}:${minutes}`;
};
