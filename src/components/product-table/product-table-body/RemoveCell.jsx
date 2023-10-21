import PropTypes from 'prop-types';
import { IconButton, TableCell, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RemoveCell({ removeHandler, id }) {
  return (
    <TableCell>
      <Tooltip title="Delete">
        <IconButton
          // eslint-disable-next-line no-underscore-dangle
          onClick={() => removeHandler(id)}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </TableCell>
  );
}

RemoveCell.propTypes = {
  removeHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
