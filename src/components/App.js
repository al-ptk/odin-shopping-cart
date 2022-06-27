import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavHeader from './NavHeader';
import Home from './Home';
import ProductList from './ProductList';
import Cart from './Cart'

function App() {
  return (
    <div className="App">
      <NavHeader />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/products'} element={<ProductList />} />
          <Route path={'/cart'} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
