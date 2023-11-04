import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Head, ProductsList } from '../../components';
import mainBg from './home-video-bg.mp4';

export default function Home() {
  return (
    <>
      <Head pageTitle="Home" />
      <section className="home">
        <div className="home-img-wrapper">
          <video autoPlay muted loop poster="./home-bg-img.png">
            <source src={mainBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Container>
          <div className="home-content">
            <Typography
              className="home-content-title animate__animated animate__fadeInLeft"
              variant="h2"
              component="h1"
            >
              Baker 75 Street
            </Typography>
            <p className="animate__animated animate__fadeInLeft home-content-text">
              All system properties are available via the sx prop. In addition, the sx prop allows
              you to specify any other CSS rules you may need.
              Heres an example of how you can use it:
            </p>
            <Link
              className="animate__animated animate__fadeInLeft core-button home-link-to-products"
              to="/products"
            >
              All products
            </Link>
          </div>
        </Container>
        <ProductsList />
      </section>
    </>
  );
}
