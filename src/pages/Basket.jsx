import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export default function Basket() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">3 Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              <div className="w-16">
                <img
                  className="h-16"
                  src="https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2442055-1_3.jpg"
                  alt="123"
                />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Iphone 6S</span>
                <span className="text-orange-900 text-xs">Apple</span>
                <a
                  href="/"
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <Button>-</Button>
              <span>
                <label htmlFor="quantity" className="sr-only">Quality</label>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  readOnly
                  value="1"
                  className="h-10 w-16 border-y-0 border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />
              </span>
              <Button>+</Button>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
          </div>
          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              <div className="w-16">
                <img
                  className="h-16"
                  src="https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2442055-1_3.jpg"
                  alt="123"
                />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Xiaomi Mi 20000mAh</span>
                <span className="text-orange-900 text-xs">Xiaomi</span>
                <a
                  href="/"
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <Button>-</Button>
              <span>
                <label htmlFor="quantity" className="sr-only">Quality</label>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  readOnly
                  value="1"
                  className="h-10 w-16 border-y-0 border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />
              </span>
              <Button>+</Button>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
            <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
          </div>
          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              <div className="w-16">
                <img
                  className="h-16"
                  src="https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2442055-1_3.jpg"
                  alt="123"
                />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Airpods</span>
                <span className="text-orange-900 text-xs">Apple</span>
                <a
                  href="/"
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <Button>-</Button>
              <span>
                <label htmlFor="quantity" className="sr-only">Quality</label>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  readOnly
                  value="1"
                  className="h-10 w-16 border-y-0 border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />
              </span>
              <Button>+</Button>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
            <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
          </div>
          <Link to="/" className="flex font-semibold text-orange-900 text-sm mt-10">
            Continue Shopping
          </Link>
        </div>
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items 3</span>
            <span className="font-semibold text-sm">590$</span>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <Button>Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
