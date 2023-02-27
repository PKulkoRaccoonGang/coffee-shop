import Logo from '../Logo';
import SocialNetwork from '../SocialNetwork';
import Blockquote from '../Blockquote';
import Link from '../Link';

const socialNetworks = [
    {id: 1, href: '/', name: 'Instagram'},
    {id: 2, href: '/', name: 'Twitter'},
    {id: 3, href: '/', name: 'Facebook'},
]

const Footer = () => (
    <footer aria-label="Site Footer" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex justify-center">
                <Logo/>
            </div>
            <Blockquote
                className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500"
                text="As long as there was coffee in the world, how bad could things be?"
            />
            <nav aria-label="Footer Nav" className="mt-12">
                <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map(link => <Link href={link} name={link} />)}
                </ul>
            </nav>
            <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                {socialNetworks.map(({id, name, href}) => (
                    <SocialNetwork id={id} name={name} href={href}/>
                ))}
            </ul>
        </div>
    </footer>
);

export default Footer;
