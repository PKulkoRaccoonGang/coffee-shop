import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import {
  Home, NotFound, Basket, Product, Products, SingIn, SingUp, Profile,
} from './pages';

export default function App() {
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
        </Route>
      </Routes>
    </div>
  );
}
