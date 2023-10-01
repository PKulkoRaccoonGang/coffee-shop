import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';

import { ProductTable } from '../../components';
import { getUserData } from '../../redux/auth/selectors';
import { convertDateFormat } from './utils';

export default function Profile() {
  const userData = useSelector(getUserData);

  return (
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
        <ProductTable data={[]} />
      </Container>
    </section>
  );
}
