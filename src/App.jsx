import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

import './App.css';

const App = () => {
  return (
      <div className="isolate bg-white">
        <Header />
        <Home />
        <Footer />
      </div>
  );
};

export default App;
