import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavHeader from './NavHeader';
import Home from './Home';
import ProductList from './ProductList';
import Cart from './Cart';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <NavHeader />
        <Routes>
          <Route path={'/'} element={<Home counter={{ count, setCount }} />} />
          <Route path={'/products'} element={<ProductList />} />
          <Route path={'/cart'} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
