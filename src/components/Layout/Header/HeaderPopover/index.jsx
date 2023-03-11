import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import HeaderPopoverItem from './HeaderPopoverItem';

export default function HeaderPopover({ categories, actionLinks, headerLinks }) {
  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          Product
          <BsChevronDown className="h-3 w-4" aria-hidden="true" />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
          >
            <div className="p-4">
              {categories.map((product) => (<HeaderPopoverItem product={product} />))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {actionLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      {headerLinks.map(({ href, name }) => (
        <Link key={name} to={href} className="text-sm font-semibold leading-6 text-gray-900">
          {name}
        </Link>
      ))}

    </Popover.Group>
  );
}

HeaderPopover.propTypes = {
  categories: PropTypes.array.isRequired,
  actionLinks: PropTypes.array.isRequired,
  headerLinks: PropTypes.array.isRequired,
};
