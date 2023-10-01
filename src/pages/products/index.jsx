import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Alert, AlertTitle, Checkbox, Container, FormControlLabel,
  Grid, InputAdornment, List, ListItem, TextField, Typography,
} from '@mui/material';
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';

import { NotFound, ProductCard } from '../../components';
import { fetchProducts } from '../../redux/products/thunks';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [productsItems, setProductsItems] = useState([]);
  const [isSortingAlphabetical, setIsSortingAlphabetical] = useState(false);
  const [isSortingByPrice, setIsSortingByPrice] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setProductsItems(products.items);
  }, [products.items]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (!productsItems.length) {
    return <NotFound message="An error occurred, the product could not be loaded" />;
  }

  const filteredItems = productsItems
    .filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (isSortingAlphabetical) {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
      }

      if (isSortingByPrice) {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);

        if (priceA < priceB) {
          return -1;
        }
        if (priceA > priceB) {
          return 1;
        }
      }

      return 0;
    });

  return (
    <Container className="products" maxWidth="lg">
      <Typography className="animate__animated animate__fadeInLeft" variant="h3" component="h3">
        Products
      </Typography>
      <Grid container>
        <Grid item xs={3}>
          <List className="animate__animated animate__fadeInLeft" component="nav">
            <ListItem>
              <TextField
                className="animate__animated animate__fadeInUp"
                fullWidth
                onChange={handleInputChange}
                label="Search coffee"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AbcOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </ListItem>
            <ListItem>
              <Typography className="animate__animated animate__fadeInUp" variant="h5" component="h5">
                Sort:
              </Typography>
            </ListItem>
            <ListItem button>
              <FormControlLabel
                className="animate__animated animate__fadeInUp"
                control={(
                  <Checkbox
                    onChange={() => setIsSortingAlphabetical(!isSortingAlphabetical)}
                    checked={isSortingAlphabetical}
                  />
                  )}
                label="In alphabet order"
              />
            </ListItem>
            <ListItem button>
              <FormControlLabel
                className="animate__animated animate__fadeInUp"
                control={(
                  <Checkbox
                    onChange={() => setIsSortingByPrice(!isSortingByPrice)}
                    checked={isSortingByPrice}
                  />
                  )}
                label="By price (lowest to highest)"
              />
            </ListItem>
          </List>
        </Grid>
        <Grid className="animate__animated animate__fadeInUp" item xs={9}>
          <Grid container rowSpacing={1} columnSpacing={1}>
            {filteredItems.length ? filteredItems.map(({
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
              <Alert className="animate__animated animate__jackInTheBox" severity="info">
                <AlertTitle>Not found</AlertTitle>
                Sorry, no products were found matching your request.
              </Alert>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
