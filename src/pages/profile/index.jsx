import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Container, Typography } from '@mui/material';

import { getUserData } from '../../redux/auth/selectors';
import { getOrders } from '../../redux/profile/selectors';
import { fetchOrders } from '../../redux/profile/thunks';
import { Head, OrderAccordion } from '../../components';
import { convertDateFormat } from './utils';

export default function Profile() {
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();
  const ordersHistory = useSelector(getOrders);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    dispatch(fetchOrders());
    if (ordersHistory) {
      setOrders(ordersHistory);
    }
  }, [JSON.stringify(ordersHistory)]);

  return (
    <>
      <Head pageTitle="Profile" />
      <section className="profile">
        <Container>
          <header className="profile-header">
            <Typography className="animate__animated animate__fadeInLeft" variant="h5" component="h3">
              Consumer profile
            </Typography>
            <Typography className="animate__animated animate__fadeInLeft">
              Email address:
              {' '}
              {userData?.email}
            </Typography>
            <Typography className="animate__animated animate__fadeInLeft">
              Full name:
              {' '}
              {userData?.fullName}
            </Typography>
            <Typography className="animate__animated animate__fadeInLeft">
              Registration date:
              {' '}
              {convertDateFormat(userData?.createdAt)}
            </Typography>
          </header>
          <Typography
            className="profile-purchase-history-title animate__animated animate__fadeInLeft"
            variant="h5"
            component="h3"
          >
            Purchase history
          </Typography>
          {orders.length ? orders.map(({ _id, date, products }) => (
            <OrderAccordion
              key={_id}
              date={convertDateFormat(date)}
              id={_id}
              products={products}
            />
          )) : (
            <Alert className="animate__animated animate__fadeInLeft" severity="info">
              Your purchase history will be displayed here
            </Alert>
          )}
        </Container>
      </section>
    </>
  );
}
