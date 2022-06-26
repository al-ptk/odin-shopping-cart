import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavHeader from './NavHeader';
import Home from './Home';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <NavHeader />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/products'} element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
