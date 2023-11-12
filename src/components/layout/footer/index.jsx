import { Container } from '@mui/material';

import SocialNetwork from './social-network';
import Logo from '../../logo';
import { socialNetworks } from './constants';

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site Footer">
      <Container>
        <Logo />
        <blockquote className="footer-text">
          As long as there was coffee in the world, how bad could things be?
        </blockquote>
        <ul className="footer-social-links">
          {socialNetworks.map(({
            name, href, icon,
          }) => (
            <SocialNetwork
              key={name}
              name={name}
              href={href}
              icon={icon}
            />
          ))}
        </ul>
      </Container>
    </footer>
  );
}
