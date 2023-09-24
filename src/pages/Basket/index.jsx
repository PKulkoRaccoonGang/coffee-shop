/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Alert,
  Button,
  Container,
  FormControl,
  Table, TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
  CardMedia,
} from '@mui/material';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import { fetchBasket, selectorBasket } from '../../redux/slices/basket';

const priceFormatter = (price) => `$${price.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})}`;

function Basket() {
  const dispatch = useDispatch();
  const basketData = useSelector(selectorBasket);
  // const isOrdered = useSelector(selectorIsOrder);
  const [items, setItems] = useState(basketData);

  const handleRemoveProduct = (productId) => {
    const indexToDelete = items.findIndex((item) => item._id === productId);

    if (indexToDelete !== -1) {
      const updatedItems = [...items];
      updatedItems.splice(indexToDelete, 1);
      setItems(updatedItems);
    }
  };

  const handleSubmitOrder = (values, productItems) => {
    dispatch(fetchBasket([values, { products: productItems }]));
  };

  if (!items.length) {
    return (
      <section className="basket">
        <Container maxWidth="xl">
          <Alert severity="warning">
            <Typography>
              Unfortunately, your basket is empty...
            </Typography>
            <Button
              as={Link}
              to="/"
              variant="contained"
              size="large"
            >
              Back to home
            </Button>
          </Alert>
        </Container>
      </section>
    );
  }
  return (
    <section className="basket">
      <Container maxWidth="xl">
        <Typography className="basket-title" variant="h3" component="h3">
          Basket
        </Typography>
        <TableContainer className="basket-products" component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Preview</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <CardMedia
                      component="img"
                      image={row.imageUrl}
                      alt={row.title}
                      style={{ width: 100 }}
                    />
                  </TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">
                    {priceFormatter(row.price)}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      color="error"
                      onClick={() => handleRemoveProduct(row._id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
            handleSubmitOrder(values, items);
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
                variant="contained"
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
