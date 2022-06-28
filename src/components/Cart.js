import './Cart.css';
import { getCart } from './cartData';

export default function Cart(props) {
  return (
    <div className="Cart">
      {getCart().map((elem) => (
        <div key={elem.id}>
          <h1>{elem.name}</h1>
        </div>
      ))}
    </div>
  );
}
