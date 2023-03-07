import { useState } from 'react';
import { BsFillPatchQuestionFill, BsJustify } from 'react-icons/bs';
import Logo from '../Logo';
import HeaderDialog from './HeaderDialog';
import HeaderPopover from './HeaderPopover';

const products = [
  {
    name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: BsFillPatchQuestionFill,
  },
  {
    name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: BsFillPatchQuestionFill,
  },
  {
    name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: BsFillPatchQuestionFill,
  },
  {
    name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: BsFillPatchQuestionFill,
  },
  {
    name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: BsFillPatchQuestionFill,
  },
];

const links = [
  { name: 'Features', href: '/' },
  { name: 'Marketplace', href: '/' },
  { name: 'Company', href: '/' },
];

const callsToAction = [
  { name: 'Watch demo', href: '/', icon: BsFillPatchQuestionFill },
  { name: 'Contact sales', href: '/', icon: BsFillPatchQuestionFill },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <BsJustify className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <HeaderPopover products={products} callsToAction={callsToAction} links={links} />

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            className="block rounded-md bg-orange-900 px-5 py-2.5 mr-2 text-sm font-medium text-white transition hover:bg-orange-800"
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
      </nav>
      <HeaderDialog
        products={products}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        callsToAction={callsToAction}
        links={links}
      />
    </header>
  );
}
