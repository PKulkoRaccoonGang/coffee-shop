import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container, Paper, Typography,
} from '@mui/material';

import { getUserData, selectorIsAuth } from '../../redux/slices/auth';
import { convertDateFormat } from './utils';

export default function Profile() {
  const userData = useSelector(getUserData);
  const isAuth = useSelector(selectorIsAuth);

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return {
      name, calories, fat, carbs, protein,
    };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <section className="profile">
      <Container>
        <header className="profile-header">
          <Typography variant="h5" component="h3">
            Consumer profile
          </Typography>
          <Typography>
            Email address:
            {' '}
            {userData?.email}
          </Typography>
          <Typography>
            Full name:
            {' '}
            {userData?.fullName}
          </Typography>
          <Typography>
            Registration date:
            {' '}
            {convertDateFormat(userData?.createdAt)}
          </Typography>
        </header>

        <Typography variant="h5" component="h3">Purchase history</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </section>
  );
}
