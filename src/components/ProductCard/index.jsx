import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import { Avatar, Button, Chip } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import './ProductCard.scss';

export default function ProductCard({
  id, imageUrl, title, price,
}) {
  return (
    <li>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          className="product-card-img"
          component="img"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {title}
          </Typography>
          <Chip label={price} color="info" avatar={<Avatar>$</Avatar>} />
        </CardContent>
        <Button
          className="product-card-btn"
          as={Link}
          to={`/product/${id}`}
          variant="contained"
          size="large"
        >
          More
        </Button>
      </Card>
    </li>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string,
};

ProductCard.defaultProps = {
  price: undefined,
};
