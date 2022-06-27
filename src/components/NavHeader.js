import './NavHeader.css';
import cartLogo from '../images/icons/cart.svg';

export default function NavHeader(props) {
  return (
    <header className="NavHeader">
      <a className="logo-name" href="/">
        Online Shop
      </a>
      <nav className="link-tree">
        <a className="nav-link" href="/">
          <li>Home</li>
        </a>
        <a className="nav-link" href="/products">
          <li>Products</li>
        </a>
        <a className="cart-logo" href="/cart">
          <img
            style={{
              width: '70%',
              aspectRation: '1/1',
              margin: '5px 5px',
            }}
            alt="Cart icon"
            src={cartLogo}
          />
        </a>
      </nav>
    </header>
  );
}
