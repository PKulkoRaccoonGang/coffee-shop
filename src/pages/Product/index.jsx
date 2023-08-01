import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Chip } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import axios from '../../axios';
import './Product.scss';

export default function Product() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/products/${id}`).then((res) => {
      setData(res.data);
    })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <section className="product">
      <Container>
        <div className="product-wrapper">
          <img
            alt="Lavazza Qualita Oro"
            src={data?.imageUrl}
          />
          <div className="product-content">
            <Typography variant="h3" component="h3">
              {data?.title}
            </Typography>
            <div>
              <Chip label={`${data?.price}$`} className="product-price" variant="outlined" />
            </div>
            <p className="product-text">
              {data?.text}
            </p>
            <div>
              <Button
                as={Link}
                className="product-btn"
                to="/basket"
                variant="contained"
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
