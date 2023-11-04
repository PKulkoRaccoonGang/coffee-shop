import PropTypes from 'prop-types';
import { CardMedia, TableCell, TableRow } from '@mui/material';

import { priceFormatter } from '../utils';

export default function ProductRow({ row }) {
  const {
    title, imageUrl, count, price,
  } = row;

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          style={{ width: 100 }}
        />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{count}</TableCell>
      <TableCell>{priceFormatter(price)}</TableCell>
    </TableRow>
  );
}

ProductRow.propTypes = {
  row: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
