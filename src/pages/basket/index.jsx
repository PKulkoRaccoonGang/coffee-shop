/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Container, FormControl, TextField, Typography,
} from '@mui/material';
import { Formik } from 'formik';

import { ProductTable } from '../../components';
import { addToBasket, fetchBasket, removeFromBasket } from '../../redux/basket/thunks';
import { getBasketProducts } from '../../redux/basket/selectors';
import EmptyBasket from './EmptyBasket';

function Basket() {
  const dispatch = useDispatch();
  const basketProducts = useSelector(getBasketProducts);

  useEffect(() => {
    dispatch(fetchBasket());
  }, []);

  const handleRemoveProduct = (productId) => {
    dispatch(removeFromBasket(productId));
  };

  const handleSubmitOrder = (values, productItems) => {
    dispatch(addToBasket([values, { products: productItems }]));
    // eslint-disable-next-line no-alert
    alert('Congratulations! You have successfully completed your purchase!');
  };

  if (!basketProducts.length) {
    return <EmptyBasket />;
  }
  return (
    <section className="basket">
      <Container maxWidth="xl">
        <Typography
          className="basket-title animate__animated animate__fadeInLeft"
          variant="h3"
          component="h3"
        >
          Basket
        </Typography>
        <ProductTable data={basketProducts} removeHandler={handleRemoveProduct} />
        <Typography
          className="basket-information-title animate__animated animate__fadeInLeft"
          variant="h3"
          component="h3"
        >
          Recipient information
        </Typography>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            city: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = 'This field is required';
            } else if (JSON.stringify(values.phone).length < 10) {
              errors.phone = 'Error';
            } else if (!values.city) {
              errors.city = 'This field is required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            handleSubmitOrder(values, basketProducts);
          }}
        >
          {({
            values, errors, handleSubmit, handleChange,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl className="basket-form">
                <TextField
                  className="basket-form-fiend animate__animated animate__fadeInLeft"
                  label="Name"
                  type="text"
                  name="name"
                  value={values.name}
                  error={Boolean(errors.name)}
                  onChange={handleChange}
                  variant="outlined"
                  helperText="Receiver name"
                />
                <TextField
                  className="basket-form-fiend animate__animated animate__fadeInRight"
                  label="Phone"
                  type="number"
                  name="phone"
                  value={values.phone}
                  error={Boolean(errors.phone)}
                  onChange={handleChange}
                  variant="outlined"
                  helperText="Receiver phone"
                />
                <TextField
                  className="basket-form-fiend animate__animated animate__fadeInLeft"
                  label="City"
                  type="text"
                  name="city"
                  value={values.city}
                  error={Boolean(errors.city)}
                  onChange={handleChange}
                  variant="outlined"
                  helperText="Delivery city"
                />
              </FormControl>
              <Button
                className="core-button basket-btn animate__animated animate__fadeInRight"
                type="submit"
                disabled={Boolean(Object.keys(errors).length) || Boolean(!values.name)}
              >
                Buy
              </Button>
            </form>
          )}
        </Formik>
      </Container>
    </section>
  );
}

export default Basket;
