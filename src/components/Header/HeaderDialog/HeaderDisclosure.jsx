import PropTypes from 'prop-types';
import { Disclosure } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';

export default function HeaderDisclosure({ products, callsToAction }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
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
  );
}

HeaderDisclosure.propTypes = {
  products: PropTypes.array.isRequired,
  callsToAction: PropTypes.array.isRequired,
};
