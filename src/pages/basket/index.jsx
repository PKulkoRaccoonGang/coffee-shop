import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Container, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { fetchBasket, sendOrder } from '../../redux/basket/thunks';
import { getBasketProducts } from '../../redux/basket/selectors';
import { Head, ProductTable } from '../../components';
import EmptyBasket from './EmptyBasket';

export default function Basket() {
  const dispatch = useDispatch();
  const basketProducts = useSelector(getBasketProducts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBasket());
  }, []);

  const handleSubmitOrder = () => {
    dispatch(sendOrder());
    // eslint-disable-next-line no-alert
    alert('Congratulations! The order has been successfully completed!');
    navigate('/products');
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
          <ProductTable data={basketProducts} />
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
