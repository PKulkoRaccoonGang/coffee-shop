/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Container, Typography,
} from '@mui/material';

import { Head, ProductTable } from '../../components';
import { fetchBasket, removeFromBasket, sendOrder } from '../../redux/basket/thunks';
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

  const handleSubmitOrder = () => {
    dispatch(sendOrder(['hello']));
  };

  if (!basketProducts.length) {
    return <EmptyBasket />;
  }
  return (
    <>
      <Head pageTitle="Basket" />
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
          <Button
            className="core-button basket-btn animate__animated animate__fadeInRight"
            type="submit"
            onClick={handleSubmitOrder}
          >
            Buy
          </Button>
        </Container>
      </section>
    </>
  );
}

export default Basket;
