import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  Alert, Button, ButtonGroup, Chip, IconButton, Snackbar, Container, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import axios from '../../axios';
import { addProduct } from '../../redux/slices/basket';

export default function Product() {
  const [open, setOpen] = useState(false);
  const [productData, setProductData] = useState();
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
            alt={productData?.title}
            src={productData?.imageUrl}
          />
          <div className="product-content">
            <Typography variant="h3" component="h3">
              {productData?.title}
            </Typography>
            <div>
              <Chip
                label={`${productData?.price}$`}
                className="product-price"
                variant="outlined"
              />
            </div>
            <p className="product-text">
              {productData?.text}
            </p>
            <ButtonGroup aria-label="Disabled elevation buttons">
              <Button
                className="product-btn product-btn-add-to-basket"
                variant="contained"
                onClick={() => addProductToBasket(productData)}
              >
                Add to Basket
              </Button>
              <Button
                className="product-btn"
                as={Link}
                to="/basket"
                variant="contained"
              >
                Show Basket
              </Button>
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
