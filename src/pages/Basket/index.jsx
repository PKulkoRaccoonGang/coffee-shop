import {
  Button, Container, FormControl, TextField, Typography,
} from '@mui/material';

import ProductCard from '../../components/ProductCard';
import './Basket.scss';

function Basket() {
  return (
    <section className="basket">
      <Container maxWidth="xl">
        <Typography className="basket-title" variant="h3" component="h3">
          Basket
        </Typography>
        <ul className="basket-cards">
          <ProductCard
            key={123}
            id={123}
            imageUrl="https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2458465_2.jpg"
            title="Movenpick Caffe Crema"
            price={123}
          />
          <ProductCard
            key={123}
            id={123}
            imageUrl="https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2458465_2.jpg"
            title="Movenpick Caffe Crema"
            price={123}
          />
          <ProductCard
            key={123}
            id={123}
            imageUrl="https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2458465_2.jpg"
            title="Movenpick Caffe Crema"
            price={123}
          />
        </ul>
        <Typography className="basket-information-title" variant="h3" component="h3">
          Recipient information
        </Typography>
        <FormControl className="basket-form">
          <TextField
            className="basket-form-fiend"
            label="Name"
            type="text"
            variant="outlined"
            helperText="Receiver name"
          />
          <TextField
            className="basket-form-fiend"
            label="Phone"
            type="number"
            variant="outlined"
            helperText="Receiver phone"
          />
          <TextField
            className="basket-form-fiend"
            label="City"
            type="text"
            variant="outlined"
            helperText="Delivery city"
          />
          <Button variant="contained" size="large" type="submit">
            Buy
          </Button>
        </FormControl>
      </Container>
    </section>
  );
}

export default Basket;
