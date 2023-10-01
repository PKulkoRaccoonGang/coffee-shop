import { useId } from 'react';
import PropTypes from 'prop-types';
import {
  CardMedia, Paper, Table, TableBody, TableCell, Tooltip,
  TableContainer, TableHead, TableRow, Typography, IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { priceFormatter, computePrice, computeCount } from './utils';

export default function ProductTable({ data, removeHandler }) {
  const id = useId();
  const totalPrice = computePrice(data).toString();

  return (
    <TableContainer
      className="basket-products animate__animated animate__fadeInUp"
      component={Paper}
    >
      <Table aria-label="Basket table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1">
                Preview
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1">
                Name
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1">
                Count
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1">
                Price
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1">
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <CardMedia
                  component="img"
                  image={row.imageUrl}
                  alt={row.title}
                  style={{ width: 100 }}
                />
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">
                {row.count}
              </TableCell>
              <TableCell align="right">
                {priceFormatter(row.price)}
              </TableCell>
              <TableCell align="right">
                <Tooltip title="Delete">
                  <IconButton
                    // eslint-disable-next-line no-underscore-dangle
                    onClick={() => removeHandler(row._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="subtitle1">
                Total products
              </Typography>
            </TableCell>
            <TableCell colSpan={3} align="right">
              <Typography variant="subtitle1">
                {computeCount(data)}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>
              <Typography variant="subtitle1">
                Total price
              </Typography>
            </TableCell>
            <TableCell colSpan={3} align="right">
              <Typography variant="subtitle1">
                {priceFormatter(totalPrice)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ProductTable.propTypes = {
  data: PropTypes.any.isRequired,
  removeHandler: PropTypes.func,
};

ProductTable.defaultProps = {
  removeHandler: undefined,
};
