import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  Alert, Button, ButtonGroup, Chip, IconButton, Snackbar, Container, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { addProduct } from '../../redux/basket/slice';
import axios from '../../axios';

export default function Product() {
  const [open, setOpen] = useState(false);
  const [productData, setProductData] = useState({});
  const [productItems, setProductItems] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/products/${id}`).then((res) => {
      setProductData(res.data);
    })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.warn(err);
      });
  }, []);

  useEffect(() => {
    if (productItems.length) {
      window.localStorage.setItem('basket', JSON.stringify(productItems));
    }
  }, [JSON.stringify(productItems)]);

  const addProductToBasket = (data) => {
    dispatch(addProduct(data));

    setOpen(true);
  };

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <section className="product">
      <Container>
        <div className="product-wrapper">
          <img
            className="animate__animated animate__headShake"
            src={productData?.imageUrl}
            alt={productData?.title}
          />
          <div className="product-content">
            <Typography className="animate__animated animate__fadeInUp" variant="h3" component="h3">
              {productData?.title}
            </Typography>
            <div>
              <Chip
                label={`${productData?.price}$`}
                className="product-price animate__animated animate__fadeInUp"
                variant="outlined"
              />
            </div>
            <p className="product-text animate__animated animate__fadeInUp">
              {productData?.text}
            </p>
            <ButtonGroup>
              <Button
                className="core-button product-btn-add-to-basket animate__animated animate__fadeInUp"
                onClick={() => {
                  setProductItems([...productItems, productData]);
                  addProductToBasket(productData);
                }}
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
        action={action}
      >
        <Alert severity="success" variant="filled">
          Coffee successfully added to cart!
        </Alert>
      </Snackbar>
    </section>
  );
}
