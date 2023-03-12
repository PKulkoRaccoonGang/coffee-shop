import { BsFillEnvelopeFill, BsFillEyeSlashFill, BsFillPersonFill } from 'react-icons/bs';
import Blockquote from '../components/Blockquote';
import { Button } from '../components/Button';

export default function Registration() {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl mb-3">Register an account:</h1>

          <Blockquote text="Life without coffee is like something
          without something…sorry, I haven’t had any coffee yet."
          />
        </div>

        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="password" className="sr-only">Name</label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter your name"
              />

              <span
                className="absolute inset-y-0 right-0 grid place-content-center px-4"
              >
                <BsFillPersonFill />
              </span>
            </div>
          </div>

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
              Register an account.
            </p>
            <Button text="Sing up" />
          </div>
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="https://badasscoffee.com/wp-content/uploads/2020/05/Bad_Ass_Coffee_Menu_Overview-Drinks.png"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>

  );
}
