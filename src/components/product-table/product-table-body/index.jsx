import PropTypes from 'prop-types';
import { TableBody } from '@mui/material';

import ProductRow from './ProductsRows';
import TotalRow from './TotalRow';

export default function ProductTableBody({ data }) {
  return (
    <TableBody>
      {data.map((row) => <ProductRow key={row.title} row={row} />)}
      <TotalRow title="Total products" data={data} format="counter" />
      <TotalRow title="Total price" data={data} format="price" />
    </TableBody>
  );
}

ProductTableBody.propTypes = {
  data: PropTypes.array.isRequired,
};
