import Main from '../components/Main';
import Stats from '../components/Stats';
import Category from '../components/Category';
import Products from '../components/Products';
import Feedback from '../components/Feedback';

export default function Home() {
  return (
    <div>
      <Main />
      <Stats />
      <Category />
      <Products />
      <Feedback />
    </div>
  );
}
