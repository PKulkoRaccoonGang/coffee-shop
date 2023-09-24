import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';

import { getUserData } from '../../redux/slices/auth';
import { fetchOrders, getPurchaseHistory } from '../../redux/slices/profile';
import { ProductTable } from '../../components';
import { convertDateFormat } from './utils';

export default function Profile() {
  const userData = useSelector(getUserData);
  const purchaseHistory = useSelector(getPurchaseHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

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
        <Typography
          className="profile-purchase-history-title"
          variant="h5"
          component="h3"
        >
          Purchase history
        </Typography>
        <ProductTable data={purchaseHistory || []} />
      </Container>
    </section>
  );
}
