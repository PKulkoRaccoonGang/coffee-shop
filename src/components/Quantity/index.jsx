import { ButtonLink } from '../Button';

export default function Quantity() {
  return (
    <div className="mt-8 flex gap-4">
      <div className="flex items-center rounded border border-gray-200">
        <button
          type="button"
          className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
        >
          -
        </button>
        <span>
          <input
            type="number"
            id="quantity"
            value="1"
            className="h-10 w-16 border-y-0 border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />
        </span>
        <button
          type="button"
          className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
        >
          +
        </button>
      </div>
      <ButtonLink text="Add to Basket" href="/" />
    </div>
  );
}
