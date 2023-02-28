import Logo from '../Logo';
import Link from '../Link';

function Header() {
  return (
    <header aria-label="Site Header" className="bg-white fixed w-full z-10">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {[
                'About',
                'Careers',
                'History',
                'Services',
                'Projects',
                'Blog',
              ].map((link) => (
                <Link href={link} name={link} />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
