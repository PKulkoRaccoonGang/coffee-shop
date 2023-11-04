import PropTypes from 'prop-types';
import {
  TableCell, TableHead, TableRow, Typography,
} from '@mui/material';

export default function ProductTableHeader({ tableColumns }) {
  return (
    <TableHead>
      <TableRow>
        {tableColumns.map((columnName) => (
          <TableCell key={columnName}>
            <Typography variant="subtitle1">
              {columnName}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

ProductTableHeader.propTypes = {
  tableColumns: PropTypes.array.isRequired,
};
