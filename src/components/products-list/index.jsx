import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Container } from '@mui/material';

import ProductCard from '../product-card';
import SubHeader from '../sub-header';
import { fetchProducts } from '../../redux/products/thunks';

export default function ProductsList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

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
        <Grid className="animate__animated animate__fadeInUp" container rowSpacing={5} columnSpacing={1}>
          {products.items.map(({
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
          ))}
        </Grid>
      </Container>
    </section>
  );
}
