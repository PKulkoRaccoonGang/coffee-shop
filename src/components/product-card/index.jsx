import PropTypes from 'prop-types';
import {
  Avatar, Chip, Card, CardMedia, CardContent, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProductCard({
  id, imageUrl, title, price,
}) {
  return (
    <Link className="product-card" to={`/product/${id}`}>
      <Card className="product-card-item" sx={{ maxWidth: 345 }}>
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
          <Chip
            className="product-card-chip"
            label={price}
            color="info"
            avatar={<Avatar>$</Avatar>}
          />
        </CardContent>
      </Card>
    </Link>
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
