import { BsList } from 'react-icons/bs';
import Link from '../Link';
import Logo from '../Logo';
import { navigationItems } from '../Footer';

function Header() {
  return (
    <header aria-label="Site Header" className="bg-white fixed w-full z-10">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navigationItems.map(({ id, href, name }) => (
                <Link id={id} href={href} name={name} />
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-orange-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-orange-800"
                href="/"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-orange-800 transition hover:text-orange-900/75 sm:block"
                href="/"
              >
                Register
              </a>
            </div>
            <button type="submit" className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <BsList />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
