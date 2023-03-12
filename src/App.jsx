import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import Product from './pages/Product';

export default function App() {
  return (
    <div className="isolate bg-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}
