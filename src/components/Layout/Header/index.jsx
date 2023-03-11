import { useState } from 'react';
import {
  BsPeopleFill,
  BsFillPatchCheckFill,
  BsJustify,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import HeaderDialog from './HeaderDialog';
import HeaderPopover from './HeaderPopover';
import { ButtonLink } from '../../Button';

import Logo from '../../Logo';

const categories = [
  {
    name: 'Coffee beans',
    description: 'A coffee bean is a seed of the Coffee plant and the source of coffee.',
    href: '/beans',
    icon: BsFillPatchCheckFill,
  },
  {
    name: 'Instant coffee',
    description: 'Instant coffee is made from real coffee beans.',
    href: '/instant',
    icon: BsFillPatchCheckFill,
  },
  {
    name: 'Organic coffee',
    description: 'The coffee is grown with only organic fertilizers',
    href: '/organic',
    icon: BsFillPatchCheckFill,
  },
];

const headerLinks = [
  { name: 'About', href: '/about' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Company', href: '/company' },
];

const actionLinks = [
  { name: 'Suggest cooperation', href: 'tel:+380933786928', icon: BsPeopleFill },
  { name: 'Hotline', href: 'tel:+380933786928', icon: BsFillTelephoneFill },
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
        <HeaderPopover
          categories={categories}
          actionLinks={actionLinks}
          headerLinks={headerLinks}
        />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ButtonLink href="/login" text="Login" />
        </div>
      </nav>
      <HeaderDialog
        categories={categories}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        actionLinks={actionLinks}
        headerLinks={headerLinks}
      />
    </header>
  );
}
