import { BsFacebook, BsTwitter, BsTelegram } from 'react-icons/bs';
import SocialNetwork from '../../SocialNetwork';

import Logo from '../../Logo';

const socialNetworks = [
  {
    name: 'Telegram', href: 'https://desktop.telegram.org', icon: <BsTelegram size="30" />,
  },
  {
    name: 'Twitter', href: 'https://twitter.com', icon: <BsTwitter size="30" />,
  },
  {
    name: 'Facebook', href: 'https://www.facebook.com', icon: <BsFacebook size="30" />,
  },
];

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Logo />
        </div>
        <blockquote className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          As long as there was coffee in the world, how bad could things be?
        </blockquote>
        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          {socialNetworks.map(({
            name, href, icon,
          }) => (
            <SocialNetwork id={name} name={name} href={href} icon={icon} />
          ))}
        </ul>
      </div>
    </footer>
  );
}
