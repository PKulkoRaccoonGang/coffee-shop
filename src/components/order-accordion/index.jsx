import PropTypes from 'prop-types';
import {
  Accordion, AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ProductTable from '../product-table';

export default function OrderAccordion({
  id, date, courses,
}) {
  return (
    <Accordion className="order-accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="order-accordion"
      >
        <Typography>
          {date}
          {' '}
          /
          {' '}
          Order №
          {id}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ProductTable data={courses} isRemoveAction={false} />
      </AccordionDetails>
    </Accordion>
  );
}

OrderAccordion.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired,
};
