/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Container, FormControl, TextField, Typography,
} from '@mui/material';
import { Formik } from 'formik';

import { fetchBasket } from '../../redux/slices/basket';
import { ProductTable } from '../../components';
import EmptyBasket from './EmptyBasket';

function Basket() {
  const dispatch = useDispatch();
  const [basketData, setBasketData] = useState([]);

  useEffect(() => {
    const storedArrayAsString = localStorage.getItem('basket');
    if (storedArrayAsString) {
      const storedArray = JSON.parse(storedArrayAsString);
      setBasketData(storedArray);
    }
  }, []);

  const handleRemoveProduct = (productId) => {
    const indexToDelete = basketData.findIndex((item) => item._id === productId);

    if (indexToDelete !== -1) {
      const updatedItems = [...basketData];
      updatedItems.splice(indexToDelete, 1);
      setBasketData(updatedItems);
      window.localStorage.setItem('basket', JSON.stringify(basketData));
    }
  };

  const handleSubmitOrder = (values, productItems) => {
    dispatch(fetchBasket([values, { products: productItems }]));
    window.localStorage.removeItem('basket');
    // eslint-disable-next-line no-alert
    alert('Congratulations! You have successfully completed your purchase!');
  };

  if (!basketData.length) {
    return <EmptyBasket />;
  }
  return (
    <section className="basket">
      <Container maxWidth="xl">
        <Typography className="basket-title" variant="h3" component="h3">
          Basket
        </Typography>
        <ProductTable data={basketData} removeHandler={handleRemoveProduct} />
        <Typography className="basket-information-title" variant="h3" component="h3">
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
            handleSubmitOrder(values, basketData);
          }}
        >
          {({
            values, errors, handleSubmit, handleChange,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl className="basket-form">
                <TextField
                  className="basket-form-fiend"
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
                  className="basket-form-fiend"
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
                  className="basket-form-fiend"
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
                className="core-button basket-btn"
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
