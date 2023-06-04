import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import Product from './pages/Product';
import About from './pages/About';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
import MarketPlace from './pages/MarketPlace';
import Basket from './pages/Basket';

export default function App() {
  return (
    <div className="isolate bg-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="profile" element={<Profile />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="basket" element={<Basket />} />
        </Route>
      </Routes>
    </div>
  );
}
