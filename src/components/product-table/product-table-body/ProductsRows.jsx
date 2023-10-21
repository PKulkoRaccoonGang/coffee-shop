import PropTypes from 'prop-types';
import { CardMedia, TableCell, TableRow } from '@mui/material';

import { priceFormatter } from '../utils';
import RemoveCell from './RemoveCell';

export default function ProductRow({ row, removeHandler }) {
  const {
    title, imageUrl, count, price, _id,
  } = row;

  return (
    <TableRow
      key={title}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
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
      {removeHandler && (
        // eslint-disable-next-line no-underscore-dangle
        <RemoveCell removeHandler={removeHandler} id={_id} />
      )}
    </TableRow>
  );
}

ProductRow.propTypes = {
  row: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  removeHandler: PropTypes.func,
};

ProductRow.defaultProps = {
  removeHandler: undefined,
};
