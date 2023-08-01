import { Link } from 'react-router-dom';

import LogoImg from './logo.png';
import './Logo.scss';

export default function Logo() {
  return (
    <Link className="header-logo" to="/">
      <img src={LogoImg} alt="Coffee shop" />
    </Link>
  );
}
