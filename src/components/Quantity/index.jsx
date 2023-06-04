import { useState } from 'react';
import { Button, ButtonLink } from '../Button';

export default function Quantity() {
  const [productsNumber, setProductsNumber] = useState(0);
  const addProducts = () => {
    setProductsNumber(productsNumber + 1);
  };

  const removeProducts = () => {
    setProductsNumber(productsNumber - 1);
  };

  return (
    <div className="mt-8 flex gap-4">
      <div className="flex items-center rounded-lg border border-gray-200">
        <Button onClick={removeProducts} disabled={productsNumber === 0}>
          -
        </Button>
        <span>
          <label htmlFor="quantity" className="sr-only">Quality</label>
          <input
            type="number"
            id="quantity"
            min="0"
            readOnly
            value={productsNumber}
            className="h-10 w-16 border-y-0 border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />
        </span>
        <Button onClick={addProducts}>+</Button>
      </div>
      <ButtonLink href="/">Add to Basket</ButtonLink>
    </div>
  );
}
