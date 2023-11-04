import PropTypes from 'prop-types';
import { TableCell, TableRow, Typography } from '@mui/material';

import { computeCount, computePrice, priceFormatter } from '../utils';

export default function TotalRow({ title, data, format }) {
  const totalPrice = computePrice(data).toString();

  return (
    <TableRow>
      <TableCell colSpan={3}>
        <Typography variant="subtitle1">
          {title}
        </Typography>
      </TableCell>
      <TableCell colSpan={3} align="right">
        <Typography variant="subtitle1">
          {format === 'counter' ? computeCount(data) : priceFormatter(totalPrice)}
        </Typography>
      </TableCell>
    </TableRow>
  );
}

TotalRow.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  format: PropTypes.string.isRequired,
};
