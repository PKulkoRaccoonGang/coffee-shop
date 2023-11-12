import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  Alert, Button, ButtonGroup, Chip, Snackbar, Container, Typography,
} from '@mui/material';

import { addToBasket } from '../../redux/basket/thunks';
import { fetchProduct } from '../../redux/product/thunks';
import { getProduct } from '../../redux/product/selectors';
import { Head, NotFound } from '../../components';

export default function Product() {
  const { id } = useParams();
  const { product } = useSelector(getProduct);
  const [open, setOpen] = useState(false);
  const [productData, setProductData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  useEffect(() => {
    setProductData(product.items);
  }, [product.items]);

  const addProductToBasket = (productDetails) => {
    dispatch(addToBasket(productDetails));
    setOpen(true);
  };

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  if (!Object.keys(productData).length) {
    return <NotFound message="An error occurred, such product does not exist" />;
  }

  return (
    <>
      <Head pageTitle={productData.title} />
      <section className="product">
        <Container>
          <div className="product-wrapper">
            <img
              className="animate__animated animate__headShake"
              src={productData.imageUrl}
              alt={productData.title}
            />
            <div className="product-content">
              <Typography className="animate__animated animate__fadeInUp" variant="h3" component="h3">
                {productData.title}
              </Typography>
              <div>
                <Chip
                  label={`${productData.price}$`}
                  className="product-price animate__animated animate__fadeInUp"
                  variant="outlined"
                />
              </div>
              <p className="product-text animate__animated animate__fadeInUp">
                {productData.text}
              </p>
              <ButtonGroup>
                <Button
                  className="core-button product-btn-add-to-basket animate__animated animate__fadeInUp"
                  onClick={() => addProductToBasket(productData)}
                >
                  Add to Basket
                </Button>
                <Link className="core-button animate__animated animate__fadeInUp" to="/basket">
                  Show Basket
                </Link>
              </ButtonGroup>
            </div>
          </div>
        </Container>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert severity="success" variant="filled">
            Coffee successfully added to basket!
          </Alert>
        </Snackbar>
      </section>
    </>
  );
}
