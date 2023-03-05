import LogoImg from './logo.png';

function Logo() {
  return (
    <a className="block text-teal-600" href="/">
      <span className="sr-only">Home</span>
      <img src={LogoImg} alt="Coffee shop" className="h-16" />
    </a>
  );
}

export default Logo;
