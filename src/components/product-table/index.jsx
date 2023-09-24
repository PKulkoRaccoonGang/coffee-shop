import { useId } from 'react';
import PropTypes from 'prop-types';
import {
  Button, CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';

import { priceFormatter } from './utils';

export default function ProductTable({ data, removeHandler }) {
  const id = useId();

  return (
    <TableContainer className="basket-products" component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Preview</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            {removeHandler && (
              <TableCell align="right">Actions</TableCell>
            )}
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
                {priceFormatter(row?.price)}
              </TableCell>
              {removeHandler && (
                <TableCell align="right">
                  <Button
                    color="error"
                    /* eslint-disable-next-line no-underscore-dangle */
                    onClick={() => removeHandler(row._id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
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
