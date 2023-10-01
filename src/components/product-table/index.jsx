import { useId } from 'react';
import PropTypes from 'prop-types';
import {
  Button, CardMedia, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';

import { priceFormatter } from './utils';

function computePrice(courses) {
  // eslint-disable-next-line no-return-assign
  return courses.reduce((total, course) => total += course.price * course.count, 0);
}

function computeCount(courses) {
  // eslint-disable-next-line no-return-assign
  return courses.reduce((total, course) => total += course.count, 0);
}

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
            <TableCell>Preview</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <CardMedia
                  component="img"
                  image={row?.imageUrl}
                  alt={row?.title}
                  style={{ width: 100 }}
                />
              </TableCell>
              <TableCell align="right">{row?.title}</TableCell>
              <TableCell align="right">
                {row.count}
              </TableCell>
              <TableCell align="right">
                {priceFormatter(row.price)}
              </TableCell>
              <TableCell align="right">
                <Button
                  color="error"
                    /* eslint-disable-next-line no-underscore-dangle */
                  onClick={() => removeHandler(row._id)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="subtitle1">
                Total products
              </Typography>
            </TableCell>
            <TableCell colSpan={2} align="right">
              <Typography variant="subtitle1">
                {computeCount(data)}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="subtitle1">
                Total price
              </Typography>
            </TableCell>
            <TableCell colSpan={2} align="right">
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
