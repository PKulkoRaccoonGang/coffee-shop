import { Link } from 'react-router-dom';

import LogoImg from './logo.png';

export default function Logo() {
  return (
    <Link className="block text-teal-600" to="/">
      <span className="sr-only">Home</span>
      <img src={LogoImg} alt="Coffee shop" className="h-16" />
    </Link>
  );
}
