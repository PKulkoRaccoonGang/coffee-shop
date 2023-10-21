import PropTypes from 'prop-types';
import { TableBody } from '@mui/material';

import ProductRow from './ProductsRows';
import TotalRow from './TotalRow';

export default function ProductTableBody({ data, removeHandler }) {
  return (
    <TableBody>
      {data.map((row) => <ProductRow row={row} removeHandler={removeHandler} />)}
      <TotalRow title="Total products" data={data} format="counter" />
      <TotalRow title="Total price" data={data} format="price" />
    </TableBody>
  );
}

ProductTableBody.propTypes = {
  data: PropTypes.array.isRequired,
  removeHandler: PropTypes.func.isRequired,
};
