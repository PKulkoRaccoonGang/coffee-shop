import { lazy, useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchAuthMe } from './redux/auth/thunks';
import { Layout, NotFound, ProtectedRoute } from './components';
import Home from './pages/home';

const Basket = lazy(() => import(/* webpackChunkName: 'BasketPage' */'./pages/basket'));
const SingUp = lazy(() => import(/* webpackChunkName: 'SingUpPage' */'./pages/sing-up'));
const SingIn = lazy(() => import(/* webpackChunkName: 'SingInPage' */'./pages/sing-in'));
const CoffeeMaker = lazy(() => import(/* webpackChunkName: 'CoffeeMakerPage' */'./pages/coffee-maker'));
const Products = lazy(() => import(/* webpackChunkName: 'ProductsPage' */'./pages/products'));
const Product = lazy(() => import(/* webpackChunkName: 'ProductPage' */'./pages/product'));
const Profile = lazy(() => import(/* webpackChunkName: 'ProfilePage' */'./pages/profile'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div className="isolate bg-white">
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="products" element={<Products />} />
            <Route path="sign-in" element={<SingIn />} />
            <Route path="sign-up" element={<SingUp />} />
            <Route
              path="profile"
              element={(
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              )}
            />
            <Route
              path="basket"
              element={(
                <ProtectedRoute>
                  <Basket />
                </ProtectedRoute>
              )}
            />
            <Route path="coffee-maker" element={<CoffeeMaker />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
