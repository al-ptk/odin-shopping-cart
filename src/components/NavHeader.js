import './NavHeader.css';

export default function NavHeader(props) {
  return (
    <header className="NavHeader">
      <a className='logo-name' href="/">
        Online Shop
      </a>
      <nav className='link-tree'>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/products">
          <li>Products</li>
        </a>
      </nav>
    </header>
  );
}
