import { Link } from 'react-router-dom';

import LogoImg from './logo.png';

export default function Logo() {
  return (
    <Link className="header-logo" to="/">
      <img src={LogoImg} alt="Coffee shop" />
    </Link>
  );
}
