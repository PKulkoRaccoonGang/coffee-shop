import { BsFillBagCheckFill } from 'react-icons/bs';

export default function Basket() {
  return (
    <div className="flex items-center ml-2 cursor-pointer">
      <BsFillBagCheckFill className="fill-orange-900 hover:fill-orange-800 active:fill-orange-700" size="30" />
    </div>
  );
}
