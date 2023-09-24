import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import {
  Home, NotFound, Basket, Product, Products, SingIn, SingUp, Profile,
} from './pages';
import CoffeeMaker from './pages/CoffeeMaker';
import { fetchAuthMe } from './redux/slices/auth';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div className="isolate bg-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="products" element={<Products />} />
          <Route path="sign-in" element={<SingIn />} />
          <Route path="sign-up" element={<SingUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="basket" element={<Basket />} />
          <Route path="coffee-maker" element={<CoffeeMaker />} />
        </Route>
      </Routes>
    </div>
  );
}
