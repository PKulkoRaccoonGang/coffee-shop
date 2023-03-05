import { BsFacebook, BsTwitter, BsTelegram } from 'react-icons/bs';
import SocialNetwork from '../SocialNetwork';
import Blockquote from '../Blockquote';
import Link from '../Link';
import Logo from '../Logo';

const socialNetworks = [
  {
    id: 1, href: 'https://desktop.telegram.org/', name: 'Telegram', icon: <BsTelegram size="30" />,
  },
  {
    id: 2, href: 'https://twitter.com/', name: 'Twitter', icon: <BsTwitter size="30" />,
  },
  {
    id: 3, href: 'https://www.facebook.com/', name: 'Facebook', icon: <BsFacebook size="30" />,
  },
];

export const navigationItems = [
  { id: 1, name: 'About', href: '/about' },
  { id: 2, name: 'History', href: '/history' },
  { id: 3, name: 'Careers', href: '/careers' },
  { id: 4, name: 'Services', href: '/services' },
  { id: 5, name: 'Projects', href: '/projects' },
  { id: 6, name: 'Blog', href: '/blog' },
];

function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Logo />
        </div>
        <Blockquote
          className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500"
          text="As long as there was coffee in the world, how bad could things be?"
        />
        <nav aria-label="Footer Nav" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {navigationItems.map(
              ({ id, href, name }) => (
                <Link id={id} href={href} name={name} />
              ),
            )}
          </ul>
        </nav>
        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          {socialNetworks.map(({
            id, name, href, icon,
          }) => (
            <SocialNetwork id={id} name={name} href={href} icon={icon} />
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
