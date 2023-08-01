import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';

import { fetchProducts } from '../../redux/slices/products';
import ProductCard from '../ProductCard';
import './Products.scss';

export default function ProductsList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="products">
      <Container>
        <header className="products-header">
          <h2 className="products-header-title">
            Product Collection
          </h2>
          <p className="products-header-description">
            Choose delicious, high-quality coffee, and we will make sure that it
            is fast and convenient.
          </p>
        </header>
        <ul className="products-header-cards">
          {products.items.map(({
            _id, imageUrl, title, price,
          }) => (
            <ProductCard key={_id} id={_id} imageUrl={imageUrl} title={title} price={price} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
