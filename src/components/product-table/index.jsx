import PropTypes from 'prop-types';
import { Paper, Table, TableContainer } from '@mui/material';

import ProductTableHeader from './ProductTableHeader';
import ProductTableBody from './product-table-body';

const tableColumns = ['Preview', 'Name', 'Count', 'Price'];

export default function ProductTable({ data }) {
  return (
    <TableContainer
      className="product-table animate__animated animate__fadeInUp"
      component={Paper}
    >
      <Table aria-label="Product table">
        <ProductTableHeader tableColumns={tableColumns} />
        <ProductTableBody data={data} />
      </Table>
    </TableContainer>
  );
}

ProductTable.propTypes = {
  data: PropTypes.any.isRequired,
};
