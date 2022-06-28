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
        <Routes>
          <Route path="/" element={<NavHeader />}>
            <Route index element={<Home />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="cart" element={<Cart />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>404 — Not Found</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
