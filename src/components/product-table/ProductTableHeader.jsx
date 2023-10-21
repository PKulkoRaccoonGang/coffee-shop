import PropTypes from 'prop-types';
import {
  TableCell, TableHead, TableRow, Typography,
} from '@mui/material';

export default function ProductTableHeader({ tableColumns, removeHandler }) {
  return (
    <TableHead>
      <TableRow>
        {tableColumns.map((columnName) => (
          <TableCell>
            <Typography variant="subtitle1">
              {columnName}
            </Typography>
          </TableCell>
        ))}
        {removeHandler && (
        <TableCell>
          <Typography variant="subtitle1">
            Actions
          </Typography>
        </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
}

ProductTableHeader.propTypes = {
  tableColumns: PropTypes.array.isRequired,
  removeHandler: PropTypes.func,
};

ProductTableHeader.defaultProps = {
  removeHandler: undefined,
};
