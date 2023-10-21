import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Container, Alert } from '@mui/material';

import { fetchProducts } from '../../redux/products/thunks';
import ProductCard from '../product-card';
import SubHeader from '../sub-header';

export default function ProductsList() {
  const dispatch = useDispatch();
  const { products: { items } } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="products">
      <Container>
        <SubHeader
          title="Product Collection"
          description="Choose delicious, high-quality coffee, and we will make sure that it is fast and convenient."
        />
        <Grid
          className="animate__animated animate__fadeInUp"
          container
          rowSpacing={5}
          columnSpacing={1}
        >
          {items.length ? items.map(({
            _id, imageUrl, title, price,
          }) => (
            <Grid key={_id} item xs={4}>
              <ProductCard
                key={_id}
                id={_id}
                imageUrl={imageUrl}
                title={title}
                price={price}
              />
            </Grid>
          )) : (
            <Alert severity="warning" variant="outlined">
              Unfortunately the products are out of stock...
            </Alert>
          )}
        </Grid>
      </Container>
    </section>
  );
}
