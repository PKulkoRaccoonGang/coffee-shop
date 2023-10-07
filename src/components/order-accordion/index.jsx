import {
  Accordion, AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductTable from '../product-table';

// eslint-disable-next-line react/prop-types
export default function OrderAccordion({ title, price, courses }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {courses.map((c) => (
              <table>
                <tr>
                  <th>Count</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>{c.count}</td>
                  <td>{c.course.title}</td>
                  <td>{c.course.text}</td>
                  <td>{c.course.price}</td>
                </tr>
              </table>
            ))}
            <div>
              <mark>Total price:</mark>
              {price}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
