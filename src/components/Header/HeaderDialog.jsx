import { Dialog, Disclosure } from '@headlessui/react';
import { BsChevronDown, BsFillXSquareFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import Logo from '../Logo';

export default function HeaderDialog({
  products,
  mobileMenuOpen,
  setMobileMenuOpen,
  callsToAction,
  links,
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <BsFillXSquareFill className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="py-6">
              <a
                className="-mx-3 mb-3 block rounded-md bg-orange-900 px-5 py-2.5 leading-7 text-sm font-semibold text-white transition hover:bg-orange-800"
                href="/"
              >
                Login
              </a>
              <a
                className="-mx-3 block rounded-md bg-gray-100 px-5 py-2.5 leading-7 text-sm font-semibold text-orange-800 transition hover:text-orange-900/75"
                href="/"
              >
                Register
              </a>
            </div>
            <div className="space-y-2 py-6">
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                      Product
                      <BsChevronDown
                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              {links.map(({ href, name }) => (
                <a key={name} href={href} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  {name}
                </a>
              ))}

            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

HeaderDialog.propTypes = {
  products: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
  }).isRequired,
  mobileMenuOpen: PropTypes.bool.isRequired,
  setMobileMenuOpen: PropTypes.func.isRequired,
  callsToAction: PropTypes.func.isRequired,
  links: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};
