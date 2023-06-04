import { BsFillBagCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Basket() {
  return (
    <Link to="/basket" className="flex items-center ml-2 cursor-pointer">
      <BsFillBagCheckFill className="fill-orange-900 hover:fill-orange-800 active:fill-orange-700" size="30" />
    </Link>
  );
}
