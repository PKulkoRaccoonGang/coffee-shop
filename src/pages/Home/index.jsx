import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Autocomplete, TextField } from '@mui/material';

import Products from '../../components/ProductsList';
import mainBg from './main-bg.jpg';
import './Home.scss';

const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];

export default function Home() {
  return (
    <section className="home">
      <div className="home-img-wrapper">
        <img className="home-img" src={mainBg} alt="coffe shop" />
      </div>
      <Container>
        <div className="home-content">
          <Typography variant="h2" component="h1" className="home-content-title">
            Baker 75 Street
          </Typography>
          <p className="home-content-text">
            All system properties are available via the sx prop. In addition, the sx prop allows
            you to specify any other CSS rules you may need. Heres an example of how you can use it:
          </p>
          <Autocomplete
            options={options}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            renderInput={(params) => <TextField {...params} label="Coffee" />}
          />
        </div>
      </Container>
      <Products />
    </section>
  );
}
