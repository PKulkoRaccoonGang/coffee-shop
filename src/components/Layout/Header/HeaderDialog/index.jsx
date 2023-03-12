import PropTypes from 'prop-types';
import { Dialog } from '@headlessui/react';
import { BsFillXSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ButtonLink } from '../../../Button';
import HeaderDisclosure from './HeaderDisclosure';

import Logo from '../../../Logo';

export default function HeaderDialog({
  categories,
  mobileMenuOpen,
  setMobileMenuOpen,
  actionLinks,
  headerLinks,
}) {
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
              <ButtonLink href="/login" text="Login" />
            </div>
            <div className="space-y-2 py-6">
              <HeaderDisclosure products={categories} callsToAction={actionLinks} />
              {headerLinks.map(({ href, name }) => (
                <Link
                  key={name}
                  to={href}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

HeaderDialog.propTypes = {
  categories: PropTypes.array.isRequired,
  mobileMenuOpen: PropTypes.bool.isRequired,
  setMobileMenuOpen: PropTypes.func.isRequired,
  actionLinks: PropTypes.array.isRequired,
  headerLinks: PropTypes.array.isRequired,
};
