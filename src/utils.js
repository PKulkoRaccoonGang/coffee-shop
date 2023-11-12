/**
 * Validates user input credentials for registration or authentication.
 *
 * @param {Object} values - The user input values to be validated.
 * @param {boolean} [isRegistration=false] - Specifies if the validation is for registration.
 * @returns {Object} - Object containing validation errors, if any.
 *
 * @throws {Error} Throws an error if values is not provided.
 *
 * @example
 * const userInput = {
 *   email: 'user@example.com',
 *   password: 'password123',
 *   fullName: 'John Doe'
 * };
 */
export const validateUserInputCredentials = (values, isRegistration = false) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  } else if (values.password.length < 5) {
    errors.password = 'Minimum password length 5 characters';
  }

  if (isRegistration && !values.fullName) {
    errors.fullName = 'This field is required';
  }

  return errors;
};

/**
 * A utility object providing methods for interacting with the localStorage API.
 *
 * @namespace
 * @property {Function} get - Retrieves the value associated with the key from localStorage.
 * @property {Function} set - Sets the value for the specified key in localStorage.
 * @property {Function} remove - Removes the item with the specified key from localStorage.
 */
export const storage = {
  get: (key) => localStorage.getItem(key),
  set: (key, value) => localStorage.setItem(key, value),
  remove: (key) => localStorage.removeItem(key),
};
