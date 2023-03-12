import { BsFillEnvelopeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Blockquote from '../components/Blockquote';
import { Button } from '../components/Button';

export default function Login() {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl mb-3">Get started today!</h1>

          <Blockquote text="You should know that before 10 am, no matter what the
            question is, my answer is always coffee."
          />
        </div>

        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="email" className="sr-only">Email</label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span
                className="absolute inset-y-0 right-0 grid place-content-center px-4"
              >
                <BsFillEnvelopeFill />
              </span>
            </div>
          </div>

          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="password" className="sr-only">Password</label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span
                className="absolute inset-y-0 right-0 grid place-content-center px-4"
              >
                <BsFillEyeSlashFill />
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <Link className="underline" to="/registration"> Sign up</Link>
            </p>
            <Button text="Sign in" />
          </div>
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="https://peets-shop.imgix.net/products/ASM-M_2.png?v=1645048107&auto=format,compress"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>

  );
}
